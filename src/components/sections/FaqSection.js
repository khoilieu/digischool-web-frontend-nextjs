import { Accordion } from "#/base";
import { SectionHeading } from "#/SectionHeading";

export function FaqSection({ title, description, buttons, faqs, ...rest }) {
  return (
    <section className="bg-base-100 dark:bg-base-900" {...rest}>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-4 lg:gap-20  p-4 sm:p-8 md:p-20 ">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeading
              align="left"
              title={title}
              description={description}
              buttons={buttons}
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
