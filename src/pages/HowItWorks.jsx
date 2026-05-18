import react from "react"
export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Create an Account",
      description:
        "Users begin by signing up and creating their Skill Hive profile. This allows them to access the community, dashboard, and exchange features.",
      icon: "",
    },
    {
      id: 2,
      title: "Add Your Skills",
      description:
        "Users list the skills they can offer and the skills they want to learn. This helps the system identify compatible exchange matches.",
      icon: "",
    },
    {
      id: 3,
      title: "Discover Matches",
      description:
        "The platform automatically matches users based on mutual interests. A match occurs when another user offers a skill you want and wants a skill you offer.",
      icon: "",
    },
    {
      id: 4,
      title: "Request a Skill Swap",
      description:
        "Users can send exchange requests to matched users directly from the dashboard. The request includes the offered and requested skills.",
      icon: "",
    },
    {
      id: 5,
      title: "Accept or Decline Requests",
      description:
        "Matched users can review incoming requests and either accept or decline them depending on their availability and interest.",
      icon: "",
    },
    {
      id: 6,
      title: "Start Learning Together",
      description:
        "Once a request is accepted, users can begin collaborating, sharing knowledge, and learning from one another through peer-to-peer exchange.",
      icon: "",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-indigo-400 uppercase tracking-[0.2em] text-sm mb-4">
          Skill Hive Platform
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          How Skill Hive Works
        </h1>

        <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
          Skill Hive is a collaborative skill exchange platform designed to help
          users connect, share knowledge, and grow together through peer-to-peer
          learning.
        </p>
      </div>

      {/* Steps Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl mb-5">
              {step.icon}
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-2 py-1 rounded-full">
                Step {step.id}
              </span>
            </div>

            <h2 className="text-xl font-semibold mb-3 text-white">
              {step.title}
            </h2>

            <p className="text-slate-400 leading-relaxed text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Collaboration Section */}
      <div className="max-w-5xl mx-auto mt-24 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-5">
          Built Around Collaboration
        </h2>

        <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto text-lg">
          Skill Hive encourages community-driven learning by connecting people
          who can teach and learn from one another. The platform was also built
          collaboratively using Git and GitHub workflows, including feature
          branching, pull requests, and merge conflict resolution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          <div className="bg-slate-950/50 rounded-2xl border border-slate-700 p-5">
            <h3 className="font-semibold text-white mb-2">Git Collaboration</h3>
            <p className="text-sm text-slate-400">
              Developers worked on separate feature branches to avoid conflicts
              and improve teamwork.
            </p>
          </div>

          <div className="bg-slate-950/50 rounded-2xl border border-slate-700 p-5">
            <h3 className="font-semibold text-white mb-2">Pull Requests</h3>
            <p className="text-sm text-slate-400">
              Features were reviewed and merged through GitHub pull requests.
            </p>
          </div>

          <div className="bg-slate-950/50 rounded-2xl border border-slate-700 p-5">
            <h3 className="font-semibold text-white mb-2">Team Workflow</h3>
            <p className="text-sm text-slate-400">
              Team members communicated effectively while building different
              sections of the application.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">
          Start Exchanging Skills Today
        </h2>

        <p className="text-slate-400 mb-8 text-lg">
          Join the Skill Hive community and discover people who can help you
          grow while you help others grow too.
        </p>

        <button className="bg-indigo-600 hover:bg-indigo-500 transition-colors px-8 py-3 rounded-xl font-medium text-white shadow-lg shadow-indigo-500/20">
          Join Skill Hive
        </button>
      </div>
    </div>
  );
}
