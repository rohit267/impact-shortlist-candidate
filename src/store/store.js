import { useState } from "react";
import { createContainer } from "unstated-next";


function useCustomHook(initialState = []) {
  const [candidateData, setCandidateData] = useState(initialState);
  let shortlistCandidate = (id) => {
    let candidates = candidateData;
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i].id == id) {
        candidates[i].shortlisted = true;
        candidates[i].rejected = false;
      } 
      
    }

    setCandidateData(candidates);
  };

  let rejectCandidate = (id) => {
    let candidates = candidateData;
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i].id == id) {
        candidates[i].rejected = true;
        candidates[i].shortlisted = false;
      }
      
    }
    
    setCandidateData(candidates);
    
  };

  let getCandidates=()=>{
    let c=candidateData;
      return c;
  }

  let isSet=()=>{
    return candidateData.length!=0;
  }

  return { getCandidates, shortlistCandidate, rejectCandidate, setCandidateData, isSet, candidateData };
}

let CandidateDataStore = createContainer(useCustomHook);

export default CandidateDataStore;