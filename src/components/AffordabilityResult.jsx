import { Alert } from "react-bootstrap";

function AffordabilityResult({ city, salary }) {
  if (!city || !salary) return null;

  const diff = city.requiredSalary - salary;
  const canAfford = diff <= 0;

  return (
    <div className="mt-4">
      {canAfford ? (
        <Alert variant="success">
          <Alert.Heading>Yes, you can afford this city.</Alert.Heading>
          <p>Your salary: <strong>${salary.toLocaleString()}</strong></p>
          <p>Recommended: ${city.requiredSalary.toLocaleString()}</p>
        </Alert>
      ) : (
        <Alert variant="danger">
          <Alert.Heading>No, not affordable.</Alert.Heading>
          <p>Your salary: <strong>${salary.toLocaleString()}</strong></p>
          <p>Recommended: ${city.requiredSalary.toLocaleString()}</p>
          <p>You need <strong>${diff.toLocaleString()}</strong> more.</p>
        </Alert>
      )}
    </div>
  );
}

export default AffordabilityResult;
