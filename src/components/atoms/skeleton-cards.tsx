import React, { memo } from "react";

const SkeletonCards = () => {
  return (
    <div className="flex flex-col items-center space-y-5 md:flex-row md:justify-start md:space-x-4">
      <div className="bg-ivory rounded-lg p-2 w-9/12 md:w-3/12 shadow-xl shadow-black/40">
        <p className="text-jet text-left text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          facilis consequuntur impedit vel quibusdam enim ad at quisquam iste,
          facere nam inventore recusandae fugit provident, molestias, sapiente
          odit! Voluptatibus, dicta?
        </p>
      </div>
      <div className="bg-ivory rounded-lg p-2 w-9/12 md:w-3/12 shadow-xl shadow-black/40">
        <p className="text-jet text-left text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
          blanditiis dicta? Non eveniet voluptates dolorem nihil incidunt magnam
          ipsam dolore repellat repellendus tenetur accusantium architecto
          reprehenderit cum, facilis sed velit!
        </p>
      </div>
      <div className="bg-ivory rounded-lg p-2 w-9/12 md:w-3/12 shadow-xl shadow-black/40">
        <p className="text-jet text-left text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          facilis consequuntur impedit vel quibusdam enim ad at quisquam iste,
          facere nam inventore recusandae fugit provident, molestias, sapiente
          odit! Voluptatibus, dicta?
        </p>
      </div>
    </div>
  );
};

export default memo(SkeletonCards);
