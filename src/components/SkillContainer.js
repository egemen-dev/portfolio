export default function SkillContainer({ icon, name }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 hover:shadow-xl hover:bg-gray-200 dark:hover:bg-gray-700 p-4 rounded-lg transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-106">
      {icon}
      <p className="text-center font-bold">{name}</p>
    </div>
  );
}
