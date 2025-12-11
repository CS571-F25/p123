import { Row, Col } from "react-bootstrap";
import cities from "../data/cities";
import CityCard from "./CityCard.jsx";

function CitySelector({ selectedCityId, onSelectCity }) {
  return (
    <>
      <h2 className="h4 mb-3">Step 1: Choose a city</h2>
      <p className="text-muted">
        This grid represents a simplified “map” with highlighted cities. Select
        a city you are interested in living in.
      </p>
      <Row xs={1} md={3} className="g-3" aria-label="List of cities to choose from">
        {cities.map((city) => (
          <Col key={city.id}>
            <CityCard
              city={city}
              isSelected={city.id === selectedCityId}
              onClick={() => onSelectCity(city)}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CitySelector;

