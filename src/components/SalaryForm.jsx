import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function SalaryForm({ onSubmitSalary, initialSalary = "" }) {
  const [salary, setSalary] = useState(initialSalary);

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = Number(salary);

    if (!num || num <= 0) {
      alert("Enter a valid salary.");
      return;
    }

    onSubmitSalary(num);
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <Form.Group controlId="salaryInput" className="mb-3">
        <Form.Label>Your expected salary</Form.Label>
        <Form.Control
          type="number"
          value={salary}
          placeholder="e.g. 85000"
          onChange={(e) => setSalary(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="primary">Check affordability</Button>
    </Form>
  );
}

export default SalaryForm;
