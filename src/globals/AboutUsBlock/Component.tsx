
import { getCachedGlobal } from "@/utilities/getGlobals";
import { AboutUs } from "@/payload-types";
import RichText from "@/components/RichText";

const About = async () => {
  const about_us: AboutUs = await getCachedGlobal('about_us', 1)();


  return (
    <section className="py-8 lg:py-16">
      <div className="container">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h2 className="text-4xl font-semibold">{about_us.headline}</h2>
          <RichText data={about_us.aboutUs!} />
        </div>
        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">{about_us.metrics?.headline}</h2>
            <p className="max-w-xl text-muted-foreground">
              {about_us.metrics?.subHeadline}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {about_us.metrics?.metrics?.map(( { id, metric }) => (
              <div className="flex flex-col gap-4" key={id}>
                <p>{metric.title}</p>
                <span className="text-4xl font-semibold md:text-5xl">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div>
        </div>
      </div>
    </section>
  );
};

export { About };
