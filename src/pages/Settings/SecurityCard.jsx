    export default function SecurityCard() {
  return (
    <section className="settings-card security-card">

      <div className="settings-card-heading">

        <div className="settings-card-icon">
          ▣
        </div>

        <div>

          <h2>
            Account & Security
          </h2>

          <p>
            Manage your account security settings.
          </p>

        </div>

      </div>


      <SecurityRow
        title="Change password"
        description="Update your account password"
      />

      <SecurityRow
        title="Two-factor authentication"
        description="Add an extra layer of security"
        status="✓ Enabled"
        statusClass="green"
      />

      <SecurityRow
        title="Active sessions"
        description="Manage devices where you're logged in"
        status="◉ 3 active"
        statusClass="gold"
      />

    </section>
  );
}


function SecurityRow({
  title,
  description,
  status,
  statusClass,
}) {
  return (
    <div className="security-row">

      <div>

        <strong>
          {title}
        </strong>

        <p>
          {description}
        </p>

      </div>


      {status && (
        <span
          className={`security-status ${statusClass}`}
        >
          {status}
        </span>
      )}


      <button
        type="button"
        className="arrow-button"
      >
        →
      </button>

    </div>
  );
}