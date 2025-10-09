import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ArticleImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

interface ArticleContent {
  type: string;
  children: Array<{
    type: string;
    text?: string;
    bold?: boolean;
    italic?: boolean;
  }>;
  level?: number;
}

interface ArticleData {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  slug: string;
  Content: ArticleContent[];
  createdAt: string;
  publishedAt: string;
  Image: ArticleImage;
  Category?: string;
}

interface ApiResponse {
  data: ArticleData;
}

async function getArticle(slug: string): Promise<ArticleData | null> {
  try {
    const res = await fetch(`https://console.eleveight.ai/api/articles/slug/${slug}`, {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch article');
    }
    
    const data: ApiResponse = await res.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

function renderContent(content: ArticleContent[]) {
  return content.map((block, index) => {
    if (block.type === 'heading') {
      const level = block.level || 2;
      const HeadingTag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
      const text = block.children.map(child => child.text).join('');
      const headingClasses = {
        h1: 'text-4xl md:text-5xl font-bold mb-6 mt-8',
        h2: 'text-3xl md:text-4xl font-bold mb-5 mt-7',
        h3: 'text-2xl md:text-3xl font-bold mb-4 mt-6',
        h4: 'text-xl md:text-2xl font-bold mb-3 mt-5',
        h5: 'text-lg md:text-xl font-bold mb-3 mt-4',
        h6: 'text-base md:text-lg font-bold mb-2 mt-3',
      };
      
      return (
        <HeadingTag key={index} className={headingClasses[HeadingTag]}>
          {text}
        </HeadingTag>
      );
    }
    
    if (block.type === 'paragraph') {
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {block.children.map((child, childIndex) => {
            const text = child.text || '';
            if (child.bold) {
              return <strong key={childIndex}>{text}</strong>;
            }
            if (child.italic) {
              return <em key={childIndex}>{text}</em>;
            }
            return <span key={childIndex}>{text}</span>;
          })}
        </p>
      );
    }
    
    return null;
  });
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="pt-24">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Back to News */}
            <Link 
              href="/news" 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors mb-8"
            >
              ← Back to News
            </Link>

            {/* Article Header */}
            <article>
              {/* Category and Date */}
              <div className="flex items-center gap-3 mb-4">
                {article.Category && (
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {article.Category}
                  </span>
                )}
                <time className="text-sm text-gray-600">
                  {formatDate(article.publishedAt)}
                </time>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {article.Title}
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {article.Description}
              </p>

              {/* Featured Image */}
              {article.Image && (
                <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={`https://console.eleveight.ai${article.Image.url}`}
                    alt={article.Image.alternativeText || article.Title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {article.Content && renderContent(article.Content)}
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}

