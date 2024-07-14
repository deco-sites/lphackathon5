import Container from "site/components/ui/Container.tsx";
import Icon from "site/components/ui/Icon.tsx";

export type Variations = "primary" | "secondary" | "tertiary" | "fourth";

/**
 * @title Item - {{{item.label}}}
 */
export interface Item {
  item?: {
    label?: string;
    theme?: Variations;
  };
  title?: {
    label?: string;
    highlighted?: boolean;
  }[];
  subtitle?: string;
  description?: string;
}

export interface Props {
  title?: string;
  description?: string;
  items?: Item[];
}

export default function WorkExperience({
  title = "Work Experience",
  description = "Have been designing since my past 4 years",
  items = [
    {
      "item": {
        "theme": "primary",
        "label": "1",
      },
      "title": [
        {
          "label": "Design intern at ",
        },
        {
          "highlighted": true,
          "label": "Google",
        },
      ],
      "subtitle": "Worked on design system at Material 3 designs",
      "description": "20, April 2021",
    },
    {
      "item": {
        "theme": "secondary",
        "label": "2",
      },
      "title": [
        {
          "label": "Sr. UI/UX Designer at ",
        },
        {
          "label": "Microsoft",
          "highlighted": true,
        },
      ],
      "subtitle": "Worked on design system at Material 3 designs",
      "description": "20, April 2022",
    },
    {
      "item": {
        "theme": "tertiary",
        "label": "3",
      },
      "title": [
        {
          "label": "Software Engineer at",
        },
        {
          "label": "SASS Startup",
          "highlighted": true,
        },
      ],
      "subtitle": "Worked on design system at Material 3 designs",
      "description": "20, April 2023",
    },
  ],
}: Props) {
  const styleTag = {
    "primary": {
      style:
        "bg-primary border-primary-content shadow-custom-primary lg:shadow-custom-primary-2",
      fill: "fill-primary text-primary",
    },
    "secondary": {
      style:
        "bg-secondary border-secondary-content shadow-custom-secondary lg:shadow-custom-secondary-2",
      fill: "fill-secondary text-secondary",
    },
    "tertiary": {
      style:
        "bg-accent border-accent-content shadow-custom-tertiary lg:shadow-custom-tertiary-2",
      fill: "fill-tertiary text-accent",
    },
    "fourth": {
      style:
        "bg-success border-success-content shadow-custom-success lg:shadow-custom-success-2",
      fill: "fill-success text-success",
    },
  };

  return (
    <Container>
      <article class="mb-20 lg:mb-28 pl-5 pr-3 flex flex-col lg:flex-row gap-8 lg:gap-20 lg:justify-between">
        <div class="flex flex-col gap-5 lg:gap-6 lg:py-12">
          <div class="flex flex-col gap-3 w-fit">
            <h3 class="w-fit text-nowrap flex items-center justify-center bg-accent font-highlight highlighted font-normal text-base-content text-xl lg:text-[32px] leading-normal">
              {title}
            </h3>
            <Icon
              id={"ArrowCircleDown"}
              width={22.56}
              height={38.77}
              class="lg:hidden"
            />
            <Icon
              id={"ArrowCircleRight"}
              width={45.122}
              height={77.54}
              class="hidden lg:block ml-auto"
            />
          </div>
          <p class="text-pretty text-left text-base lg:text-2xl  max-w-44 lg:max-w-64">
            {description}
          </p>
        </div>
        <div class="contents lg:block p-12 relative">
          <hr class="hidden lg:block top-12 left-0 absolute w-full bg-base-content" style={{height: "2px"}}></hr>
          <hr class="hidden lg:block  bottom-12 left-0 absolute w-full bg-base-content" style={{height: "2px"}}></hr>

          <div class="hidden lg:block  top-0 left-12 absolute h-full bg-base-content" style={{width: "2px"}}></div>
          <div class="hidden lg:block  top-0 right-12 absolute h-full bg-base-content" style={{width: "2px"}}></div>

          <div class="w-full flex flex-wrap flex-col gap-4 sm:gap-9 lg:px-28 lg:py-16">
            {items.map(({ title, item, description, subtitle }) => {
              const currentStyle = styleTag?.[item?.theme ?? "primary"];

              return (
                <div class="flex gap-4 lg:gap-9">
                  <div
                    class={`${currentStyle.style} min-w-14 min-h-14 max-w-14 max-h-14  lg:min-w-24 lg:min-h-24 lg:max-w-24 lg:max-h-24 flex items-center justify-center font-highlight highlighted text-3xl lg:text-5xl text-base-content`}
                  >
                    {item?.label}
                  </div>
                  <div class="flex flex-col">
                    <h4 class="text-pretty text-left">
                      {title?.map(({ label, highlighted }) => (
                        <span
                          class={`text-base lg:text-2xl text-base-content ${
                            highlighted ? "font-bold" : ""
                          }`}
                        >
                          {highlighted ? label : ` ${label} `}
                        </span>
                      ))}
                    </h4>
                    <h5 class="text-[10.5px] lg:text-lg text-base-content mt-1 lg:mt-[6px]">
                      {subtitle}
                    </h5>
                    <span class="text-[9px] lg:text-base font-medium text-neutral-content leading-3">
                      {description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </Container>
  );
}
