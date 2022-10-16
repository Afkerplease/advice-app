import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import devider from "./images/pattern-divider-mobile.svg";
import deviderDesk from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";

function App() {
  const [advice, setAdvice] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get("https://api.adviceslip.com/advice");

      let data = res.data;
      setAdvice(data.slip);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(advice);

  return (
    <main className=" bg-DarkBlue h-[100vh] grid place-content-center ">
      <div className=" shadow-lg relative container h-[600px] md:h-[400px]  rounded-[10px]    w-[375px] md:w-[700px] bg-DarkGrayishBlue mx-auto p-10 flex flex-col items-center  ">
        <h1 className=" text-2xl text-center font-ktiba tracking-widest uppercase pt-8 text-NeonGreen underline  ">
          advice #{advice.id}
        </h1>
        <p className=" font-ktiba font-[800]  text-[28px] text-LightCyan text-center  mt-20">
          "{advice.advice}"
        </p>

        <picture className="mx-auto mt-8">
          <source media="(min-width:768px )" srcset={deviderDesk} />
          <img src={devider} alt="" />
        </picture>

        <button
          className=" btn mt-20 p-4 bg-NeonGreen absolute top-[82%] md:top-[72.5%]  rounded-full active:shadow-[0_22px_70px_4px_rgba(0, 0, 0, 0.56)] active:shadow-NeonGreen "
          onClick={() => {
            fetchData();
          }}
        >
          <img src={dice} className="" alt="" />
        </button>
      </div>
    </main>
  );
}

export default App;
