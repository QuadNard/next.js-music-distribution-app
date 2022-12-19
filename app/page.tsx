import type { NextPage } from "next";
import Button from "./components/Button";
import Landing from "./components/Landing";
import Navbar from "./Navbar";


const Home: NextPage = () => {
  return (
  <div className="main">
    <video className=" h-full w-full relative object-cover"  loop autoPlay muted>
         <source src="./video-1.mp4" type="video/mp4"/>
     </video>
    <div className="content">
      <Navbar />  
    </div>
    <main>
      <Landing />
    </main>
  </div>
 )
};

export default Home;