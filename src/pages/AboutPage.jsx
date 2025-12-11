import PageHeader from "../components/PageHeader.jsx";
import InfoBox from "../components/InfoBox.jsx";
import AccessibilityStatement from "../components/AccessibilityStatement.jsx";

function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About This Project"
        subtitle="Design principles, data assumptions, and accessibility choices behind this prototype."
      />

      <section aria-label="Methodology">
        <h2 className="h4 mb-3">Methodology</h2>
        <p>
          This site is a simplified prototype intended to help a single adult
          think about how income and cost of living interact across cities. Each
          city is assigned a recommended income based on rough cost-of-living
          tiers (housing, transportation, groceries, and other essentials).
        </p>
        <p>
          The app compares your entered salary to this recommended amount and
          shows whether you meet or fall short of that estimate. It does not yet
          pull live data or account for taxes, dependents, or long-term
          financial planning.
        </p>
      </section>

      <InfoBox title="Design choices" variant="light">
        <ul className="mb-0">
          <li>
            <strong>Consistency:</strong> React Bootstrap is used throughout for
            layout, spacing, and component styling.
          </li>
          <li>
            <strong>Hierarchy:</strong> Clear headings, cards, and sections make
            the main task—checking affordability—stand out.
          </li>
          <li>
            <strong>Clarity:</strong> Plain language explains what the numbers
            do and do not mean.
          </li>
        </ul>
      </InfoBox>

      <AccessibilityStatement />
    </div>
  );
}

export default AboutPage;
