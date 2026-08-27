import { useState } from "react";
import { Link } from "react-router-dom";

import AchievementCard from "./AchievementCard";
import AchievementProgress from "./AchievementProgress";
import RecentMilestones from "./RecentMilestones";

import { achievements } from "../../data/achievementsData";

import "../../styles/achievements/achievements.css";


export default function Achievements() {

  const [activeTab, setActiveTab] = useState("All");
  const [category, setCategory] = useState("All Categories");

  const filteredAchievements = achievements.filter((achievement) => {

    const tabMatch =
      activeTab === "All" ||
      (activeTab === "Unlocked" && achievement.unlocked) ||
      (activeTab === "Locked" && !achievement.unlocked);

    const categoryMatch =
      category === "All Categories" ||
      achievement.category === category;

    return tabMatch && categoryMatch;
  });


  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: "◇" },
    { label: "Interviews", path: "/interview", icon: "◇" },
    { label: "Analytics", path: "/analytics", icon: "◇" },
    { label: "Mock history", path: "/mock-history", icon: "◇" },
    { label: "AI insights", path: "/ai-insights", icon: "◇" },
    { label: "Achievements", path: "/achievements", icon: "◆" },
    { label: "Resources", path: "/resources", icon: "◇" },
    { label: "Settings", path: "/settings", icon: "◇" },
  ];


  return (
    <div className="achievements-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="achievements-sidebar">

        <div className="sidebar-logo">
          <div className="logo-box">P</div>
          <span>Prepzo</span>
        </div>


        <div className="sidebar-profile">

          <h3>Piyush Jha</h3>

          <p>
            B.Tech · AI/ML specialisation
          </p>

          <span className="pro-member">
            PRO MEMBER
          </span>

        </div>


        <nav className="sidebar-nav">

          {navItems.map((item) => (

            <Link
              key={item.label}
              to={item.path}
              className={`sidebar-link ${
                item.label === "Achievements"
                  ? "active"
                  : ""
              }`}
            >

              <span className="nav-icon">
                {item.icon}
              </span>

              <span>{item.label}</span>

            </Link>

          ))}

        </nav>


        <div className="sidebar-bottom">

          <div className="upgrade-text">
            Unlock unlimited mocks, full heatmaps and
            unlimited sessions.
          </div>

          <button className="upgrade-button">
            UPGRADE MEMBERSHIP
          </button>


          <div className="sidebar-user">

            <div className="user-avatar">
              PJ
            </div>

            <div>
              <strong>Piyush Jha</strong>
              <span>piyushj@gmail.com</span>
            </div>

            <span className="user-arrow">⌄</span>

          </div>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="achievements-main">

        {/* TOP BAR */}

        <header className="achievements-topbar">

          <div />

          <div className="top-right">

            <span className="notification">
              ♧
            </span>

            <span className="streak-label">
              Current streak
            </span>

            <strong>
              5 days 🔥
            </strong>

          </div>

        </header>


        <div className="achievements-content">

          {/* PAGE HEADER */}

          <section className="page-header">

            <div>
              <h1>Achievements</h1>

              <p>
                Track your interview journey and celebrate
                your milestones.
              </p>
            </div>

          </section>


          {/* PROGRESS */}

          <AchievementProgress />


          {/* ACHIEVEMENTS HEADER */}

          <section className="achievements-section">

            <div className="section-title">
              ACHIEVEMENTS
            </div>


            <div className="achievement-toolbar">

              <div className="achievement-tabs">

                {["All", "Unlocked", "Locked"].map(
                  (tab) => (

                    <button
                      key={tab}
                      className={
                        activeTab === tab
                          ? "tab active"
                          : "tab"
                      }
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>

                  )
                )}

              </div>


              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              >

                <option>
                  All Categories
                </option>

                <option>
                  Interviews
                </option>

                <option>
                  Performance
                </option>

                <option>
                  Consistency
                </option>

                <option>
                  Skills
                </option>

              </select>

            </div>


            {/* ================= GRID ================= */}

            <div className="achievement-layout">

              <div className="achievement-grid">

                {filteredAchievements.map(
                  (achievement) => (

                    <AchievementCard
                      key={achievement.id}
                      achievement={achievement}
                    />

                  )
                )}

              </div>


              {/* RECENT MILESTONES */}

              <RecentMilestones />

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}