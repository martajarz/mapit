import React from "react";
import axios from "axios";

function callServer() {
  axios
    .get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/test`, {
      params: {
        table: "sample"
      }
    })
    .then(response => {
      console.log(response.data);
    });
}

const SampleComponent: React.FC = function() {
  return <div>This is a sample component{callServer()}</div>;
};

export default SampleComponent;
