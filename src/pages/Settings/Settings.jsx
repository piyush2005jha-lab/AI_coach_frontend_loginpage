import { useState } from "react";

import Sidebar from "../../components/dashboard/Sidebar";

import SettingsMenu from "./SettingsMenu";
import ProfileCard from "./ProfileCard";
import AppearanceCard from "./AppearanceCard";
import NotificationsCard from "./NotificationsCard";
import InterviewPreferences from "./InterviewPreferences";
import SecurityCard from "./SecurityCard";

import "../../styles/Settings/Settings.css";

export default function Settings() {
  const [activeSetting, setActiveSetting] =
    useState("Profile");

  return (
    <div className="settings-page">

      {/* =========================
          EXISTING PREPZO SIDEBAR
      ========================= */}

      <Sidebar
        activeItem="Settings"
        variant="mock-history-sidebar"
      />


      {/* =========================
          MAIN
      ========================= */}

      <main className="settings-main">

        {/* TOP BAR */}

        <header className="settings-topbar">

          <div />

          <div className="settings-topbar-right">

            <button className="settings-bell">
              ♧
              <span />
            </button>

            <div className="settings-streak">

              <span>
                Current streak
              </span>

              <strong>
                5 days 🔥
              </strong>

            </div>

          </div>

        </header>


        {/* CONTENT */}

        <section className="settings-content">

          {/* PAGE HEADER */}

          <div className="settings-header">

            <div>

              <h1>
                Settings
              </h1>

              <p>
                Manage your profile, preferences and
                account settings.
              </p>

            </div>

          </div>


          {/* SETTINGS BODY */}

          <div className="settings-layout">

            {/* LEFT SETTINGS MENU */}

            <SettingsMenu
              activeSetting={activeSetting}
              setActiveSetting={setActiveSetting}
            />


            {/* RIGHT CONTENT */}

            <div className="settings-panels">

              {/* PROFILE */}

              <ProfileCard />


              {/* TWO COLUMN */}

              <div className="settings-two-column">

                <AppearanceCard />

                <NotificationsCard />

              </div>


              {/* TWO COLUMN */}

              <div className="settings-two-column">

                <InterviewPreferences />

                <SecurityCard />

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}