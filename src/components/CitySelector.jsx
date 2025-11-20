import { Card, Row, Col } from "react-bootstrap";
import cities from "../data/cities";

function CitySelector({ selectedCityId, onSelectCity }) {
  return (
    <>
      <h3 className="mb-3">Choose a city</h3>
      <p className="text-muted">Click a city to check affordability.</p>

      <Row xs={1} md={3} className="g-3">
        {cities.map((city) => (
          <Col key={city.id}>
            <Card
              onClick={() => onSelectCity(city)}
              className={
                city.id === selectedCityId
                  ? "border-2 border-primary shadow-sm"
                  : "shadow-sm"
              }
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Text>Region: <strong>{city.region}</strong></Card.Text>
                <Card.Text className="text-muted small">
                  Recommended: ${city.requiredSalary.toLocaleString()}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CitySelector;
