import React from "react";
import about from "../../public/image.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full">
      <h1 className="text-5xl text-center font-bold mt-10">About Us</h1>
      <div className="max-w-[1260px] mx-auto py-[100px] grid md:grid-cols-2 grid-cols-1 px-10 ">
        <Image
          src={about}
          alt="image"
          width={250}
          height={400}
          className="ml-20"
        />
        <div>
          <h1 className="lg:text-4xl text-3xl">
            Our mission is to establish trust in credentials through
            cutting-edge blockchain technology
          </h1>
          <p className="lg:text-xl my-4 ">
            Our decentralized platform allows organizations, universities, and
            individuals to issue, store, and verify certificates in a
            tamper-proof environment.
          </p>
          <button className="p-3 bg-blue-700 rounded-lg w-[200px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
