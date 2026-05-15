const TabToggle = ({ activeTab, setActiveTab, skillsOffered, skillsWanted }) => {
  return (
    <div className="flex gap-2 mb-8 bg-slate-900 border border-slate-800 rounded-xl p-1 w-fit">
      <button
        onClick={() => setActiveTab("offer")}
        className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          activeTab === "offer"
            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
            : "text-slate-400 hover:text-slate-200"
        }`}
      >
        Skills I Offer
        {skillsOffered.length > 0 && (
          <span className="ml-2 bg-white/20 text-xs px-1.5 py-0.5 rounded-full">
            {skillsOffered.length}
          </span>
        )}
      </button>
      <button
        onClick={() => setActiveTab("want")}
        className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          activeTab === "want"
            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
            : "text-slate-400 hover:text-slate-200"
        }`}
      >
        Skills I Want
        {skillsWanted.length > 0 && (
          <span className="ml-2 bg-white/20 text-xs px-1.5 py-0.5 rounded-full">
            {skillsWanted.length}
          </span>
        )}
      </button>
    </div>
  );
};

export default TabToggle;