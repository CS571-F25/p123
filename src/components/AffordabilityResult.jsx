import { Alert } from "react-bootstrap";

function AffordabilityResult({ city, salary }) {
  if (!city || !salary) {
    return null;
  }

  const diff = city.requiredSalary - salary;
  const canAfford = diff <= 0;

  return (
    <section
      className="mt-4"
      aria-live="polite"
      aria-label="Affordability result for selected city and salary"
    >
      {canAfford ? (
        <Alert variant="success">
          <Alert.Heading as="h2" className="h4">
            Yes, you could afford to live here.
          </Alert.Heading>
          <p>
            With a salary of <strong>${salary.toLocaleString()}</strong>, you
            meet or exceed the estimated recommended income for{" "}
            <strong>{city.name}</strong>.
          </p>
          <p className="mb-0 small">
            This is a rough estimate for a single adult, considering typical
            housing, food, and transportation costs.
          </p>
        </Alert>
      ) : (
        <Alert variant="danger">
          <Alert.Heading as="h2" className="h4">
            No, this may not be affordable right now.
          </Alert.Heading>
          <p>
            A salary of <strong>${salary.toLocaleString()}</strong> is below the
            estimated recommended income of{" "}
            <strong>${city.requiredSalary.toLocaleString()}</strong> for{" "}
            <strong>{city.name}</strong>.
          </p>
          <p className="mb-0">
            You would need roughly{" "}
            <strong>${diff.toLocaleString()}</strong> more per year to reach
            this estimate.
          </p>
        </Alert>
      )}
    </section>
  );
}

export default AffordabilityResult;
