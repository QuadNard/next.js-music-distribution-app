import type { NextPage } from "next";
import {FC } from 'react'
import Head from 'next/head'
import Banner from "../components/Banner";
import Landing from "../components/Landing";


interface pageProps{}

const Home: FC<pageProps> = ({}) => {
  return (
  <div className="relative h-screen lg:h-[140vh]">
    <Head>
         <title> Home Beatsbymaad</title>
         <link rel="icon" href="/favicon.ico"></link>
    </Head>
    <Banner />
   <main>
    {/*Banner */}
    <section>
      <Landing />
    </section>
   </main>
   
  </div>
 )
};

export default Home;