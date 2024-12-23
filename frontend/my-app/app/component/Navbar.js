import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-[1260px] w-full mx-auto flex justify-between md:py-8 py-4  ">
      <h1 className="md:text-3xl text-2xl">Certify</h1>
      <ul className="flex gap-4 ">
        <li>Home</li>
        <li>About</li>
        <li>Issue</li>
        <li>Verify</li>
        <li>Download</li>
      </ul>
    </div>
  );
};

export default Navbar;
