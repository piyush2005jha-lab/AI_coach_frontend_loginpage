import "../../styles/Resources/ResourceCategories.css";

export default function ResourceCategories({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <nav className="resource-categories">

      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={
            activeCategory === category
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveCategory(category)
          }
        >
          {category}
        </button>
      ))}

    </nav>
  );
}