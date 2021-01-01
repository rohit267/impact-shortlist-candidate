import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Homepage = () => {
  useEffect(() => {
    let config = {
      method: "get",
      url:
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Homepage;
