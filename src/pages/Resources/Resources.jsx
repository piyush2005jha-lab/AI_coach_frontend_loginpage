import { useMemo, useState } from "react";

import Sidebar from "../../components/dashboard/Sidebar";

import ResourceCard from "./ResourceCard";
import ResourceCategories from "./ResourceCategories";

import {
  resources,
  resourceCategories,
  featuredResource,
} from "../../data/resourcesData";

import "../../styles/Resources/Resources.css";

export default function Resources() {
  const [activeCategory, setActiveCategory] =
    useState("All Resources");

  const [search, setSearch] = useState("");

  const filteredResources = useMemo(() => {
    const query = search.toLowerCase().trim();

    return resources.filter((resource) => {
      const categoryMatch =
        activeCategory === "All Resources" ||
        resource.category === activeCategory;

      const searchMatch =
        !query ||
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.topics.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <div className="resources-page">

      <Sidebar
        activeItem="Resources"
        variant="mock-history-sidebar"
      />

      <main className="resources-main">

        {/* TOP BAR */}

        <header className="resources-topbar">

          <div />

          <div className="resources-topbar-right">

            <button className="resources-bell">
              ♧
            </button>

            <div className="resources-streak">
              <span>Current streak</span>
              <strong>5 days 🔥</strong>
            </div>

          </div>

        </header>


        <section className="resources-content">

          {/* HEADER */}

          <div className="resources-header">

            <div>
              <h1>Resources</h1>

              <p>
                Curated resources to help you prepare
                smarter for interviews.
              </p>
            </div>

            <div className="resources-search">

              <span>⌕</span>

              <input
                type="text"
                placeholder="Search resources..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />

            </div>

          </div>


          {/* FEATURED */}

          <section className="featured-resource">

            <div className="featured-content">

              <span className="featured-label">
                {featuredResource.type}
              </span>

              <h2>
                {featuredResource.title}
              </h2>

              <p>
                {featuredResource.description}
              </p>

              <div className="featured-tags">

                <span>
                  Focus: {featuredResource.current}
                </span>

                <span>
                  Next: {featuredResource.next}
                </span>

              </div>

            </div>


            <div className="featured-progress">

              <div className="progress-ring">

                <svg viewBox="0 0 100 100">

                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="ring-background"
                  />

                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="ring-progress"
                    strokeDasharray="251"
                    strokeDashoffset="80"
                  />

                </svg>

                <strong>
                  {featuredResource.progress}%
                </strong>

              </div>

              <span>
                PATH COMPLETE
              </span>

            </div>

          </section>


          {/* CATEGORY FILTER */}

          <ResourceCategories
            categories={resourceCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />


          {/* LIBRARY TITLE */}

          <div className="resources-library-header">

            <div>

              <span>PREPZO LIBRARY</span>

              <h2>
                {activeCategory === "All Resources"
                  ? "Recommended resources"
                  : activeCategory}
              </h2>

            </div>

            <span className="resource-total">
              {filteredResources.length} resources
            </span>

          </div>


          {/* RESOURCE GRID */}

          <div className="resources-grid">

            {filteredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
              />
            ))}

          </div>


          {/* EMPTY STATE */}

          {filteredResources.length === 0 && (
            <div className="resources-empty">

              <span>◇</span>

              <h3>No resources found</h3>

              <p>
                Try another search or category.
              </p>

            </div>
          )}

        </section>

      </main>

    </div>
  );
}