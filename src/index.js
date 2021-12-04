import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavbarList';
import Carousel from './components/CarouselSlide';
import Card from './components/CardList';
import Card2 from './components/CardListInfo';
import ServicesCard from './components/ServicesCard';
import Footer from './components/Footer';
import About from './pages/About';
import Cars from './pages/Cars';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Book from './Button/BookForm';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


ReactDOM.render(
  <Router>
    <React.Fragment>
      <Navbar />
        <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <Carousel />
                {/* <Date /> */}
                <hr />
                <Card2 />
                <hr />
                <Card />
                <hr />
                <ServicesCard />
              </>
            )
          }}>
           </Route>
           <Route exact path="/about" render={()=>{
             return(
               <>
                <About />
               </>
             )
           }}>
            </Route>
           <Route exact path="/cars" render={()=>{
             return(
               <>
                <Cars />
               </>
             )
           }}>
            </Route>
            <Route exact path="/cars/book" render={()=>{
             return(
               <>
                <Book />
               </>
             )
           }}>
            </Route>
           <Route exact path="/services" render={()=>{
             return(
               <>
                <Services />
               </>
             )
           }}>
            </Route>
           <Route exact path="/contact" render={()=>{
             return(
               <>
                <Contact />
               </>
             )
           }}>
            </Route>
           
             
         </Switch>
         
      <Footer />
    </React.Fragment>
  </Router>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

