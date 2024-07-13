import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import Container from "site/components/ui/Container.tsx";

export interface Props {
  author?: string;
  /**
   * @default Person
   */
  icon?: AvailableIcons;

  titleWords?: {
    label?: string;
    highlighted?: boolean;
  }[];

  about?: string;
  button?: {
    label?: string;
    url?: string;
  };
}

export default function HeroApresentaion({
  author = "znisa",
  icon = "Person",
  titleWords = [
    {
      label: "I",
    },
    {
      label: "design",
      highlighted: true,
    },
    {
      label: "top notchs websites",
    },
  ],
  about =
    "I'll design your website and will develop to land it on internet using No-code.",
  button = {
    label: "Hire me",
    url: "#HireMe",
  },
}: Props) {
  return (
    <Container>
      <article class="pl-5 pr-[14px] lg:pl-6 lg:pr-0 flex w-full flex-col gap-8 lg:gap-16">
        <div class="flex gap-1 lg:gap-4 rotate-[-3deg] lg:rotate-[-4deg] items-center">
          <Icon
            id={icon}
            width={54.502}
            height={50.999}
            class="lg:hidden rotate-[-0.355deg]"
          />
          <Icon
            id={icon}
            width={109}
            height={102}
            class="hidden lg:block rotate-[-2.171deg]"
          />
          <Icon
            id={"ArrowCircleLeft"}
            width={38.77}
            height={22.56}
            class="lg:hidden rotate-[-5.792deg]"
          />
          <Icon
            id={"ArrowCircleLeft"}
            width={77.54}
            height={45.122}
            class="hidden lg:block rotate-[-2.609deg]"
          />
          <span class="w-fit h-7 lg:h-11 flex items-center justify-center bg-accent font-highlight font-normal highlighted text-base-content text-xl lg:text-[32px] leading-normal rotate-[-5.183deg] lg:rotate-0">
            {author}
          </span>
        </div>
        <div class="flex flex-col lg:flex-row gap-5 lg:gap-12 xl:gap-52 lg:items-baseline">
          <h2 class="text-pretty text-left">
            {titleWords.map(({ label, highlighted }) => (
              <span
                class={`w-fit font-semibold text-base-content text-[32px] lg:text-[64px] leading-normal ${
                  highlighted
                    ? "highlighted-before variant before:bg-accent"
                    : ""
                }`}
              >
                {highlighted ?  label  : ` ${label} `}
              </span>
            ))}
          </h2>
          <div class="flex flex-col gap-4 lg:gap-7 justify-start">
            <p class="text-pretty text-left text-base lg:text-2xl">
              {about}
            </p>
            <a
              class="px-3 py-[6px] lg:px-14 lg:py-[18px] bg-base-content font-semibold text-white text-base lg:text-2xl w-fit"
              href={button.url}
            >
              {button.label}
            </a>
          </div>
        </div>
      </article>
    </Container>
  );
}
