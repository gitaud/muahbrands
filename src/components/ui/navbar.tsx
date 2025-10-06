// @ts-nocheck

"use client";

import { MenuIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/utilities/ui";

import { CMSLink } from "../Link";
import type { Nav as NavType } from "@/payload-types";

const Navbar = ({ data } : {data: NavType}) => {
  const { accordion, links, ctas } = data;

  return (
    <section className="py-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2"
          >
            <img
              src="/muah_logo.jpg"
              className="max-h-8 rounded-full"
              alt="Muah Branding Logo"
            />
            <span className="text-lg font-semibold tracking-tighter">
              Muah Branding
            </span>
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {
                accordion?.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger>{item?.accordion?.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[600px] grid-cols-2 p-3">
                        {item?.accordion?.items?.map((link, index) => (
                          <CMSLink {...link?.link}
                            key={index}
                            className={cn("rounded-md p-3 transition-colors hover:bg-muted/70", navigationMenuTriggerStyle())}
                          />
                        ))}
                      </div>
                    </NavigationMenuContent>

                  </NavigationMenuItem>
                ))
              }
              {
                links?.map((link, index) => (
                  <NavigationMenuItem key={index}>
                      <CMSLink {...link.link} className={navigationMenuTriggerStyle()} />
                  </NavigationMenuItem>
                ))
              }
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
             {
                ctas && ctas.map((cta, index) => (
                  <CMSLink {...cta.link} key={index}/>
                ))
             }
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a
                    href="/"
                    className="flex items-center gap-2"
                  >
                    <img
                      src="/muah_logo.jpg"
                      className="max-h-8"
                      alt="Muah Branding Logo"
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      Muah Branding
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                {
                  accordion?.map((item, index) => (
                    <Accordion key={index} type="single" collapsible className="">
                      <AccordionItem value="solutions" className="border-none">
                        <AccordionTrigger className="text-base hover:no-underline">
                          { item.accordion?.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid">
                            {
                              item.accordion?.items?.map((link, index) => (
                                <CMSLink {...link.link}
                                  key={index}
                                  className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                />
                              ))
                            }
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))
                }
                { links && 
                  <div className="flex flex-col gap-6">
                    {
                      links.map((link, index) => (
                        <CMSLink className="py-4" key={index} {...link.link} />
                      ))
                    }
                  </div>
                }
                <div className="mt-6 flex flex-col gap-4">
                  {
                    ctas && ctas.map((cta, index) => (
                      <CMSLink {...cta.link} key={index}/>
                    ))
                  }
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };
