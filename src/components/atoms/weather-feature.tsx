import React, { memo } from "react";

type weatherFeatureProps = {
  label: string;
  value: string;
};

const WeatherFeature = ({ label, value }: weatherFeatureProps) => {
  return (
    <div className="flex items-center w-full justify-between">
      <span className="text-jet text-xs">{label}</span>
      <span className="text-jet text-sm md:text-xs ml-2">{value}</span>
    </div>
  );
};

export default memo(WeatherFeature);
