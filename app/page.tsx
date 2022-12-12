import type { NextPage } from "next";
import Header from "./components/Header";
import MyVideo from "./components/Myvideo";


const Home: NextPage = () => {
 return (
  <div className="">
    <Header />
    <main>
      <MyVideo />
    </main>
  </div>
 )
};

export default Home;