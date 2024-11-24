import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};
const Spinner = ({ loading }) => {
  return (
    <div>
      <ClipLoader
        color="#FF0000"
        loading={loading}
        cssOverride={override}
        size={100}
      />
    </div>
  );
};

export default Spinner;
