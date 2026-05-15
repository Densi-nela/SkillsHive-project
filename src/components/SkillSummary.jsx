const SkillSummary = ({ skillsOffered, skillsWanted, onSave, saving }) => {
  return (
    <div className="mt-10 border-t border-slate-800 pt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-500">Offering:</span>
            {skillsOffered.length === 0 ? (
              <span className="text-slate-600 italic">none selected</span>
            ) : (
              <span className="text-emerald-400 font-medium">{skillsOffered.join(", ")}</span>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-500">Wanting:</span>
            {skillsWanted.length === 0 ? (
              <span className="text-slate-600 italic">none selected</span>
            ) : (
              <span className="text-indigo-400 font-medium">{skillsWanted.join(", ")}</span>
            )}
          </div>
        </div>
        <button
          onClick={onSave}
          disabled={saving}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-8 py-3 rounded-xl text-sm transition-colors duration-200 shadow-lg shadow-indigo-600/20 whitespace-nowrap"
        >
          {saving ? "Saving..." : "Save & Continue →"}
        </button>
      </div>
    </div>
  );
};

export default SkillSummary;
