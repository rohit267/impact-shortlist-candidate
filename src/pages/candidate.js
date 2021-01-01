import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CandidateDataStore from "../store/store";
import {
  Container,
  Row,
  Col,
  CardTitle,
  Card,
  CardImg,
  CardBody,
  Button,
} from "reactstrap";
import { useHistory } from "react-router";
import ImpactNavbar from "../components/Navbar";

const Candidate = () => {
  let history = useHistory();
  let CandidateData = CandidateDataStore.useContainer();
  let { id } = useParams();
  let candi = {};
  CandidateData.getCandidates().every((candidate) => {
    if (candidate.id == id) {
      candi = candidate;
      return true;
    }
  });

  const handleReject = () => {
    CandidateData.rejectCandidate(id);
    history.push('/');
  };

  const handleShortlist = () => {
    CandidateData.shortlistCandidate(id);

    let c = CandidateData.getCandidates();
    console.log(c);

    history.push('/');
  };


  return (
    <Container fluid={true}>
      <Row>
        <ImpactNavbar allowed={!false} />
      </Row>
      <Row
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <Col md={4}> </Col>
        <Col md={4}>
          <Card>
            <CardImg
              className="candidateImage"
              top
              src={candi.Image}
              alt={candi.name}
            />
            <CardBody>
              <CardTitle tag="h5">{candi.name}</CardTitle>
              <Button
                className="candidateButton"
                color="danger"
                onClick={handleReject}
              >
                Reject
              </Button>
              <Button
                className="candidateButton"
                color="success"
                onClick={handleShortlist}
              >
                Shortlist
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default Candidate;
