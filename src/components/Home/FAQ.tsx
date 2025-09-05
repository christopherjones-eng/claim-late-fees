import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ = () => {
  const faqs = [{
    question: "How much does your service cost?",
    answer: "We work on a 'No Win, No Fee' basis. You pay nothing upfront and only pay when we successfully recover your money. Our fee is a percentage of the amount recovered, ensuring our interests are aligned with yours."
  }, {
    question: "How long does the debt recovery process take?",
    answer: "Most cases are resolved within 4-8 weeks, though this can vary depending on the debtor's response and the complexity of the case. We'll keep you updated throughout the entire process and provide regular progress reports."
  }, {
    question: "What types of debts can you help recover?",
    answer: "We specialize in commercial debt recovery including unpaid invoices, outstanding contracts, late payment fees, and business-to-business debts. We handle cases from £500 to £100,000+ across all industries."
  }, {
    question: "Do you handle international debt recovery?",
    answer: "Yes, we have experience recovering debts from international clients, particularly within Europe. We work with trusted partners abroad and understand the complexities of cross-border debt recovery."
  }, {
    question: "What happens if the debtor refuses to pay?",
    answer: "We have a structured escalation process including formal demand letters, statutory demands, and if necessary, court proceedings. Our legal team ensures we exhaust all appropriate channels to recover your debt."
  }, {
    question: "Will using a debt recovery service damage my business relationships?",
    answer: "We approach each case professionally and diplomatically. Many businesses find that using our services actually preserves relationships by removing the awkwardness of direct confrontation while demonstrating you're serious about payment terms."
  }, {
    question: "What information do I need to provide to start the process?",
    answer: "We need basic details about the debt including invoice copies, contracts, correspondence with the debtor, and proof of goods/services delivered. Our simple online form guides you through exactly what we need."
  }, {
    question: "What is your success rate for debt recovery?",
    answer: "We maintain a 94% success rate across all cases. This high success rate is due to our experienced legal team, proven processes, and determination to recover what you're owed."
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