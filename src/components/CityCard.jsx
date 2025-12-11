import { Card } from "react-bootstrap";

function CityCard({ city, isSelected, onClick }) {
  return (
    <Card
      onClick={onClick}
      className={
        isSelected ? "border-2 border-primary shadow-sm" : "shadow-sm"
      }
      style={{ cursor: "pointer" }}
    >
      <Card.Body>
        <Card.Title className="fs-6">{city.name}</Card.Title>
        <Card.Text className="mb-1">
          Region: <strong>{city.region}</strong>
        </Card.Text>
        <Card.Text className="text-muted small mb-0">
          Recommended income: ~${city.requiredSalary.toLocaleString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CityCard;
