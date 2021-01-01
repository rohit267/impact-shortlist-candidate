import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Candidate from "../components/Candidate/index";
import { Container, Row } from "reactstrap";

const Homepage = (props) => {
  let [candidateShowing, setCandidateShowing] = useState([]);

  const getSearchValue = (value) => {
    value = value.trim();
    let candToShow = [];
    props.store.getCandidates().forEach((candiate) => {
      if (candiate.name.toLowerCase().includes(value)) {
        candToShow.push(candiate);
      }
    });
    setCandidateShowing(candToShow);
  };

  useEffect(() => {
    if (!props.store.isSet()) {
      fetch(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      )
        .then((response) => response.json())
        .then((data) => {
          props.store.setCandidateData(data);
          let tempData=[];
          data.forEach((d)=>{
            d.shortlisted=false;
            d.rejected=false;
            tempData.push(d);
          })
          setCandidateShowing(tempData);
        })
        .catch((e) => {
          console.log(e, "Failed to get candiate data from API");
        });
    }
    else{
      setCandidateShowing(props.store.getCandidates());
    }
  }, []);
  return (
    <Container fluid={true}>
      <Row>
        <Navbar allowed={!true} search={getSearchValue} />
      </Row>
      <Row className="canidateRow">
        {candidateShowing.map((candidate, i) => {
          return <Candidate key={i} data={candidate} />;
        })}
      </Row>
    </Container>
  );
};

export default Homepage;
