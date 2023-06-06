import Gmail from "./icons/Gmail";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";

export default function Stack() {
  return (
    <div className="card-body items-center shadow-xl bg-base-100 rounded-box dark:bg-base-200">
      <h2 className="card-title dark:text-gray-100">Connect with me now!</h2>
      {/*add arrow down */}

      <p className="text-center dark:text-gray-300 py-6">
        I'm currently looking for new opportunities, my inbox is always open. Whether you
        have a question or just want to say hi, feel free to drop a line.
      </p>

      <div className="flex justify-center items-center gap-12 md:gap-18 lg:gap-24 pt-6">
        <Linkedin />
        <Github />
        <Gmail />
      </div>
    </div>
  );
}
