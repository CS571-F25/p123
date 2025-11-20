import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Can I Afford To Live Here?</h1>
      <p>Select a U.S. city, enter your expected salary, and see if you could afford to live there.</p>
      <Button as={Link} to="/explore" variant="primary">
        Start Exploring
      </Button>
    </div>
  );
}

export default HomePage;
