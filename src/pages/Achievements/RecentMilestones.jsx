const milestones = [
  {
    number: "01",
    icon: "🏆",
    title: "Completed 10 mock interviews",
    date: "Feb 2, 2024 · 9:30 PM",
  },
  {
    number: "02",
    icon: "↗",
    title: "Reached 80% readiness score",
    date: "Feb 15, 2024 · 4:45 PM",
  },
  {
    number: "03",
    icon: "🔥",
    title: "Maintained 5 day streak",
    date: "Feb 18, 2024 · 8:15 AM",
  },
  {
    number: "04",
    icon: "🔒",
    title: "Next milestone: Interview Ready",
    date: "85% readiness required",
  },
];

export default function RecentMilestones() {
  return (
    <aside className="recent-milestones">

      <div className="section-label">
        RECENT MILESTONES
      </div>

      <div className="milestone-list">

        {milestones.map((item, index) => (
          <div className="milestone-item" key={item.number}>

            <div className="milestone-number">
              {item.number}
            </div>

            <div className="milestone-icon">
              {item.icon}
            </div>

            <div className="milestone-content">
              <h4>{item.title}</h4>
              <p>{item.date}</p>
            </div>

            {index < milestones.length - 1 && (
              <div className="milestone-line" />
            )}

          </div>
        ))}

      </div>

      <button className="view-achievements">
        View all achievements
        <span>↗</span>
      </button>

    </aside>
  );
}