import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorCode: number = 404
  let errorMessage: string = "Page Not Found"
  if (isRouteErrorResponse(error)) {
    errorCode = error.status
    errorMessage = error.statusText
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p style={{fontSize: '3rem', fontWeight: 'bold'}}>
        <i>{errorCode} | {errorMessage}</i>
      </p>
    </div>
  );
}