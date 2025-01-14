import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constant";

const FAQ = () => {
    const halfLength = Math.ceil(FAQS.length / 2);
    return (
        <Accordion
            type="single"
            collapsible
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-6"
        >
            {FAQS.map((faq, index) => (
                <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={`border-0 ${
                        index < halfLength
                            ? "md:col-span-1"
                            : "md:col-span-1 lg:col-span-1"
                    }`}
                >
                    <AccordionTrigger>
                        <div className="flex items-center justify-between gap-4">
                            <p className="p-3 bg-neutral-900 ring-neutral-800 ring-1 aspect-square rounded-lg hover:no-underline ">
                                0{index + 1}
                            </p>
                            <h3 className="text-xl tracking-wide text-neutral-200">
                                {faq.question}
                            </h3>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <h4 className="text-md lg:text-sm text-neutral-300">{faq.answer}</h4>
                    </AccordionContent>
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-800 to-transparent"></div>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default FAQ;
