import type { NextPage } from "next";
import Navbar from "./components/Navbar";


const Home: NextPage = () => {
 return (
  <div className="main">
    <video className=" h-full w-full relative object-cover"  loop autoPlay muted>
         <source src="./video-1.mp4" type="video/mp4"/>
     </video>
    <div className="content">
      <Navbar />
    </div>
   
  </div>
 )
};

export default Home;