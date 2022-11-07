import { useState } from "react";

import { Info } from "./components/Info";
import { Input } from "./components/Input";

import Icon from "./assets/icon.png";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  const HandlePrevisao = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=4a2e9cb300bb5c0e27f0dff909811c87`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.cod && data.cod === "404") {
          return alert("Local não encontrado!");
        }

        setData(data);
      });
    setInput("");
  };

  return (
    <div className="text-center">
      <div className="flex justify-center items-center flex-col m-auto mt-14 w-[350px] md:w-[500px] h-[350px] bg-gray-200 p-6  rounded-lg">
        <div className="flex flex-col items-center gap-2">
          <img className="w-12 h-12" src={Icon} alt="" />
          <span className="text-2xl text-gray-700 mb-10">
            Previsão do tempo
          </span>{" "}
        </div>

        <Input
          input={input}
          HandlePrevisao={HandlePrevisao}
          setInput={setInput}
        />

        {data ? <Info data={data} /> : ""}
      </div>
    </div>
  );
}

export default App;
