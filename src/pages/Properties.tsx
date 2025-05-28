import { useState } from "react";
import SectionHeader from "../components/ui/SectionHeader";
import { Helmet } from "react-helmet-async";
import fullPropertyData from "../data/full_property_data.json";

// Type for property option
interface PropertyOption {
  [key: string]: any;
}

export default function Properties() {
  const categories = Object.entries(fullPropertyData);
  const categoryNames = categories.map(([name]) => name);
  const [activeCategory, setActiveCategory] = useState<string>(
    categoryNames[0]
  );
  // Use type assertion for dynamic key access
  const activeOptions =
    (fullPropertyData as Record<string, Record<string, PropertyOption>>)[
      activeCategory
    ] || {};

  function sanitizeProjectName(name: string): string {
    return name
      .replace(/[^a-zA-Z0-9\s-_]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getProjectName(prop: PropertyOption, category: string): string {
    // For Sale Options, keys may be different
    if (category === "Sale Options") {
      return (
        prop["Project"] ||
        prop["Project / Building Name"] ||
        prop["Project Details"] ||
        prop["Name of the Developer"] ||
        ""
      );
    }
    // Default for other categories
    return prop["PROJECT"] || prop["Project"] || "";
  }

  function getPropertyImage(category: string, project: string): string {
    if (!project) return "/services/fproperties.jpg";
    const safeCategory = encodeURIComponent(category);
    const baseNames = [
      sanitizeProjectName(project),
      sanitizeProjectName(project).replace(/ /g, "_"),
      sanitizeProjectName(project).replace(/ /g, "-"),
    ];
    const exts = [".png", ".jpg", ".jpeg", ".bmp"];
    // Try all combinations
    for (const base of baseNames) {
      for (const ext of exts) {
        const path = `/prop/${safeCategory}/${base}${ext}`;
        // We can't check existence here, so return the first, and let onError fallback
        return path;
      }
    }
    return "/services/fproperties.jpg";
  }

  return (
    <div className="page-transition pt-24">
      <Helmet>
        <title>Properties for Sale & Lease | SpaceWave</title>
        <meta
          name="description"
          content="Browse premium commercial and residential properties in Hyderabad and beyond. Find your perfect space with SpaceWave."
        />
        <meta
          property="og:title"
          content="Properties for Sale & Lease | SpaceWave"
        />
        <meta
          property="og:description"
          content="Browse premium commercial and residential properties in Hyderabad and beyond. Find your perfect space with SpaceWave."
        />
        <meta property="og:image" content="/wedeal/fpropbg.png" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://spacewave.in/properties" />
      </Helmet>
      <section
        className="relative min-h-[340px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/wedeal/fpropbg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-0" />
        <div className="container relative z-10 flex flex-col items-center text-center py-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Our Properties
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6">
            Explore our curated collection of properties by category. For more
            details or to add your property, contact us.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            {categoryNames.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold border transition text-base ${
                  activeCategory === cat
                    ? "bg-primary-600 text-white border-primary-600"
                    : "bg-white text-primary-700 border-primary-200 hover:bg-primary-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-100 min-h-[60vh]">
        <div className="container space-y-16">
          <SectionHeader
            title={activeCategory}
            subtitle={
              <span className="text-black">
                See all available options in this category.
              </span>
            }
            centered
          />
          {activeOptions &&
          typeof activeOptions === "object" &&
          Object.keys(activeOptions).length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              {Object.entries(activeOptions).map(([optionKey, property]) => {
                const prop = property as PropertyOption;
                const projectName = getProjectName(prop, activeCategory);
                const imgSrc = getPropertyImage(
                  activeCategory,
                  projectName?.trim()
                );
                return (
                  <div
                    key={optionKey}
                    className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
                  >
                    <div className="h-44 w-full bg-gradient-to-tr from-primary-100 to-primary-300 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src={imgSrc}
                        alt={projectName || "Property"}
                        className="object-cover w-full h-full rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = "/services/fproperties.jpg";
                        }}
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-primary-700">
                      {prop["PROJECT"]}
                    </h3>
                    <div className="text-sm text-neutral-700 mb-2">
                      <span className="font-semibold">Location:</span>{" "}
                      {prop["Location"]}
                    </div>
                    <div className="text-sm text-neutral-700 mb-2">
                      <span className="font-semibold">Area per floor:</span>{" "}
                      {prop["Area per floor"]}
                    </div>
                    <div className="text-sm text-neutral-700 mb-2">
                      <span className="font-semibold">Area offered:</span>{" "}
                      {prop["Area offered sft."]} sft
                    </div>
                    <div className="text-sm text-neutral-700 mb-2">
                      <span className="font-semibold">Floors:</span>{" "}
                      {prop["Number of floors"]}
                    </div>
                    <div className="text-sm text-neutral-700 mb-2">
                      <span className="font-semibold">Status:</span>{" "}
                      {prop["Status"]}
                    </div>
                    {/* <div className="text-sm text-neutral-700 mb-2">
                      <span className="font-semibold">Rent/sft:</span>{" "}
                      {prop["Rent per sft.  WARM SHELL"]
                        ? `₹${prop["Rent per sft.  WARM SHELL"]}`
                        : "-"}
                    </div> */}
                    <div className="text-sm text-neutral-700 mb-2">
                      <span className="font-semibold">Parking:</span>{" "}
                      {prop["Car Parking ratio"]}
                    </div>
                    <div className="text-xs text-neutral-500 mt-2">
                      {prop["Definition of Warmshell/Plug & Play"]}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center text-neutral-400 py-8">
              No properties in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
