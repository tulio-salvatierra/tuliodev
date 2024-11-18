import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="container flex">
      <h1 className="display-1 whoops">Not Found</h1>
      <h4 className="w-50 cono">
        "ay coño!" is a coloquial venezuelan🇻🇪 expression used when thing don't
        turn out according to the plan🛬{" "}
      </h4>
      <a className="custom-btn mt-5" href="/">
        Let's go back
      </a>
    </div>
  );
}
