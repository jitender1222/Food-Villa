import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div class="text-4xl flex flex-col text-center mt-52 font-semibold">
      <h1>Oops!</h1>
      <p class="mt-4">Sorry, an unexpected error has occurred.</p>
      <p class="mt-6">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}