import { ImageWidget } from "apps/admin/widgets.ts";
import Container from "site/components/ui/Container.tsx";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export type Variations = "primary" | "secondary" | "tertiary" | "fourth";

/**
 * @title Card - {{{title}}} {{{tag.label}}}
 */
export interface Card {
  image?: {
    desktop?: ImageWidget;
    mobile?: ImageWidget;
  };
  title?: string;
  url?: string;
  tag?: {
    label?: string;
    theme?: Variations;
  };
}

export interface Props {
  title?: string;
  description?: string;
  cards?: Card[];
}

export default function Projects({
  title = "Featured Projects",
  description = "Have designed morethan 20 projects",
  cards = [
    {
      "tag": {
        "theme": "tertiary",
        "label": "No-Code",
      },
      "image": {
        "desktop":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11601/d071d383-04be-4967-9fac-d1293bb1912a",
        "mobile":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11601/5798b15a-ff95-4abb-a417-a8aa819424be",
      },
      "title": "4 style Portfolio design",
      "url": "#",
    },
    {
      "image": {
        "desktop":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11601/2a71655a-c33f-4406-8fc3-89ecd396e2cd",
        "mobile":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11601/8154f22d-41b2-4118-9a79-0790c2dfe81e",
      },
      "url": "#",
      "title": "Color system  for app",
      "tag": {
        "label": "Ui Design",
        "theme": "secondary",
      },
    },
    {
      "image": {
        "desktop":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11601/90701935-fb72-413b-a253-6d5309baf150",
        "mobile":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11601/3677fcef-f27e-4f1e-b5a3-18d798478ef6",
      },
      "url": "#",
      "title": "Onboarding screen process",
      "tag": {
        "label": "UX Design",
        "theme": "primary",
      },
    },
    {
      "image": {
        "desktop":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11601/f6a8212b-32fe-4c2b-9c0d-43f194114a6f",
        "mobile":
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11601/3db2c32c-b79e-44b1-8876-621e73c1ad49",
      },
      "url": "#",
      "title": "Finance Landing page",
      "tag": {
        "label": "UI Design",
        "theme": "fourth",
      },
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
      <article class="mb-20 lg:mb-28 pl-5 pr-3 flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div class="flex flex-col gap-3 lg:pl-7">
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
          <p class="text-pretty text-left text-base lg:text-2xl mt-1 max-w-44 lg:max-w-64">
            {description}
          </p>
        </div>
        <div class="w-full flex flex-wrap flex-col sm:flex-row gap-4 sm:gap-8">
          {cards.map(({ image, title, url, tag }) => {
            const currentStyle = styleTag?.[tag?.theme ?? "primary"];

            return (
              <a
                class="w-full sm:flex-[1_1_40%] border-2 border-base-content rounded-md flex flex-col gap-4 p-4 bg-white"
                href={url}
              >
                <Picture>
                  <Source
                    media="(max-width: 768px)"
                    src={image?.mobile ?? ""}
                    width={266}
                    height={159.81}
                  />
                  <Source
                    media="(min-width: 768px)"
                    src={image?.desktop ?? ""}
                    width={365}
                    height={318}
                  />
                  <img
                    src={image?.desktop}
                    class="w-full h-full object-cover"
                    alt={title}
                    loading="lazy"
                  />
                </Picture>
                <div class="flex items-center justify-between gap-10">
                  <h4 class="text-pretty font-highlight font-normal highlighted text-base-content text-xl lg:text-[28px] leading-normal">
                    {title}
                  </h4>
                  <span
                    class={`${currentStyle.style} text-xs lg:text-base font-medium text-white relative flex items-center justify-center border-[1.647px] rounded-tagButton sm:rounded-tagButton-2 text-nowrap p-[6.587px_16.468px_6.587px_13.174px] lg:p-[8.951px_22.376px_8.951px_17.901px]`}
                  >
                    <Icon
                      id="Indicator"
                      width={16.468}
                      height={16.468}
                      class={`absolute -left-4 -top-4 ${currentStyle.fill}`}
                    />
                    {tag?.label}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </article>
    </Container>
  );
}
