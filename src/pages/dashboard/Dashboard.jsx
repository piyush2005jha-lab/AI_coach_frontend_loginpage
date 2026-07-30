import "../../styles/global.css";
import "../../styles/animations.css";
import "../../styles/dashboard/dashboard.css";

import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import Stats from "../../components/dashboard/Stats";
import ProgressRing from "../../components/dashboard/ProgressRing";
import HeatMap from "../../components/dashboard/HeatMap";
import ResumeCard from "../../components/dashboard/ResumeCard";
import WeeklyChart from "../../components/dashboard/WeeklyChart";
import InterviewCards from "../../components/dashboard/InterviewCards";

import ChatWidget from "../../components/AI/ChatWidget";

export default function Dashboard() {
  return (
    <>
      <Sidebar />

      <main className="dashboard-layout">
        <div className="dashboard-content">
          <Topbar />

          <Stats />

          <section className="signature-row">
            <ProgressRing />
            <HeatMap />
          </section>

          <section className="grid-main">
            <ResumeCard />
            <WeeklyChart />
          </section>

          <InterviewCards />
        </div>
      </main>

      {/* Floating AI Copilot */}
      <ChatWidget userName="Piyush" />
    </>
  );
}