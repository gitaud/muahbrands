import { Button } from "@/components/ui/button";
import { getCachedGlobal } from "@/utilities/getGlobals";
import { Media } from "@/components/Media";
import { AboutUs } from "@/payload-types";
import RichText from "@/components/RichText";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const defaultCompanies = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
    alt: "Descript",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
  },
];

const defaultAchievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

const About = async ({
  title = "About Us",
  description = "Shadcnblocks is a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age.",
  companiesTitle = "Valued by clients worldwide",
  companies = defaultCompanies,
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription = "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  const about_us: AboutUs = await getCachedGlobal('about_us', 1)();


  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">{about_us.headline}</h1>
          <RichText data={about_us.aboutUs!} />
        </div>
        {/* <div className="py-16">
          <p className="text-center">{about_us.logos!.headline} </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {about_us.logos?.logos?.map(({ id, logo }) => (
              <div className="flex items-center gap-3" key={id}>
                <Media resource={logo} size={"thumbnail"}/>
              </div>
            ))}
          </div>
        </div> */}
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
