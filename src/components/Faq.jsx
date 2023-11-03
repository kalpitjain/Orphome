import React, { useState } from "react";

const Faq = () => {
  const faqData = [
    {
      question: "What is Orphome?",
      answer:
        "Orphome is a website where you can find nearby orphanages & celebrate your family or corporate social events at no cost with a social impact.",
    },
    {
      question: "How can I find an orphanage near me?",
      answer:
        "You can use the search feature on the Orphome website to find orphanages near you. Simply enter your city name & the website will show you the orphanages available in that area.",
    },
    {
      question: "What is the Cost?",
      answer: "It's free of Cost.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h1 className="faq-items">Questions and Answers</h1>
      <div className="faq-container faq-items">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              {item.question}
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
