import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import CitySelector from "../components/CitySelector";
import SalaryForm from "../components/SalaryForm";
import AffordabilityResult from "../components/AffordabilityResult";

function CityExplorerPage() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [salary, setSalary] = useState(null);

  return (
    <>
      <h2>City Explorer</h2>
      <Row>
        <Col md={6}>
          <CitySelector
            selectedCityId={selectedCity?.id}
            onSelectCity={setSelectedCity}
          />
        </Col>

        <Col md={6}>
          <SalaryForm onSubmitSalary={setSalary} initialSalary={salary} />
          <AffordabilityResult city={selectedCity} salary={salary} />
        </Col>
      </Row>
    </>
  );
}

export default CityExplorerPage;
