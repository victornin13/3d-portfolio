import React, {useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { About, Contact, Resume, Hero, Navbar, Works, FooterBottom } from "./components";



const App = () => {
 const [loading, setLoading] = useState(true);


 useEffect(() => {
   // Simulate loading time
   const timeoutId = setTimeout(() => {
     setLoading(false);
   }, 5000);


   // Clear timeout on component unmount (cleanup)
   return () => clearTimeout(timeoutId);
 }, []);


 return (
   <BrowserRouter>
     <div className="relative z-0 bg-primary">
       {/* Display loading spinner while components are loading */}
       {loading ? (
         <div className="flex items-center justify-center h-screen">
           <PacmanLoader
             color={"#ffffff"}
             loading={loading}
             size={50} />
         </div>
       ) : (
         // Render components when loading is false
         <>
         <div>
         <Navbar />
         <Hero />
       </div>
       <About />
       <Resume />
       <Works />
       <div className='relative z-0'>
         <Contact />
       </div>
         </>
       )}
       <FooterBottom />
     </div>
   </BrowserRouter>
 );
};


export default App;











