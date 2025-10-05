import { Timer, Zap, ZoomIn } from "lucide-react";
import { ElementType } from "react";

type FeatureProps = {
  title: string
  subtitle: string
  items: {
    icon?: string | ElementType
    title: string,
    description: string
  }[]
}

const FeatureList = (
  {
  title = 'Our Values',
  subtitle = 'Why Choose Us',
  items = [
    {
      icon: 'Timer',
      title: 'Performance',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi."
    }
  ]
}: FeatureProps) => {
  return (
    <section className="pb-32">
      <div className="container mx-auto">
        <p className="mb-4 text-sm text-center text-muted-foreground lg:text-base">
          {title}
        </p>
        <h2 className="text-3xl font-medium text-center lg:text-4xl">{subtitle}</h2>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {
            items.map((item, index) => {
              const { icon } = item
              let Icon;
              if (icon) Icon = icon;
              return  (    
                <div key={index} className="rounded-lg bg-accent p-5">
                  <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
                    {
                      Icon ? <Icon className="size-6" /> : <Timer className="size-6" />
                    }
                  </span>
                  <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
                  <p className="leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export { FeatureList };
