import type { ComponentChildren } from "preact";

export default function Container({ children }: {
  children: ComponentChildren;
}) {
  return (
    <section class="px-6 lg:px-20 w-full m-auto">
      {children}
    </section>
  );
}
