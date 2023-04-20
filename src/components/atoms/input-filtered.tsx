import React, { memo } from "react";
import { City } from "../../app/types";

type InputFilteredProps = {
  placeholder?: string;
  options : City[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void
};

const InputFiltered = ({ options, placeholder, onChange,  }: InputFilteredProps) => {

  return (
    <div className="my-2">
      <input
        list="cities"
        className="w-full h-10 rounded-xl p-2 text-xs"
        placeholder={placeholder}
        onChange={onChange}
      />
      <datalist id="cities" className="w-full h-10 rounded-xl p-2">
        {options.map((option)=>
          <option value={option.name} key={`option_${option.city_code}`}>{option.country_code}</option>
        )}
      </datalist>
    </div>
  );
};

export default memo(InputFiltered);
