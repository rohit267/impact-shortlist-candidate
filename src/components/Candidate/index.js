import React from "react";
import "./index.css";
import { useHistory } from "react-router"

import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from "reactstrap";

function Candidate(props) {

    let history = useHistory()

    const handleClick=()=>{
        history.push(`/${props.data.id}`)
    }

  return (
    <Col md={3} className="candidateCol" onClick={handleClick}>
      <Card>
        <CardImg
          className="candidateImage"
          top
          src={props.data.Image}
          alt={props.data.name}
        />
        <CardBody>
          <CardTitle tag="h5">{props.data.name}</CardTitle>
          {/* <Button className="candidateButton" color="danger">Reject</Button>
          <Button className="candidateButton" color="success">Shortlist</Button> */}
        </CardBody>
      </Card>
    </Col>
  );
}

export default Candidate;
