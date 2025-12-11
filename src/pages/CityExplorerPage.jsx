import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import PageHeader from "../components/PageHeader.jsx";
import CitySelector from "../components/CitySelector.jsx";
import SalaryForm from "../components/SalaryForm.jsx";
import AffordabilityResult from "../components/AffordabilityResult.jsx";
import InfoBox from "../components/InfoBox.jsx";

function CityExplorerPage() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [salary, setSalary] = useState(null);

  return (
    <div>
      <PageHeader
        title="City Explorer"
        subtitle="Pick a city and enter your expected salary to see a quick affordability estimate."
      />

      <Row>
        <Col md={6} className="mb-4">
          <CitySelector
            selectedCityId={selectedCity?.id || null}
            onSelectCity={setSelectedCity}
          />
        </Col>

        <Col md={6}>
          <SalaryForm onSubmitSalary={setSalary} initialSalary={salary ?? ""} />
          <AffordabilityResult city={selectedCity} salary={salary} />
          <InfoBox title="What does this result mean?" variant="secondary">
            <p className="mb-0">
              The affordability check is based on a static recommended income
              for a single adult in each city. It does not factor in debt,
              savings goals, or unique lifestyle choices, but it can help you
              compare cities quickly.
            </p>
          </InfoBox>
        </Col>
      </Row>
    </div>
  );
}

export default CityExplorerPage;
