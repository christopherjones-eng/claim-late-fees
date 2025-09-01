import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does it cost?",
      answer: "No upfront fees. We only charge 40% of successfully recovered late fees and interest. If we don't recover anything, you pay nothing."
    },
    {
      question: "How long does the recovery process take?",
      answer: "Most cases are resolved within 14-30 days. Simple cases can be faster, while complex ones may take longer. We keep you updated throughout."
    },
    {
      question: "What if the debtor refuses to pay?",
      answer: "We escalate to formal legal proceedings at no additional cost to you. Our legal team handles all court processes if necessary."
    },
    {
      question: "Can I claim on old invoices?",
      answer: "Yes, you can claim on invoices up to 6 years old. However, the sooner you start the process, the better your chances of recovery."
    },
    {
      question: "What information do I need to provide?",
      answer: "Just basic invoice details: company names, invoice amount, dates, and payment terms. We can work with minimal documentation."
    },
    {
      question: "Is this legal?",
      answer: "Absolutely. We operate under the UK Late Payment of Commercial Debts Act and EU Late Payment Directive, giving you statutory rights to compensation."
    },
    {
      question: "What if my debtor goes bankrupt?",
      answer: "We'll help you register as a creditor and maximize recovery from any available assets. Our experience with insolvency cases is extensive."
    },
    {
      question: "Do you handle international debts?",
      answer: "Yes, we handle cross-border debts within the EU and other jurisdictions where we have legal partnerships."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Get answers to common questions about late payment recovery and our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="card-professional">
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-secondary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-secondary flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;