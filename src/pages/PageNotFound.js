import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { Button } from "../components";
import { useEffect } from "react";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Note Found / Cinemate`;
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl tex-gray-700 font-bold my-10 dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-lg">
            <img src={PageNotFoundImage} alt="404 Page not found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back To Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
