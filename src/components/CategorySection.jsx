const categoryColors = {
  Tech: "from-blue-500/20 to-cyan-500/10 border-blue-500/30",
  Creative: "from-pink-500/20 to-rose-500/10 border-pink-500/30",
  Marketing: "from-orange-500/20 to-amber-500/10 border-orange-500/30",
  Writing: "from-violet-500/20 to-purple-500/10 border-violet-500/30",
  Business: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
  Language: "from-sky-500/20 to-indigo-500/10 border-sky-500/30",
};

const categoryAccent = {
  Tech: "bg-blue-500 text-white border-blue-400",
  Creative: "bg-pink-500 text-white border-pink-400",
  Marketing: "bg-orange-500 text-white border-orange-400",
  Writing: "bg-violet-500 text-white border-violet-400",
  Business: "bg-emerald-500 text-white border-emerald-400",
  Language: "bg-sky-500 text-white border-sky-400",
};

const categoryMuted = {
  Tech: "border-blue-500/40 text-blue-300 hover:bg-blue-500/20",
  Creative: "border-pink-500/40 text-pink-300 hover:bg-pink-500/20",
  Marketing: "border-orange-500/40 text-orange-300 hover:bg-orange-500/20",
  Writing: "border-violet-500/40 text-violet-300 hover:bg-violet-500/20",
  Business: "border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20",
  Language: "border-sky-500/40 text-sky-300 hover:bg-sky-500/20",
};

const CategorySection = ({ category, skills, activeList, onToggle }) => {
  return (
    <div
      className={`rounded-2xl border bg-gradient-to-br p-5 ${
        categoryColors[category] || "from-slate-800/50 to-slate-800/20 border-slate-700"
      }`}
    >
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-sm font-semibold text-white uppercase tracking-widest">
          {category}
        </h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          const selected = activeList.includes(skill.name);
          return (
            <button
              key={skill.id}
              onClick={() => onToggle(skill.name)}
              className={`px-3.5 py-1.5 rounded-full text-sm border font-medium transition-all duration-150 ${
                selected
                  ? categoryAccent[category] || "bg-indigo-500 text-white border-indigo-400"
                  : `bg-transparent ${categoryMuted[category] || "border-slate-600 text-slate-400 hover:bg-slate-700"}`
              }`}
            >
              {selected && <span className="mr-1">✓</span>}
              {skill.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySection;