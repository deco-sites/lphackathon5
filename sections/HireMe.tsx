import Container from "site/components/ui/Container.tsx";
import { Variations } from "site/sections/WorkExperience.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  title?: string;
  description?: string;
  form?: {
    fields?: {
      label?: string;
      name?: string;
      placeholder?: string;
      theme?: Variations;
      type?:
        | "button"
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "image"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "reset"
        | "search"
        | "submit"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week";
    }[];
    button?: string;
  };
}

export default function HireMe({
  title = "Contact Here",
  description = "Have a project Idea? just say me Hi",
  form = {
    fields: [
      {
        label: "Name",
        name: "name",
        theme: "tertiary",
        placeholder: "Zainab Nisa",
      },
      {
        label: "Your email",
        name: "email",
        theme: "primary",
        placeholder: "zainab123@gmail.com",
        type: "email"
      },
      {
        label: "About project",
        name: "about-project",
        theme: "secondary",
        placeholder: " I want to discuss you about .......",
      },
    ],
    button: "Send Here",
  },
}: Props) {
  const styleTag = {
    "primary": {
      style: "bg-primary shadow-custom-primary lg:shadow-custom-primary-2",
    },
    "secondary": {
      style:
        "bg-secondary shadow-custom-secondary lg:shadow-custom-secondary-2",
    },
    "tertiary": {
      style: "bg-accent  shadow-custom-tertiary lg:shadow-custom-tertiary-2",
    },
    "fourth": {
      style: "bg-success shadow-custom-success lg:shadow-custom-success-2",
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
        <form class="flex flex-col gap-7 lg:gap-14 lg:w-1/2">
          {form?.fields?.map(({ label, name, placeholder, theme, type }) => {
            const labelTag = styleTag?.[theme ?? "primary"];
            return (
              <div class="flex">
                <label
                  htmlFor={name}
                  class={`${labelTag.style} text-nowrap font-highlight highlighted text-base lg:text-[32px]  text-base-content border-l-2 border-base-content pl-1 leading-normal`}
                >
                  {label}
                </label>
                <input
                  type={type ?? "text"}
                  name={name}
                  id={name}
                  placeholder={placeholder}
                  class="w-full appearance-none border-b-2 border-base-content px-3 font-highlight text-base text-base-content outline-none lg: text-[28px]"
                  required
                />
              </div>
            );
          })}
          <button class="w-fit text-white text-base lg:text-2xl font-semibold px-5 lg:px-10 bg-base-content py-2 lg:py-4 rotate-2 lg:ml-auto">
            {form.button}
          </button>
        </form>
      </article>
    </Container>
  );
}
