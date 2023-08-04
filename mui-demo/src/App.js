import React, { useState, useEffect } from "react";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Header  from './Component/AppBar/Header';
import Banner from './Component/Benner/Banner';
import AboutUs from './Component/About-Section/About';
import Work from './Component/Work-Section/Work';
import OurServices from './Component/OurServices/Service'
import Client from './Component/Review/Client'
import Service from './Component/Service/Services'
import BlogPost from './Component/News-Blog/Blog'
import Footer from './Component/Footer/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 6000)
    }, [])

  return ( 
  <div>
      {
        loading ? 
        // <div className="Loader">

        //   <ClimbingBoxLoader
        //   size={20}
        //   color={"#123abc"}
        //   loading={loading} />
        // </div>
      
        // <div className="spinner">
          
        // </div>
        <div  className="Loader">

          <img src="/Images/Loader.gif" alt=""/> 
        </div>
      
        :
      <>
        <Header/>
        <Banner/>
        <AboutUs/>
        <Work/>
        <OurServices/>
        <Client/>
        <Service/>
        <BlogPost/>
        <Footer/>
      </>
    }
  </div>
    
   );
}
export default App;