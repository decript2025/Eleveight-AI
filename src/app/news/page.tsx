import Image from 'next/image';
import Link from 'next/link';

interface ArticleImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

interface Article {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  slug: string;
  createdAt: string;
  publishedAt: string;
  Image: ArticleImage;
  Category?: string;
}

interface ApiResponse {
  data: Article[];
}

async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch('https://console.eleveight.ai/api/articles?populate=Image', {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch articles');
    }
    
    const data: ApiResponse = await res.json();
    console.log(data)
    return data.data || [];
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
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

export default async function NewsPage() {
  // Temporarily disabled API fetch due to backend issues
  // const articles = await getArticles();
  const articles: Article[] = [];

  return (
    <div className="min-h-screen bg-white text-black">      
      <main className="pt-24">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              Latest News
            </h1>
            
            <p className="text-xl mb-12 text-center text-gray-600">
              Stay updated with the latest developments, announcements, and insights from Eleveight AI.
            </p>
            
            <div className="space-y-8">
              {articles.length > 0 ? (
                articles.map((article) => (
                  <article key={article.documentId} className="border-b border-gray-200 pb-8 last:border-b-0">
                    <Link href={`/news/${article.slug}`} className="flex flex-col md:flex-row md:items-start gap-6 group">
                      {article.Image && (
                        <div className="relative w-full md:w-64 h-48 flex-shrink-0">
                          <Image
                            src={`https://console.eleveight.ai${article.Image.url}`}
                            alt={article.Image.alternativeText || article.Title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      )}
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          {article.Category && (
                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                              {article.Category}
                            </span>
                          )}
                          <time className="text-sm text-gray-600">
                            {formatDate(article.publishedAt)}
                          </time>
                        </div>
                        
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {article.Title}
                        </h2>
                        
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {article.Description}
                        </p>
                        
                        <span className="text-primary font-medium group-hover:underline inline-block">
                          Read more →
                        </span>
                      </div>
                    </Link>
                  </article>
                ))
              ) : (
                <p className="text-center text-gray-500">No articles available at the moment.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
