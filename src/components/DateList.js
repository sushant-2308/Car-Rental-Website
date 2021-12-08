import React from "react";
import { Card } from "react-bootstrap";
import "./DateListStyle.css";
import image1 from "./../Images/bg2.webp";

const DateList = () => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img height="800px" width="600" src={image1} alt="Card image" />
      <Card.ImgOverlay>
        <div className="dateInfo">
          <h1 className="h1-primary">Book Your Ride Now!</h1>
          <div className="dateStyle">
            <form action="/">
              <div className="dates">
                <div className="pickUp">
                  <input
                    type="date"
                    className="myDate"
                    placeholder="Select Date"
                  />
                  <h6>Pickup Date</h6>
                </div>
                <div className="dropOff">
                  <input
                    type="date"
                    className="myDate"
                    placeholder="Select Date"
                  />
                  <h6>Dropoff Date</h6>
                </div>
              </div>
              <div className="btnStyle">
                <button className="findBtn">Find!</button>
              </div>
            </form>
          </div>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default DateList;
