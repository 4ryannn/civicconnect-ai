import { useState } from "react";

const faqs = [
  {
    question: "Is GPS mandatory?",
    answer:
      "GPS helps improve location accuracy, but users can manually select the location if GPS is unavailable.",
  },
  {
    question: "Can I track my complaint?",
    answer:
      "Yes. Every complaint receives a unique Complaint ID and real-time status updates.",
  },
  {
    question: "How accurate is AI detection?",
    answer:
      "AI analyzes uploaded images and suggests the most likely category with a confidence score.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes. Your complaint data is securely stored and only authorized personnel can access it.",
  },
  {
    question: "How long does issue resolution take?",
    answer:
      "Resolution time depends on the issue type and authority, but you can monitor progress from your dashboard.",
  },
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 text-center">
  <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
    Frequently Asked Questions
  </p>

  <h2 className="text-4xl font-bold text-white md:text-5xl">
    Everything you need to know
  </h2>

  <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
    Find answers to the most common questions about CivicConnect AI.
  </p>
</div>

        <div className="space-y-4">
  {faqs.map((faq, index) => (
   <div
  key={index}
  className="rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:border-cyan-400/40 hover:bg-slate-800/80"
>
      <button
        onClick={() => setOpenIndex(index)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <h3 className="text-lg font-semibold text-white">
          {faq.question}
        </h3>

        <span className="text-2xl text-cyan-400">
          {openIndex === index ? "−" : "+"}
        </span>
      </button>

      {openIndex === index && (
        <div className="px-6 pb-6">
          <p className="leading-7 text-slate-400">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

export default FAQ;