import { Alert } from "react-bootstrap";

function InfoBox({ title, children, variant = "info" }) {
  return (
    <Alert variant={variant} className="mt-3">
      {title && <Alert.Heading className="h5">{title}</Alert.Heading>}
      <div>{children}</div>
    </Alert>
  );
}

export default InfoBox;
