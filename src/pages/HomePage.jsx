import { Row, Col, Image } from "react-bootstrap";
import PageHeader from "../components/PageHeader.jsx";
import InfoBox from "../components/InfoBox.jsx";
import heroIllustration from "../assets/react.svg"; // Vite template asset

function HomePage() {
  return (
    <div>
      <PageHeader
        title="Can I Afford To Live Here?"
        subtitle="Explore U.S. cities, enter your expected salary, and get a quick sense of whether you could afford to live there as a single adult."
      />

      <Row className="align-items-center">
        <Col md={6} className="mb-3">
          <p>
            This tool combines a simplified cost-of-living estimate with an
            interactive interface. Choose a city you are curious about, enter
            the salary you expect to earn, and we will compare it to a
            recommended income for that location.
          </p>
          <p>
            The goal is not to give perfect financial advice, but to help you
            build intuition about how far your income might stretch in different
            places.
          </p>

          <InfoBox title="How to use this site">
            <ol className="mb-0">
              <li>Select a city from the City Explorer.</li>
              <li>Enter your expected annual salary.</li>
              <li>Review the affordability result and income gap (if any).</li>
            </ol>
          </InfoBox>
        </Col>

        <Col md={6} className="text-center">
          <Image
            src={heroIllustration}
            alt="Stylized illustration representing a city skyline and planning tools."
            fluid
            className="mb-3"
          />
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
