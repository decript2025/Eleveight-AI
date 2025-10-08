import Header from '../header';
import Footer from '../footer';

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      
      <main className="pt-24">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              About Our Company
            </h1>
            
            <div className="prose prose-lg mx-auto text-black">
              <p className="text-xl mb-8 text-center text-gray-600">
                Learn more about Eleveight AI and our mission to revolutionize education through artificial intelligence.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed">
                    At Eleveight AI, we believe that every student deserves personalized, high-quality education. 
                    Our mission is to leverage cutting-edge artificial intelligence to create adaptive learning 
                    experiences that meet each student's unique needs and learning style.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We envision a future where AI-powered education breaks down barriers to learning, 
                    making world-class education accessible to students everywhere, regardless of their 
                    background, location, or circumstances.
                  </p>
                </div>
              </div>
              
              <div className="mt-16">
                <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Innovation</h3>
                    <p className="text-sm text-gray-600">
                      We continuously push the boundaries of what's possible in educational technology.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Accessibility</h3>
                    <p className="text-sm text-gray-600">
                      We believe quality education should be accessible to everyone, everywhere.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Excellence</h3>
                    <p className="text-sm text-gray-600">
                      We maintain the highest standards in everything we do, from product development to customer support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
