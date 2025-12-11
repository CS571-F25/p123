import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container>
        <p className="mb-1">
          <strong>Can I Afford To Live Here?</strong>
        </p>
        <p className="mb-0 small">
          Prototype cost-of-living tool for a single adult. Not financial advice.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
