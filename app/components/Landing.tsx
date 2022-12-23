import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

function Landing() {
  return (
    <section className="absolute top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-sans tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r  from-orange-300 to-orange-700 bg-clip-text text-transparent font-sans">
            Discover
          </span>
          <span className="block font-sans">New sounds.</span>
          <span className="Driven font-sans">Driven By Values</span>
        </h1>

        <div className="space-x-8">
          <Link href={"/login"}>  <Button title="Login" />
          </Link>
          <a className="link font-sans">View pricing</a>
        </div>
      </div>
    </section>
  );
}

export default Landing;