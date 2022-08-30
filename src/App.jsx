import { useEffect, useState } from "react";
import background from "./assets/background.jpg";
import { Input } from "./components/Input";

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
        <h2 className="text-2xl text-gray-700 mb-10">Previsão do tempo</h2>
        <Input
          input={input}
          HandlePrevisao={HandlePrevisao}
          setInput={setInput}
        />

        {data ? (
          <div className="flex justify-center items-center gap-12">
            <div className="">
              <p className="text-xl font-bold">
                {data.name}, {data.sys.country}
              </p>
              <p className="text-2xl text-gray-600">
                {Math.floor(data.main.temp)}°C
              </p>
              <p className="text-gray-600 text-lg">
                Umidade: {Math.floor(data.main.humidity)}%
              </p>
              <p className="text-gray-600 text-lg">
                Vento: {data.wind.speed} km/h
              </p>
            </div>
            <div className="shadow-2xl rounded-lg">
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
