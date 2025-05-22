import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full text-red-950 h-screen p-10 flex items-center justify-end relative z-0">
      <img
        className="absolute z-[-1] left-0 top-0 w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="pr-10">
        <h1 className="text-7xl mb-1.5 ">Learn, Cook</h1>
        <h1 className="text-7xl mb-1.5 ">& Eat Your Food.</h1>
        <p className="w-[70vh] mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          earum aut minima, sapiente inventore omnis facilis eveniet quibusdam!
          Temporibus, culpa!
        </p>
        <Link to={"/recipes"}>
          <button className="text-xs text-white px-8 py-3 rounded-full mt-4 uppercase font-bold tracking-wider bg-red-950 hover:bg-red-900 duration-75">
            Explore recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
