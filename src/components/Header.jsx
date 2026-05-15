import { useNavigate } from "react-router-dom";

const Header = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center text-sm">⚡</div>
        <span className="font-semibold text-white tracking-tight">SkillsHive</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-slate-400 text-sm">Hey, {user?.name?.split(" ")[0]} </span>
        <button
          onClick={handleLogout}
          className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;