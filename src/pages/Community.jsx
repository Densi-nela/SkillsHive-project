import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";           
import TabToggle from "../components/TabToggle";
import CategorySection from "../components/CategorySection";
import SkillSummary from "../components/SkillSummary";

const Community = () => {
  const [skills, setSkills] = useState([]);
  const [skillsOffered, setSkillsOffered] = useState([]);
  const [skillsWanted, setSkillsWanted] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("offer");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) { navigate("/"); return; }
    fetch("http://localhost:3030/skills")
      .then((res) => res.json())
      .then((data) => { setSkills(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  // Group skills by category
  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const toggleSkill = (skillName) => {
    if (activeTab === "offer") {
      setSkillsOffered((prev) =>
        prev.includes(skillName)
          ? prev.filter((s) => s !== skillName)
          : [...prev, skillName]
      );
    } else {
      setSkillsWanted((prev) =>
        prev.includes(skillName)
          ? prev.filter((s) => s !== skillName)
          : [...prev, skillName]
      );
    }
  };

  const handleSave = async () => {
    if (skillsOffered.length === 0) { alert("Please select at least one skill you offer."); return; }
    if (skillsWanted.length === 0) { alert("Please select at least one skill you want to learn."); return; }
    setSaving(true);
    try {
      const response = await fetch(`http://localhost:3030/users/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skillsOffered, skillsWanted }),
      });
      if (!response.ok) { alert("Failed to save skills"); return; }
      const updated = await response.json();
      localStorage.setItem("user", JSON.stringify(updated));
      navigate("/Dashboard");
    } catch {
      alert("Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  const activeList = activeTab === "offer" ? skillsOffered : skillsWanted;

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <Header user={user} />

      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">Build your skill profile</h1>
          <p className="text-slate-400 mt-2">Select the skills you can teach and the ones you want to learn.</p>
        </div>

        {/* Tab Toggle */}
        <TabToggle
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          skillsOffered={skillsOffered}
          skillsWanted={skillsWanted}
        />

        {/* Hint */}
        <p className="text-slate-500 text-sm mb-6">
          {activeTab === "offer"
            ? "Click on skills you can teach or share with others."
            : "Click on skills you'd love to learn from someone."}
        </p>

        {/* Skill Categories */}
        {loading ? (
          <div className="text-slate-500 text-sm">Loading skills...</div>
        ) : (
          <div className="space-y-6">
            {Object.entries(grouped).map(([category, catSkills]) => (
              <CategorySection
                key={category}
                category={category}
                skills={catSkills}
                activeList={activeList}
                onToggle={toggleSkill}
              />
            ))}
          </div>
        )}

        {/* Summary + Save */}
        <SkillSummary
          skillsOffered={skillsOffered}
          skillsWanted={skillsWanted}
          onSave={handleSave}
          saving={saving}
        />
      </div>
    </div>
  );
};

export default Community;