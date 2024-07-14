import Container from "site/components/ui/Container.tsx";
import { Variations } from "site/sections/WorkExperience.tsx";
import Icon from "site/components/ui/Icon.tsx";
import { AppContext } from "../apps/site.ts";
import type { AppContext as RecordsApp } from "site/apps/deco/records.ts";
import { newsletter } from "../db/schema.ts";
import { eq } from "drizzle-orm";
import { useSection } from "deco/hooks/useSection.ts";

export interface Props {
  submissionResponse?: { error?: string; email: string };
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

export async function action(
  props: Props,
  req: Request,
  ctx: AppContext & RecordsApp,
): Promise<Props> {
  const form = await req.formData();
  const email = `${form.get("email") ?? ""}`;
  const name = `${form.get("name") ?? ""}`;
  const about_project = `${form.get("about_project") ?? ""}`;


  if (!email) {
    return { ...props, submissionResponse: { email: "" } };
  }

  const drizzle = await ctx.invoke("records/loaders/drizzle.ts");

  try {
    const recs = await drizzle
      .select({ email: newsletter.email })
      .from(newsletter)
      .where(eq(newsletter.email, email));

    if (recs.length) {
      return {
        ...props,
        submissionResponse: { error: "Email já cadastrado.", email },
      };
    }

    await drizzle.insert(newsletter).values({
      email,
      name,
      about_project
    });

    return { ...props, submissionResponse: { email: "" } };
  } catch (error) {
    console.log(error);
    ctx.monitoring?.logger?.error(error);
    return {
      ...props,
      submissionResponse: { error: "Erro no sistema.", email },
    };
  }
}

export function loader(props: Props) {
  return props;
}

export default function HireMe(props: Props) {
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
  const {
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
          type: "email",
        },
        {
          label: "About project",
          name: "about_project",
          theme: "secondary",
          placeholder: " I want to discuss you about .......",
        },
      ],
      button: "Send Here",
    },
  } = props;

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
        <form
          class="flex flex-col gap-7 lg:gap-14 lg:w-1/2"
          hx-post={useSection({ props })}
          hx-target="closest section"
          hx-swap="outerHTML"
        >
          {form?.fields?.map(({ label, name, placeholder, theme, type }) => {
            const labelTag = styleTag?.[theme ?? "primary"];
            const email = props?.submissionResponse?.email;
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
                  value={email === name ? email : ""}
                />
              </div>
            );
          })}
          <button class="w-fit text-white text-base lg:text-2xl font-semibold px-5 lg:px-10 bg-base-content py-2 lg:py-4 rotate-2 lg:ml-auto">
            <span class="[.htmx-request_&]:hidden">
              {form.button}
            </span>
            <span class="[.htmx-request_&]:inline hidden loading loading-spinner loading-xs" />
          </button>
          <div class="max-w-3xl mx-auto text-center mt-5">
            {props?.submissionResponse?.error && (
              <div role="alert" class="alert alert-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>{props?.submissionResponse?.error}</span>
              </div>
            )}
            {props?.submissionResponse && !props?.submissionResponse.error && (
              <div role="alert" class="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Pronto! <br /> Você{" "}
                  <b class="font-bold">receberá um e-mail para confirmação</b>.
                  Clique no link para finalizar a inscrição.
                </span>
              </div>
            )}
          </div>
        </form>
      </article>
    </Container>
  );
}
