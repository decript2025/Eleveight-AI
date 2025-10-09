export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="pt-24">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            Contact Eleveight AI
            </h1>

            <p className="text-xl mb-12 text-center text-gray-600">
            Located in the heart of Yerevan, we’re ready to support your next AI initiative.
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
                <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1320.407281589575!2d44.51716771693004!3d40.1965890638223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abda199fde3b5%3A0x4d54f0526e57e756!2s1%2C%2031%20Azatutyan%20Ave%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2sus!4v1759997631721!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Eleveight Office Location - Azatutyan Ave 1/31, Yerevan, Armenia"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  📍 1/31 Azatutyan Avenue, Yerevan, 0037, Armenia
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

