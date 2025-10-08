export default function FAQPage() {
  return (
    <section className="px-7 md:px-10 py-10 text-foreground">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[40px] md:text-5xl font-bold mb-6 text-center">FAQ</h1>
        <p className="text-base md:text-lg mb-10 text-center">
          Frequently Asked Questions
        </p>

        <div className="space-y-6">
          <article className="bg-[#111] border border-[#2a2a2a] rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">What is Eleveight AI?</h2>
            <p className="text-sm md:text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel dolor eget dui consequat luctus. Integer viverra, elit ut rhoncus tristique, augue nibh tincidunt purus, ac aliquet mi leo facilisis ipsum.
            </p>
          </article>

          <article className="bg-[#111] border border-[#2a2a2a] rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">How do I reserve GPUs?</h2>
            <p className="text-sm md:text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum, arcu non feugiat facilisis, nibh justo euismod nunc, ac mattis magna ligula quis odio.
            </p>
          </article>

          <article className="bg-[#111] border border-[#2a2a2a] rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">What contract lengths are available?</h2>
            <p className="text-sm md:text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Cras facilisis, neque in consectetur viverra, erat nunc egestas augue, nec sodales tortor lectus et justo.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}


