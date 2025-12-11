import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function SalaryForm({ onSubmitSalary, initialSalary = "" }) {
  const [salary, setSalary] = useState(initialSalary);

  const handleSubmit = (event) => {
    event.preventDefault();
    const num = Number(salary);

    if (!Number.isFinite(num) || num <= 0) {
      alert("Please enter a valid positive salary amount.");
      return;
    }

    onSubmitSalary(num);
  };

  return (
    <section aria-label="Salary input form" className="mt-4">
      <h2 className="h4 mb-3">Step 2: Enter your expected salary</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="salary-input" className="mb-3">
          <Form.Label>Expected annual salary (before tax)</Form.Label>
          <Form.Control
            type="number"
            inputMode="decimal"
            min="0"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            aria-describedby="salary-help"
          />
          <Form.Text id="salary-help" className="text-muted">
            Estimate based on your job, experience, or salary websites.
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="primary">
          Check affordability
        </Button>
      </Form>
    </section>
  );
}

export default SalaryForm;
