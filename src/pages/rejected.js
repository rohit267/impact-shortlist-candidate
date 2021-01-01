import React,{useEffect,useState} from "react";
import { Container, Row } from "reactstrap";
import Candidate from "../components/Candidate/index";
import Navbar from '../components/Navbar/index';

const Rejected = (props) => {
  
  let [candidateShowing, setCandidateShowing] = useState([]);

  useEffect(()=>{
      let data=props.store.getCandidates();
      console.log(props.store);
      let d2=[];
      data.forEach((d)=>{
          console.log(d);
          if(d.rejected){
              d2.push(d);
          }
      })
      setCandidateShowing(d2);
      console.log(d2);
    // console.log(props);
  },[])

  return (

    <Container fluid={true}>
      <Row>
        <Navbar allowed={!false} />
      </Row>
      <Row className="canidateRow">
        {candidateShowing.map((candidate, i) => {
          return <Candidate key={i} data={candidate} />;
        })}
      </Row>
    </Container>
  );
};

export default Rejected;
