import React from "react";
import Image from "next/image";

const SearchMapResult = () => {
  const countryData = [
    {
      id: 1,
      name: "Flexible",
      img: "/images/map-image/flexible.jpg",
    },

    {
      id: 2,
      name: "Africa",
      img: "/images/map-image/africa.webp",
    },

    {
      id: 3,
      name: "Germany",
      img: "/images/map-image/germany.webp",
    },

    {
      id: 4,
      name: "Netherlands",
      img: "/images/map-image/netherlands.webp",
    },

    {
      id: 5,
      name: "South America",
      img: "/images/map-image/south-America.webp",
    },

    {
      id: 6,
      name: "Spain",
      img: "/images/map-image/Spain.webp",
    },
  ];

  return (
    <div className="my-4 ">
      <div className="hidden md:block">
        <h2 className="text-sm font-semibold pb-2 px-3">Search By Region</h2>
      </div>
      <div className="flex md:grid md:grid-cols-3 md:gap-2 md:place-items-center overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 ">
        {countryData.map((country) => (
          <div
            key={country.id}
            className="flex-shrink-0 md:flex-shrink md:flex md:flex-col md:items-center p-2 rounded-lg "
          >
            <Image
              src={country.img}
              alt={country.name}
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-lg border border-gray-300 hover:border-black transition-all duration-200 shadow-md"
            />
            <p className="text-sm  overflow-hidden text-ellipsis whitespace-nowrap mt-2">
              {country.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMapResult;
