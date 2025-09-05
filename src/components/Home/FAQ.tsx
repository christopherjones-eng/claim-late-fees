import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ = () => {
  const faqs = [{
    question: "Am I eligible to claim late payment compensation?",
    answer: "Under the Late Payment of Commercial Debts (Interest) Act 1998, you can claim if: your debtor is over 30 days late (or beyond agreed terms), you've supplied goods/services to another business, and your contract doesn't exclude statutory rights. Most B2B transactions qualify."
  }, {
    question: "How much compensation can I claim for late payments?",
    answer: "You're entitled to statutory interest (8% above Bank of England base rate) plus fixed compensation: £40 for debts under £1,000, £70 for £1,000-£9,999, £100 for £10,000+. You can also claim reasonable debt recovery costs on top."
  }, {
    question: "Do contract payment terms override statutory rights?",
    answer: "No. While contracts can set payment terms (e.g., 60 days), they cannot remove your statutory right to claim interest and compensation once those terms are breached. The Late Payment Act protects smaller businesses from unfair contract terms."
  }, {
    question: "Can I claim against public sector organizations?",
    answer: "Yes. The Late Payment Act applies to all UK public bodies including councils, NHS trusts, and government departments. They must pay within 30 days unless different terms are agreed, and you can claim full statutory compensation for late payment."
  }, {
    question: "What if my contract specifies different interest rates?",
    answer: "Contractual interest rates only apply if they're 'substantial remedy' (typically higher than statutory 8%+). If your contract rate is lower, you can claim the statutory rate instead. We'll review your terms and claim the higher amount."
  }, {
    question: "How long do I have to make a late payment claim?",
    answer: "You have 6 years from the payment due date to claim statutory interest and compensation. However, acting quickly (within 3-6 months) typically yields better results as debts become harder to recover over time."
  }, {
    question: "What proof do I need for my claim?",
    answer: "Essential documents: original invoice, proof of delivery/completion, your standard terms & conditions, and evidence payment is overdue. We'll also need any contract terms and correspondence with the debtor. Our online form guides you through what's required."
  }, {
    question: "Will claiming affect future business relationships?",
    answer: "Professional late payment recovery often strengthens relationships by establishing clear boundaries. Many businesses prefer dealing with suppliers who have clear payment processes. We handle all communication diplomatically while protecting your legal rights."
  }];
  return <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-subtitle text-muted-foreground mb-12">Everything you need to know about our cost recovery service</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="card-professional border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-card-foreground hover:text-primary transition-colors duration-200 [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQ;