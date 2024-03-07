import { component$, useTask$ } from "@builder.io/qwik";
import {
  RequestEventBase,
  server$,
  type DocumentHead,
} from "@builder.io/qwik-city";

const noCookies = server$(async function (
  this: RequestEventBase<any>
): Promise<{}> {
  this.cookie.set("x", "x", {
    path: "/",
  });
  return {};
});

export default component$(() => {
  useTask$(async () => {
    const res = await noCookies(); // cookies not set in browser
  });

  return <h1>Hi 👋</h1>;
});
