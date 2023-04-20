export type City = {
  name: string;
  lat: number;
  lng: number;
};


export type CityWeather = {
    city: City;
}

export type PageRoute = {
    id: string;
    name: String;
    path: string;
    element:()=> JSX.Element;
    children?: PageRoute[];
}