import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavbarList";
import Carousel from "./components/CarouselSlide";
import Card from "./components/CardList";
import Card2 from "./components/CardListInfo";
import ServicesCard from "./components/ServicesCard";
import Footer from "./components/Footer";
import About from "./pages/About";
import Cars from "./pages/Cars";
import SelectDate from "./pages/SelectDate";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Book from "./Button/BookForm";
import Cookies from "js-cookie";
import Invoice from "./Invoice";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AuthorizedStatus = () => {
  return Cookies.get("authtoken") === "true" ? true : false;
};
ReactDOM.render(
  <Router>
    <React.Fragment>
      <Container fluid>
        {window.location.pathname !== "/invoice" && (
          <Navbar isAuth={AuthorizedStatus()} />
        )}
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Carousel />

                  <Card2 />

                  <Card />

                  <ServicesCard />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/about"
            render={() => {
              return (
                <>
                  <About />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/cars"
            render={() => {
              return (
                <>
                  {AuthorizedStatus() ? (
                    <SelectDate />
                  ) : (
                    (window.location.href = "http://localhost:3000/login")
                  )}
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/cars/carsList"
            render={() => {
              return (
                <>
                  <Cars />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/cars/carsList/book"
            render={() => {
              return (
                <>
                  <Book />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/services"
            render={() => {
              return (
                <>
                  <Services />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/contact"
            render={() => {
              return (
                <>
                  <Contact />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/invoice"
            render={() => {
              return (
                <>
                  <Invoice />
                </>
              );
            }}
          ></Route>
        </Switch>

        {window.location.pathname !== "/invoice" && <Footer />}
      </Container>
    </React.Fragment>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
