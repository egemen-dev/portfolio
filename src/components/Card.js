export default function Card({ appName, description, stack = [], filename }) {
  "Ruby, Ruby on Rails, JavaScript, React, HTML, CSS, Hotwire, SortableJS";
  function techColor(item) {
    switch (item) {
      case "Ruby":
        return "bg-red-500 text-slate-100";
      case "Ruby on Rails":
        return "bg-red-500 text-slate-100";
      case "JavaScript":
        return "bg-yellow-500 text-white";
      case "React":
        return "bg-cyan-400 text-white";
      case "HTML":
        return "bg-orange-500 text-white";
      case "CSS":
        return "bg-sky-300 text-white";
      case "Tailwind CSS":
        return "bg-sky-500 text-white";
      case "Bulma CSS":
        return "bg-teal-300 text-white";
      case "Hotwire":
        return "bg-red-400 text-white";
      case "SortableJS":
        return "bg-green-400 text-gray-700";
      case "PostgreSQL":
        return "bg-indigo-500 text-white";
      case "SQLite3":
        return "bg-green-100 text-gray-700";
      default:
        return "border border-gray-300";
    }
  }
  return (
    <div className="card w-86 lg:w-96 bg-base-100 shadow-xl out">
      {filename && (
        <figure>
          <img src={require(`../images/${filename}`)} />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{appName}</h2>
        <div className="flex flex-wrap gap-1">
          {stack.map((item, index) => {
            return (
              <div
                key={index}
                className={`badge badge-sm p-2 ${techColor(item)} text-xs`}
              >
                {item}
              </div>
            );
          })}
        </div>
        <p>{description}</p>
        <div className="divider m-0 p-0"></div>
        <div className="card-actions justify-end">
          <div className="btn-group">
            <button className="btn">
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />{" "}
              </svg>
            </button>
            <div className="border border-gray-300 dark:border-gray-600"></div>
            <button className="btn">Live</button>
          </div>
        </div>
      </div>
    </div>
  );
}
