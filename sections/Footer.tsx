import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import Container from "site/components/ui/Container.tsx";

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Subscribe {
  title: string;
  description: string;
  /** @format rich-text */
  instructions: string;
}

export interface Social {
  network: "Facebook" | "Instagram" | "Linkedin" | "Twitter X" | "Youtube";
  href: string;
}

export interface Props {
  logo?: {
    /**
     * @default Logo
     */
    icon?: AvailableIcons;
    /**
     * @default znisa
     */
    title?: string;
  };
  social?: Social[];
  copyright?: string;
}

export default function Footer({
  logo = {
    icon: "Logo",
    title: "znisa",
  },
  copyright = "© 2024 deco.cx. All rights reserved.",
  social = [
    { network: "Twitter X", href: "" },
    { network: "Linkedin", href: "" },
    { network: "Instagram", href: "" },
  ],
}: Props) {
  return (
    <div class="contents lg:block border-t-[3px] border-base-content w-full">
      <Container>
        <article class="pl-5 pt-16 pb-9 border-t-[3px] border-base-content lg:border-t-0 flex flex-col lg:flex-row lg:justify-between gap-9">
          <div aria-label="Logo" class="flex items-center gap-2 lg:gap-4">
            <Icon
              id={logo.icon ?? "Logo"}
              width={27.001}
              height={27.001}
              class="lg:hidden"
            />
            <Icon
              id={logo.icon ?? "Logo"}
              width={48.956}
              height={49}
              class="hidden lg:block"
            />
            <span class="font-highlight font-normal highlighted text-base-content text-xl lg:text-4xl leading-normal">
              {logo.title}
            </span>
          </div>
          <div class="flex flex-col gap-3 lg:gap-12 lg:items-center">
            <div class="flex gap-6 lg:gap-20">
              {social.map(({ href, network }) => (
                <a
                  class="bg-base-content text-white font-highlight highlighted text-base lg:text-[32px] w-fit flex items-center lg:pt-4"
                  href={href}
                >
                  {network}
                </a>
              ))}
            </div>
            <span class="text-base-content text-sm lg:text-2xl">
              {copyright}
            </span>
          </div>
        </article>
      </Container>
    </div>
  );
}
