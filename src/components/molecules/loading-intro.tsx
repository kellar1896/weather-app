import react from "react";
import ReactLoading from "react-loading";
import weather from "../../assets/weather.webp";
import './loading-intro.css'

const LoadingIntro = () => {
  return (
    <div className="w-screen h-screen bg-blue-200 flex items-center justify-center overflow-hidden">
      <img className="weather-logo" src={weather} alt="weather-logo" />
    </div>
  );
};

export default LoadingIntro;
