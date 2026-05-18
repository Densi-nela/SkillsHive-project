import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [requestingSent, setRequestingSent] = useState(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) { navigate("/"); return; }
    Promise.all([
      fetch("https://skillshive-project-3.onrender.com/users").then((r) => r.json()),
      fetch("https://skillshive-project-3.onrender.com/exchanges").then((r) => r.json()),
    ]).then(([allUsers, allExchanges]) => {
      setUsers(allUsers.filter((u) => u.id !== user.id));
      setExchanges(allExchanges.filter(
        (e) => e.fromUserId === user.id || e.toUserId === user.id
      ));
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  // Find matched users — they offer what I want AND want what I offer
  const matches = users.filter((u) => {
    const theyOfferWhatIWant = (u.skillsOffered || []).some((s) =>
      (user.skillsWanted || []).includes(s)
    );
    const theyWantWhatIOffer = (u.skillsWanted || []).some((s) =>
      (user.skillsOffered || []).includes(s)
    );
    return theyOfferWhatIWant && theyWantWhatIOffer;
  });

  // Send exchange request
  const handleRequestSwap = async (toUser) => {
    const alreadyRequested = exchanges.find(
      (e) => e.fromUserId === user.id && e.toUserId === toUser.id
    );
    if (alreadyRequested) { alert("You already sent a request to this user!"); return; }

    setRequestingSent(toUser.id);
    try {
      const offeredSkill = (user.skillsOffered || []).find((s) =>
        (toUser.skillsWanted || []).includes(s)
      );
      const wantedSkill = (user.skillsWanted || []).find((s) =>
        (toUser.skillsOffered || []).includes(s)
      );
      const response = await fetch("https://skillshive-project-3.onrender.com/exchanges", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fromUserId: user.id,
          fromUserName: user.name,
          toUserId: toUser.id,
          toUserName: toUser.name,
          offeredSkill,
          wantedSkill,
          status: "pending",
        }),
      });
      if (!response.ok) { alert("Failed to send request"); return; }
      const newExchange = await response.json();
      setExchanges((prev) => [...prev, newExchange]);
      alert(`Swap request sent to ${toUser.name}!`);
    } catch {
      alert("Something went wrong");
    } finally {
      setRequestingSent(null);
    }
  };

  // Accept or decline an incoming exchange request
  const handleUpdateStatus = async (exchangeId, status) => {
    try {
      const response = await fetch(
        `https://skillshive-project-3.onrender.com/exchanges/${exchangeId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        }
      );
      if (!response.ok) { alert("Failed to update request"); return; }
      const updated = await response.json();
      setExchanges((prev) =>
        prev.map((e) => (e.id === exchangeId ? updated : e))
      );
    } catch {
      alert("Something went wrong");
    }
  };

  const getExchangeWithUser = (userId) =>
    exchanges.find(
      (e) => (e.fromUserId === user.id && e.toUserId === userId) ||
             (e.toUserId === user.id && e.fromUserId === userId)
    );

  const statusColors = {
    pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    accepted: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    declined: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center text-sm">⚡</div>
          <span className="font-semibold text-white tracking-tight">SkillsHive</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/community")} className="text-slate-400 hover:text-slate-200 text-sm transition-colors">
            Edit Skills
          </button>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 text-sm">{user?.name?.split(" ")[0]} 👋</span>
          <button
            onClick={() => { localStorage.removeItem("user"); navigate("/"); }}
            className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Profile Summary */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                Hey, {user?.name?.split(" ")[0]} 
              </h1>
              <p className="text-slate-400 text-sm mt-1">Here's your skill exchange hub.</p>
            </div>
            <button
              onClick={() => navigate("/community")}
              className="text-xs border border-slate-700 hover:border-indigo-500 text-slate-400 hover:text-indigo-400 px-4 py-2 rounded-lg transition-all duration-200"
            >
              ✏️ Edit Skills
            </button>
          </div>
          <div className="mt-5 flex flex-wrap gap-6">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Offering</p>
              <div className="flex flex-wrap gap-2">
                {(user?.skillsOffered || []).length === 0 ? (
                  <span className="text-slate-600 text-sm italic">none set</span>
                ) : (
                  (user?.skillsOffered || []).map((s) => (
                    <span key={s} className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full">
                      {s}
                    </span>
                  ))
                )}
              </div>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Wanting</p>
              <div className="flex flex-wrap gap-2">
                {(user?.skillsWanted || []).length === 0 ? (
                  <span className="text-slate-600 text-sm italic">none set</span>
                ) : (
                  (user?.skillsWanted || []).map((s) => (
                    <span key={s} className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs px-3 py-1 rounded-full">
                      {s}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-slate-500 text-sm">Loading...</div>
        ) : (
          <>
            {/* Matches Section */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <h2 className="text-lg font-semibold text-white"> Your Matches</h2>
                <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs px-2.5 py-0.5 rounded-full">
                  {matches.length}
                </span>
              </div>

              {matches.length === 0 ? (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
                  <p className="text-slate-500 text-sm">No matches yet.</p>
                  <p className="text-slate-600 text-xs mt-1">More users will appear as they join and set their skills.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {matches.map((match) => {
                    const exchange = getExchangeWithUser(match.id);
                    const offeredSkill = (user.skillsOffered || []).find((s) =>
                      (match.skillsWanted || []).includes(s)
                    );
                    const wantedSkill = (user.skillsWanted || []).find((s) =>
                      (match.skillsOffered || []).includes(s)
                    );
                    return (
                      <div key={match.id} className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 transition-all duration-200">
                        {/* Avatar + Name */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
                            {match.name?.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="text-white font-medium text-sm">{match.name}</p>
                            <p className="text-slate-500 text-xs">{match.email}</p>
                          </div>
                        </div>

                        {/* Skill exchange */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-500 w-14">They offer</span>
                            <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-2.5 py-0.5 rounded-full">
                              {wantedSkill}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-500 w-14">They want</span>
                            <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs px-2.5 py-0.5 rounded-full">
                              {offeredSkill}
                            </span>
                          </div>
                        </div>

                        {/* Action */}
                        {exchange ? (
                          <span className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${statusColors[exchange.status]}`}>
                            {exchange.status === "pending" ? " Pending" : exchange.status === "accepted" ? "Accepted" : "✕ Declined"}
                          </span>
                        ) : (
                          <button
                            onClick={() => handleRequestSwap(match)}
                            disabled={requestingSent === match.id}
                            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-medium py-2 rounded-lg transition-colors duration-200"
                          >
                            {requestingSent === match.id ? "Sending..." : "Request Swap ⇄"}
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Exchanges Section */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <h2 className="text-lg font-semibold text-white"> Exchange Requests</h2>
                <span className="bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs px-2.5 py-0.5 rounded-full">
                  {exchanges.length}
                </span>
              </div>

              {exchanges.length === 0 ? (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
                  <p className="text-slate-500 text-sm">No exchanges yet.</p>
                  <p className="text-slate-600 text-xs mt-1">Request a swap from your matches above!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {exchanges.map((exchange) => {
                    const isFromMe = exchange.fromUserId === user.id;
                    return (
                      <div key={exchange.id} className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 flex items-center justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs font-semibold">
                            {isFromMe
                              ? exchange.toUserName?.charAt(0).toUpperCase()
                              : exchange.fromUserName?.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">
                              {isFromMe ? `You → ${exchange.toUserName}` : `${exchange.fromUserName} → You`}
                            </p>
                            <p className="text-slate-500 text-xs mt-0.5">
                              {exchange.offeredSkill} ⇄ {exchange.wantedSkill}
                            </p>
                          </div>
                        </div>

                        {/* Accept / Decline for incoming pending requests */}
                        {!isFromMe && exchange.status === "pending" ? (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleUpdateStatus(exchange.id, "accepted")}
                              className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
                            >
                               Accept
                            </button>
                            <button
                              onClick={() => handleUpdateStatus(exchange.id, "declined")}
                              className="text-xs bg-red-600/20 hover:bg-red-600/40 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-lg transition-colors font-medium"
                            >
                              ✕ Decline
                            </button>
                          </div>
                        ) : (
                          <span className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${statusColors[exchange.status]}`}>
                            {exchange.status === "pending" ? " Pending" : exchange.status === "accepted" ? " Accepted" : "✕ Declined"}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;