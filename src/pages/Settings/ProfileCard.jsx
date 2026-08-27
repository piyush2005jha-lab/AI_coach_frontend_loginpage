export default function ProfileCard() {
  return (
    <section className="settings-card profile-card">

      <div className="profile-avatar">
        PJ
      </div>

      <div className="profile-info">

        <span className="card-eyebrow">
          PROFILE INFORMATION
        </span>

        <h2>
          Piyush Jha
        </h2>

        <p>
          piyushj@gmail.com
        </p>

        <div className="profile-meta">

          <span className="pro-badge">
            PRO MEMBER
          </span>

          <span>
            Member since Jan 2024
          </span>

        </div>

      </div>

      <button className="outline-button">
        Edit Profile
      </button>

    </section>
  );
}