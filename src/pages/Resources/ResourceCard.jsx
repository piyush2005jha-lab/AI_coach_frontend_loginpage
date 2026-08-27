import "../../styles/Resources/ResourceCard.css";

export default function ResourceCard({ resource }) {
  return (
    <article className="resource-card">

      <div className="resource-card-top">

        <div className="resource-icon">
          {resource.icon}
        </div>

        <span className="resource-type">
          {resource.type}
        </span>

      </div>


      <div className="resource-card-content">

        <h3>
          {resource.title}
        </h3>

        <p>
          {resource.description}
        </p>

        <span className="resource-topics">
          {resource.topics}
        </span>

      </div>


      <div className="resource-card-footer">

        <div className="resource-meta">

          <span>
            {resource.level}
          </span>

          <span>
            ◷ {resource.time}
          </span>

        </div>

        <button type="button">
          Open resource
          <span>→</span>
        </button>

      </div>

    </article>
  );
}