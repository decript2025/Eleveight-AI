export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Eleveight AI Launches Revolutionary Learning Platform",
      date: "December 15, 2024",
      excerpt: "We're excited to announce the launch of our new AI-powered learning platform that adapts to each student's unique learning style and pace.",
      category: "Product Launch"
    },
    {
      id: 2,
      title: "Partnership with Leading Educational Institutions",
      date: "December 10, 2024",
      excerpt: "Eleveight AI has formed strategic partnerships with top universities and schools to bring advanced AI tutoring to more students worldwide.",
      category: "Partnership"
    },
    {
      id: 3,
      title: "AI Technology Breakthrough in Personalized Education",
      date: "December 5, 2024",
      excerpt: "Our research team has achieved a significant breakthrough in machine learning algorithms that improve student engagement and learning outcomes.",
      category: "Research"
    },
    {
      id: 4,
      title: "Eleveight AI Receives Industry Recognition",
      date: "November 28, 2024",
      excerpt: "We're honored to receive the 'Innovation in Education Technology' award at the annual EdTech Excellence Awards.",
      category: "Award"
    },
  ];

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
              {newsItems.map((item) => (
                <article key={item.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {item.category}
                        </span>
                        <time className="text-sm text-gray-600">
                          {item.date}
                        </time>
                      </div>
                      
                      <h2 className="text-xl md:text-2xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer">
                        {item.title}
                      </h2>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.excerpt}
                      </p>
                      
                      <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                        Read more →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
