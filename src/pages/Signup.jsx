import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
     const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await fetch(
          `https://skillshive-project-3.onrender.com/users?email=${email}`,
        );
        if (!response.ok) { alert("Login failed"); return; }
        const data = await response.json();
        if (data.length === 0) { alert("Invalid credentials"); return; }
        const user = data[0];
// Manually check password
  if (user.password !== password) {
    alert("Invalid credentials");
    return;
  }


        localStorage.setItem("user", JSON.stringify(user));
        alert(`Welcome ${user.name}`);
        navigate("/community"); // 
      } else {
        const response = await fetch("https://skillshive-project-3.onrender.com/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
        if (!response.ok) { alert("Register failed"); return; }
        alert("Registered successfully");
        setName(""); setEmail(""); setPassword("");
        setIsLogin(true);
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-sm">
        {/* Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">

          {/* Header */}
          <div className="px-8 pt-8 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <span className="text-slate-400 text-sm font-medium tracking-wide uppercase">
                {isLogin ? "Sign in" : "Create account"}
              </span>
            </div>
            <h1 className="text-white text-2xl font-semibold tracking-tight">
              {isLogin ? "Welcome back" : "Get started"}
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              {isLogin
                ? "Enter your credentials to continue."
                : "Fill in your details to create an account."}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleFormSubmit} className="px-8 py-6 space-y-4">

            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full bg-slate-800/60 border border-slate-700 text-slate-100 placeholder-slate-600 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200"
              />
            </div>

            {/* Name (register only) */}
            {!isLogin && (
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  required
                  className="w-full bg-slate-800/60 border border-slate-700 text-slate-100 placeholder-slate-600 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200"
                />
              </div>
            )}

            {/* Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-slate-800/60 border border-slate-700 text-slate-100 placeholder-slate-600 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium rounded-lg py-2.5 text-sm transition-colors duration-200 shadow-lg shadow-indigo-600/20"
            >
              {isLogin ? "Sign in" : "Create account"}
            </button>
          </form>

          {/* Footer */}
          <div className="px-8 pb-7 flex items-center justify-center gap-1.5">
            <span className="text-slate-500 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200"
            >
              {isLogin ? "Register" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;