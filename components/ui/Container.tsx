import type { ComponentChildren } from "preact";

export default function Container({ children, classStyle = "" }: {
  children: ComponentChildren;
  classStyle?: string;
}) {
  return (
    <section class={`px-6 lg:px-20 w-full m-auto ${classStyle}`}>
      {children}
    </section>
  );
}
