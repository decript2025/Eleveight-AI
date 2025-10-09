import FaqAccordion, { type FAQItem } from './FaqAccordion'

type FAQResponse = {
  data: FAQItem[]
}

export default async function FAQPage() {
  let items: FAQItem[] = []
  try {
    const res = await fetch('https://console.eleveight.ai/api/faqs', {
      // Revalidate every hour; adjust as needed
      next: { revalidate: 3600 },
      // Ensure fresh data on navigation while still cache-friendly
      cache: 'force-cache',
    })

    if (res.ok) {
      const json = (await res.json()) as FAQResponse
      items = Array.isArray(json?.data) ? json.data : []
    }
  } catch (_) {
    // Intentionally ignore and fall back to empty state
  }

  return (
    <>
      <section className="px-7 md:px-10 py-10 text-foreground mt-30">
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#111] border border-[#2a2a2a] overflow-hidden px-[48px] py-[64px]">
          <h1 className="text-[46px] font-bold mb-8 text-center">FAQ</h1>
          <h2 className="text-[40px] md:text-4xl mb-6 text-center leading-10">Have questions? We’ve got you covered.</h2>
          <p className="text-base md:text-lg mb-10 text-center">
          Explore the most common inquiries about Eleveight AI and how we empower innovation.
          </p>

          {items.length === 0 ? (
            <div className="bg-[#111] border border-[#2a2a2a] rounded-lg p-6 text-sm md:text-base leading-6">
              No FAQs available right now. Please check back later.
            </div>
          ) : (
            // Accordion list matching the visual design
            <FaqAccordion items={items} />
          )}
        </div>
      </section>
    </>
  )
}


