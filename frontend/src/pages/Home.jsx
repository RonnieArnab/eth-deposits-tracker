import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-purple-800 via-pink-500 to-orange-500 overflow-hidden">
      {/* Floating Spheres (background decorations) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-purple-300 rounded-full w-96 h-96 top-1/4 left-1/4 blur-3xl opacity-50"></div>
        <div className="absolute bg-blue-300 rounded-full w-72 h-72 bottom-1/3 right-1/4 blur-2xl opacity-50"></div>
        <div className="absolute bg-yellow-300 rounded-full w-64 h-64 top-2/3 left-1/5 blur-3xl opacity-50"></div>
      </div>

      {/* Hero Text */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold md:text-7xl">
          The Internet of Blockchains
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-3xl">
          Cosmos is an ever-expanding ecosystem of interconnected apps and
          services, built for a decentralized future.
        </p>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 w-full flex justify-between p-6 text-white">
        <div className="text-xl font-bold">Cosmos</div>
        <div>
          <a href="#home" className="mx-4">
            Home
          </a>
          <a href="#about" className="mx-4">
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
