import Header from '../header';
import Footer from '../footer';

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main className="pt-24">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              Contact Us
            </h1>

            <p className="text-xl mb-12 text-center text-gray-600">
              We'd love to hear from you. Reach out using the details below or send us a message.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Head Office</h2>
                <address className="not-italic text-gray-600 leading-relaxed">
                  1/31 Azatutyan ave.,
                  <br />
                  Yerevan, 0037, Armenia
                  <br />
                  Phone: <a className="underline" href="tel:+37499551234">+374 99 55 12 34</a>
                  <br />
                  Email: <a className="underline" href="mailto:info@eleveight.ai">info@eleveight.ai</a>
                </address>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Send a message</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1" htmlFor="name">Name</label>
                    <input id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1" htmlFor="email">Email</label>
                    <input id="email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1" htmlFor="message">Message</label>
                    <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="How can we help?" />
                  </div>
                  <button type="button" className="px-5 py-2 bg-primary text-primary-foreground rounded-md">
                    Send
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

