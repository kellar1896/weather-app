// import day icons
import d1 from "../assets/icons/day/01d.png";
import d2 from "../assets/icons/day/02d.png";
import d3 from "../assets/icons/day/03d.png";
import d4 from "../assets/icons/day/04d.png";
import d9 from "../assets/icons/day/09d.png";
import d10 from "../assets/icons/day/10d.png";
import d11 from "../assets/icons/day/11d.png";
import d13 from "../assets/icons/day/13d.png";
import d50 from "../assets/icons/day/50d.png";
//import night icons
import n1 from "../assets/icons/night/01n.png";
import n2 from "../assets/icons/night/02n.png";
import n3 from "../assets/icons/night/03n.png";
import n4 from "../assets/icons/night/04n.png";
import n9 from "../assets/icons/night/09n.png";
import n10 from "../assets/icons/night/10n.png";
import n11 from "../assets/icons/night/11n.png";
import n13 from "../assets/icons/night/13n.png";
import n50 from "../assets/icons/night/50n.png";

const iconsWeather = {
  day: [
    {
      id: "01d",
      icon: d1,
    },
    {
      id: "02d",
      icon: d2,
    },
    {
      id: "03d",
      icon: d3,
    },
    {
      id: "04d",
      icon: d4,
    },
    {
      id: "09d",
      icon: d9,
    },
    {
      id: "10d",
      icon: d10,
    },
    {
      id: "11d",
      icon: d11,
    },
    {
      id: "13d",
      icon: d13,
    },
    {
      id: "50d",
      icon: d50,
    },
  ],
  night: [
    {
      id: "01n",
      icon: n1,
    },
    {
      id: "02n",
      icon: n2,
    },
    {
      id: "03n",
      icon: n3,
    },
    {
      id: "04n",
      icon: n4,
    },
    {
      id: "09n",
      icon: n9,
    },
    {
      id: "10n",
      icon: n10,
    },
    {
      id: "11n",
      icon: n11,
    },
    {
      id: "13n",
      icon: n13,
    },
    {
      id: "50n",
      icon: n50,
    },
  ],
};

export const getIconImage = (iconId: string) => {
    const iconDay = iconsWeather.day.find((icon) => icon.id === iconId);
    if (iconDay) {
        return iconDay.icon;
    }
    const iconNight = iconsWeather.night.find((icon) => icon.id === iconId);
    if (iconNight) {
        return iconNight.icon;
    }
    return iconsWeather.day[0].icon;
}
