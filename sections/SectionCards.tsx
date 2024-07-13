import Container from "site/components/ui/Container.tsx";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export type Positions = "top-left" | "top-right" | "right" | "left";
export type Variations = "primary" | "secondary" | "tertiary";

/**
 * @title {{{title}}} - {{{variation}}}
 */
export interface Card {
  variation?: Variations;
  icon?: "Pen" | "Eye" | "Star";
  title?: string;
  tag?: {
    label?: string;
    variation?: Variations;
    position?: {
      desktop?: Positions;
      mobile?: Positions;
    };
  };
}
export interface Props {
  title?: string;
  cards?: Card[];
}

export default function SectionCards({
  title = "What i do?",
  cards = [
    {
      icon: "Pen",
      title: "User Research Design",
      variation: "primary",
      tag: {
        label: "Pen/Paper",
        variation: "secondary",
        position: {
          "desktop": "right",
          "mobile": "right",
        },
      },
    },
    {
      icon: "Eye",
      variation: "secondary",
      title: "UI & Product Design",
      tag: {
        label: "Figma",
        variation: "tertiary",
        position: {
          "desktop": "top-right",
          "mobile": "top-left",
        },
      },
    },
    {
      icon: "Star",
      variation: "tertiary",
      title: "No-code Development",
      tag: {
        label: "Webflow",
        variation: "primary",
        position: {
          "desktop": "right",
          "mobile": "left",
        },
      },
    },
  ],
}: Props) {
  const variations = {
    "primary": {
      style: "bg-primary border-primary-content",
      tag: "bg-primary ",
    },
    "secondary": {
      style: "bg-secondary border-secondary-content",
      tag: "bg-secondary",
    },
    "tertiary": {
      style: "bg-accent border-accent-content",
      tag: "bg-accent",
    },
  };

  //  "top-left" | "top-right" | "right" | "left"

  const stylePositions = {
    desktop: {
      "top-left": "lg:-top-6 lg:left-6 right-[inherit]",
      "top-right": "lg:-top-6 lg:right-6 left-[inherit] -rotate-6",
      "right": "lg:top-14 lg:-right-7 left-[inherit]",
      "left": "lg:top-24 lg:-left-2 right-[inherit]",
    },
    mobile: {
      "top-left": "-top-4 left-11",
      "top-right": "lg:-top-1 right-6",
      "right": "top-12 -right-7",
      "left": "top-8 -left-5 rotate-3",
    },
  };

  const icons = {
    "Pen": {
      "desktop": {
        width: 49.429,
        height: 55,
      },
      "mobile": {
        width: 34.805,
        height: 38.728,
      },
    },
    "Eye": {
      "desktop": {
        width: 60.766,
        height: 45.893,
      },
      "mobile": {
        width: 38.398,
        height: 28.996,
      },
    },
    "Star": {
      "desktop": {
        width: 59,
        height: 59,
      },
      "mobile": {
        width: 43.304,
        height: 43.304,
      },
    },
  };

  return (
    <Container classStyle="lg:px-16">
      <article class="flex flex-col pl-5 pr-1 lg:pr-0 lg:pl-0 lg:gap-5 mb-20 lg:mb-28">
        <div class="flex flex-col lg:pl-24">
          <h3 class="w-fit h-7 lg:h-11 flex items-center justify-center bg-accent font-highlight font-normal highlighted text-base-content text-xl lg:text-[32px] leading-normal">
            {title}
          </h3>
          <Icon
            id={"ArrowCircleDown"}
            width={22.56}
            height={38.77}
            class="lg:hidden"
          />
          <Icon
            id={"ArrowCircleDown"}
            width={45.122}
            height={77.54}
            class="hidden lg:block "
          />
        </div>
        <div class="flex flex-col lg:grid lg:grid-cols-3 px-3 lg:px-0 items-center lg:gap-5">
          {cards.map(({ variation = "primary", tag, icon, title }) => {
            const applyStyle = {
              style: variations?.[variation]?.style,
              tag: variations?.[tag?.variation ?? "primary"]?.tag,
              position: `${
                stylePositions.mobile?.[tag?.position?.mobile ?? "right"]
              } ${stylePositions.desktop?.[tag?.position?.desktop ?? "right"]}`,
            };

            return (
              <div
                class={`${applyStyle.style} min-h-[311px] lg:min-h-[452px] max-w-[259px] lg:max-w-[378px] w-full flex items-end rounded-lg border-4 odd:rotate-[-4deg] even:rotate-[5.5deg] mb-8 relative`}
              >
                <span
                  class={`absolute ${applyStyle.tag} ${applyStyle.position} w-fit h-7 lg:h-11 flex items-center justify-center bg-accent font-highlight font-normal highlighted text-base-content text-2xl lg:text-[32px] leading-normal`}
                >
                  {tag?.label}
                </span>
                <div class="flex flex-col gap-6 lg:gap-9 px-10 pb-14 lg:pb-36">
                  <Icon
                    id={icon ?? "Star"}
                    width={icons?.[icon ?? "Star"].mobile.width}
                    height={icons?.[icon ?? "Star"].mobile.height}
                    class="lg:hidden"
                  />
                  <Icon
                    id={icon ?? "Star"}
                    width={icons?.[icon ?? "Star"].desktop.width}
                    height={icons?.[icon ?? "Star"].desktop.height}
                    class="hidden lg:block"
                  />
                  <span class="font-medium text-2xl lg:text-4xl text-base-content text-pretty text-left">
                    {title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </Container>
  );
}
