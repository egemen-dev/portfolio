import Gmail from "./icons/Gmail";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";

export default function Stack() {
  return (
    <div id="stack-container" className="stack px-6 reveal-after-3-seconds">
      <div
        id="stack-0"
        className="card text-center bg-gray-50 dark:bg-gray-700 card bg-base-100 mb-10 border-2 border-gray-300 dark:border-gray-800"
      >
        <div className="card-body items-center">
          <h2 className="card-title dark:text-gray-100">Connect with me now!</h2>
          {/*add arrow down */}

          <p className="text-center dark:text-gray-300 py-6 md:px-12 lg:px-20">
            I'm currently looking for new opportunities, my inbox is always open. Whether
            you have a question or just want to say hi, feel free to drop a line.
          </p>

          <div className="divider my-1"></div>
          <div className="flex justify-center items-center gap-20">
            <Linkedin />
            <Github />
            <Gmail />
          </div>
        </div>
      </div>
      <div
        id="stack-1"
        className="card text-center bg-gray-100 dark:bg-gray-700 card bg-base-100 mb-4 border-2 border-gray-300 dark:border-gray-800"
      >
        <div className="card-body"></div>
      </div>
      <div
        id="stack-2"
        className="card text-center bg-gray-200 dark:bg-gray-700 card bg-base-100  border-2 border-gray-300 dark:border-gray-800 shadow-xl"
      >
        <div className="card-body"></div>
      </div>
    </div>
  );
}
