import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
	return (
		<div className="max-w-7xl w-full mx-auto p-8 mt-8 bg-slate-50 rounded shadow">
			<div className="mx-auto mb-12 w-full space-y-1 text-center sm:w-1/2 lg:w-1/3">
				<h2 className="text-balance text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl fade-in-up-bounce">
					FAQ
				</h2>
			</div>
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger>
						What types of educational equipment do you distribute?
					</AccordionTrigger>
					<AccordionContent>
						We distribute a wide range of educational equipment tailored to
						various subjects and disciplines. Our offerings include work
						benches,digital meters,DSO.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Who are your typical customers?</AccordionTrigger>
					<AccordionContent>
						Our typical customers include schools,Engineering
						colleges,Polytechnics,ITI,NTTF universities, training centers,
						educational institutions, teachers, professors, researchers, and
						homeschooling parents. We cater to the needs of educators and
						students at all levels, from kindergarten to higher education.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>How can I place an order?</AccordionTrigger>
					<AccordionContent>
						Placing an order with us is easy! You can chat direct with our
						whatsapp from website. Alternatively, you can contact our sales team
						directly via phone or email to discuss your requirements and place
						an order.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger>
						Do you offer bulk discounts for educational institutions?
					</AccordionTrigger>
					<AccordionContent>
						Yes, we offer competitive pricing and discounts for bulk orders from
						educational institutions. Contact us to discuss your specific
						requirements and pricing options.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-5">
					<AccordionTrigger>
						What are the warranty terms for your equipment?
					</AccordionTrigger>
					<AccordionContent>
						We stand behind the quality of our products. Most of our equipment
						comes with a standard manufacturer's warranty. Please refer to the
						product description or contact us for specific warranty details.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-6">
					<AccordionTrigger>
						Do you offer installation services for your equipment?
					</AccordionTrigger>
					<AccordionContent>
						Yes, we provide installation services for many of our products.
						Please contact us for more information and to schedule installation
						assistance
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
