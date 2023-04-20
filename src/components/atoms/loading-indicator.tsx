import react, { memo } from "react";
import ReactLoading from "react-loading";

type LoadingIndicatorProps = {
    type?: "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes";
    color?: string;
    height? : any;
    width? : any;
}

const LoadingIndicator = (props: LoadingIndicatorProps) => {
  return (
      <ReactLoading {...props}/>
  );
};

export default memo(LoadingIndicator);