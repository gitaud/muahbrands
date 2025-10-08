import { Check } from "lucide-react";

import { CMSLinkType, CMSLink } from "@/components/Link";


interface CTAProps {
  title?: string;
  description?: string;
  link: CMSLinkType
  items?: string[];
}

const defaultItems = [
  "Easy Integration",
  "24/7 Support",
  "Customizable Design",
  "Scalable Performance",
  "Hundreds of Blocks",
];

const CTA = ({
  title = "Call to Action",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium nisi, accusantium quae.",
  link,
  items = defaultItems,
}: CTAProps) => {
  return (
    <section className="py-8 lg:py-16">
      <div className="container mx-auto">
        <div className="">
          <div className="">
            <div className="flex flex-col items-start justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-8">
              <div className="md:w-1/2">
                <h4 className="mb-1 text-2xl font-bold md:text-3xl">{title}</h4>
                <p className="text-muted-foreground">{description}</p>
                <CMSLink className="mt-6" {...link} />
              </div>
              <div className="md:w-1/3">
                <ul className="flex flex-col space-y-2 text-sm font-medium">
                  {items.map((item, idx) => (
                    <li className="flex items-center" key={idx}>
                      <Check className="mr-4 size-4 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTA };
