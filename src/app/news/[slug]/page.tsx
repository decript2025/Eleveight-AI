import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ShareButtons from './ShareButtons';

interface ArticleImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

interface ArticleData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  content: string;
  createdAt: string;
  publishedAt: string;
  image: ArticleImage;
  category?: string;
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

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);

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
                {article.category && (
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {article.title}
              </h1>

              {/* Description with Share Buttons */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 mb-8">
                <p className="text-xl text-gray-600 leading-relaxed flex-1">
                  {article.description}
                </p>
                <div className="flex md:flex-col gap-3 md:gap-2">
                  <ShareButtons title={article.title} description={article.description} />
                </div>
              </div>

              {/* Featured Image */}
              {article.image && (
                <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={`https://console.eleveight.ai${article.image.url}`}
                    alt={article.image.alternativeText || article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none [&_p]:py-[10px] [&_h1]:py-[10px] [&_h2]:py-[10px] [&_h3]:py-[10px] [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:py-[10px] [&_li]:mb-2"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}

