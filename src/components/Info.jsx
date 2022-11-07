export const Info = ({ data }) => {
  return (
    <div className="flex justify-center items-center gap-12">
      <div className="">
        <p className="text-xl font-bold">
          {data.name}, {data.sys.country}
        </p>
        <p className="text-2xl text-gray-600">{Math.floor(data.main.temp)}°C</p>
        <p className="text-gray-600 text-lg">
          Umidade: {Math.floor(data.main.humidity)}%
        </p>
        <p className="text-gray-600 text-lg">Vento: {data.wind.speed} km/h</p>
      </div>
      <div className="shadow-2xl rounded-lg">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
    </div>
  );
};
