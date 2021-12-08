import React from "react";
import CarDetails from "./CarDetails";

const Cars = (CarArray) => {
  return (
    <>
      <h1>
        <b>
          <i>
            <u>Book One of your Favourite Car.</u>
          </i>
        </b>
      </h1>

      <CarDetails CarArray={CarArray} />
    </>
  );
};

export default Cars;
