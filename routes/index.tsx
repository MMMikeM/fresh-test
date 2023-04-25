import { Head } from "$fresh/runtime.ts";
import { HandlerContext } from "https://deno.land/x/rutt@0.1.0/mod.ts";
import Counter from "../islands/Counter.tsx";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  return new Response("Arbitrary example");
};

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <h2>{JSON.stringify(props.data)}</h2>
        <p class="my-6">Welcome to `FEDSA`. This is not a test.</p>
        <Counter start={3} />
      </div>
    </>
  );
}
