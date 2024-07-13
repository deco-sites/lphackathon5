import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon, { AvailableIcons } from "../components/ui/Icon.tsx";
import Container from "site/components/ui/Container.tsx";

// export interface CTA {
//   id?: string;
//   href: string;
//   text: string;
//   outline?: boolean;
// }

export interface Nav {
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
  navigation?: {
    links: {
      label?: string;
      url?: string;
      highlighted?: boolean;
    }[];
  };
}

export default function Header({
  logo = {
    icon: "Logo",
    title: "znisa",
  },
  navigation = {
    links: [
      { label: "Portfolio", url: "#Portfolio" },
      { label: "Hire Me", url: "#HireMe", highlighted: true },
    ],
  },
}: Nav) {
  return (
    <Container>
      <nav class="pt-12 pl-5 pr-3 lg:px-0 w-full flex items-center justify-end gap-20 lg:gap-40 mb-20">
        <div aria-label="Logo" class="flex items-center gap-2 lg:gap-4">
          <Icon
            id={logo.icon ?? "Logo"}
            width={27.001}
            height={27.001}
          />
          <span class="font-highlight font-normal highlighted text-base-content text-xl lg:text-4xl leading-normal">
            {logo.title}
          </span>
        </div>
        <ul class="flex items-center gap-6 lg:gap-8">
          {navigation.links.map((link) => (
            <li>
              <a
                href={link.url}
                aria-label={link.label}
                class={`link no-underline hover:underline text-base-content text-base lg:text-2xl leading-normal ${link.highlighted ? "highlighted-before before:bg-accent" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
