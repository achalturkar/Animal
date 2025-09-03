
"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer: "You can return items within 30 days of purchase. You can return items within 30 days of purchase. You can return items within 30 days of purchase."
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes, free shipping is available for orders over $50."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach us at support@animal.com."
  }
];

const FAQSection=() => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-300 py-4 transition-all duration-300"
        >
          {/* Question */}
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-lg font-medium text-left"
          >
            {faq.question}
            <span className="text-xl p-1 bg-black text-white rounded">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          {/* Answer */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export default FAQSection;
