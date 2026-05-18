import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const stats = [
    { value: "10K+", label: "Active Learners" },
    { value: "500+", label: "Skills Available" },
    { value: "50K+", label: "Exchanges Made" },
  ];

  const [query, setQuery] = useState("");
  const navigate = useNavigate()

  return (
    <main>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden min-h-[520px] flex items-center justify-center px-6 py-20"
        style={{
          background:
            "linear-gradient(145deg, #1a3a6b 0%, #2d5fa6 40%, #3a7bd5 70%, #4a8fe0 100%)",
        }}
      >
        {/* Background glow layers */}
        <div className="absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" />

        {/* Content */}
        <div className="text-center z-10">
          <h1
            className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.18)" }}
          >
            Exchange Skills,
            <br />
            Grow Together
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-blue-100/90 leading-relaxed max-w-xl mx-auto mb-10">
            Connect with learners worldwide. Share what you know, learn what you
            need. <em>No money required</em>—just your passion for learning.
          </p>

          {/* Search + CTA */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-xl mx-auto mb-12">
            {/* Search input */}
            <div className="flex items-center gap-3 flex-1 min-w-[240px] bg-white rounded-xl px-5 h-14 shadow-lg">
              <input
                type="text"
                placeholder="Search for skills..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent outline-none text-blue-900 placeholder:text-blue-300 w-full"
              />
            </div>

            {/* CTA button */}
            <button onClick={() => navigate("/signup")}
            className="bg-white text-blue-900 font-bold px-7 h-14 rounded-xl shadow-lg hover:bg-blue-900 hover:text-white transition">
              Get Started →
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  {s.value}
                </span>
                <span className="text-sm text-blue-200/85">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Browse by Category
          </h2>
          <p className="text-gray-500 text-base">
            Explore skills across various disciplines
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
  {["Design", "Coding", "Music", "Business"].map((cat, i) => (
    <div
      key={i}
      className="bg-gray-100 p-4 rounded-lg text-center hover:bg-gray-200 cursor-pointer"
    >
      {cat}
    </div>
  ))}
</div>
        </div>
        <section className="py-16 px-6 bg-white">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-900">
      Featured Skills
    </h2>
    <p className="text-gray-500">
      Popular skills people are exchanging right now
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {[
      "Web Development",
      "UI/UX Design",
      "Photography",
      "Video Editing",
      "Data Science",
      "Marketing",
    ].map((skill, i) => (
      <div
        key={i}
        className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
      >
        <h3 className="text-lg font-semibold text-gray-800">
          {skill}
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Learn or teach {skill.toLowerCase()} with real people
        </p>
      </div>
    ))}
  </div>
</section>
      </section>

     <Footer />
    </main>
  );
};

export default HomePage;
