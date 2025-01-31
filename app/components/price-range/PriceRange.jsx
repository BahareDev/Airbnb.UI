"use client";
import React, { useState, useEffect } from "react";
import "./price-range.css";

const PriceRange = () => {
  // component setup
  const initialMinPrice = 0;
  const initialMaxPrice = 1000;

  const [sliderMinValue] = useState(initialMinPrice);
  const [sliderMaxValue] = useState(initialMaxPrice);

  const [minVal, setMinVal] = useState(initialMinPrice);
  const [maxVal, setMaxVal] = useState(initialMaxPrice);
  const [minInput, setMinInput] = useState(initialMinPrice);
  const [maxInput, setMaxInput] = useState(initialMaxPrice);

  const [isDragging, setIsDragging] = useState(false);

  const minGap = 0;

  // handeling slider and input changes
  const slideMin = (e) => {
    const value = parseInt(e.target.value, 10);
    // console.log("min value after event:", value);
    if (value >= sliderMinValue && maxVal - value >= minGap) {
      setMinVal(value);
      setMinInput(value);
    }
  };

  const slideMax = (e) => {
    const value = parseInt(e.target.value, 10);
    // console.log("max value after event:", value);
    if (value <= sliderMaxValue && value - minVal >= minGap) {
      setMaxVal(value);
      setMaxInput(value);
    }
  };

  // update the slider track
  const setSliderTrack = () => {
    const range = document.querySelector(".slider-track");
    console.log(range);

    if (range) {
      const minPercent =
        ((minVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
      const maxPercent =
        ((maxVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;

      range.style.left = `${minPercent}%`;
      range.style.right = `${100 - maxPercent}%`;
    }
  };

  useEffect(() => {
    setSliderTrack();
  }, [minVal, maxVal]);

  // synchronizing inputs with slider
  const handleMinInput = (e) => {
    debugger;
    const value =
      e.target.value === "" ? sliderMinValue : parseInt(e.target.value, 10);
    if (value >= sliderMinValue && value < maxVal - minGap) {
      setMinInput(value);
      setMinVal(value);
    }
  };

  const handleMaxInput = (e) => {
    const value =
      e.target.value === "" ? sliderMaxValue : parseInt(e.target.value);
    if (value <= sliderMaxValue && value > minVal + minGap) {
      setMaxInput(value);
      setMaxVal(value);
    }
  };

  const handleInputKeyDown = (e, type) => {
    if (e.key === "Enter") {
      const value = parseInt(e.target.value, 10);
      if (
        type === "min" &&
        value >= sliderMinValue &&
        value < maxVal - minGap
      ) {
        setMinVal(value);
      } else if (
        type === "max" &&
        value <= sliderMaxValue &&
        value > minVal + minGap
      ) {
        setMaxVal(value);
      }
    }
  };

  // handling user interactions
  const startDrag = () => {
    setIsDragging(true);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div className="p-14 bg-white max-w-[600px] w-full mx-auto">
        <p className="text-[18px] text-left text-[#222222]">price range</p>
        <p className="text-[14px] text-left pt-2 text-[#222222]">
          Nightly prices before fees and taxes
        </p>

        <div className="range-slider my-14">
          <div className="slider-track h-full absolute bg-[#E31C5F] left-0 right-full rounded-md"></div>
          <input
            type="range"
            min={sliderMinValue}
            max={sliderMaxValue}
            value={minVal}
            onChange={slideMin}
            onMouseDown={startDrag}
            onMouseUp={stopDrag}
            onTouchStart={startDrag}
            onTouchEnd={stopDrag}
            className="min-val"
          />
          <input
            type="range"
            min={sliderMinValue}
            max={sliderMaxValue}
            value={maxVal}
            onChange={slideMax}
            onMouseDown={startDrag}
            onMouseUp={stopDrag}
            onTouchStart={startDrag}
            onTouchEnd={stopDrag}
            className="max-val"
          />
          {isDragging && (
            <div className="absolute top-3 text-sm text-[#555] bg-white p-1 border-1 border-black rounded-lg z-10 w-10 right-0">
              {maxVal}
            </div>
          )}
          {isDragging && (
            <div className="absolute top-2 text-sm text-[#555] bg-white p-1 border- border-black rounded-lg z-10 w-10">
              {minVal}
            </div>
          )}
        </div>
        <div className="flex justify-between w-full">
          <div className="w-auto rounded-xl border-1 border-gray-400 bg-white flex flex-col items-center">
            <label className="text-[#6A6A6A] py-2 text-[12px]">Minimum</label>
            <input
              type="number"
              value={minInput}
              onChange={handleMinInput}
              onKeyDown={(e) => handleInputKeyDown(e, "min")}
              min={sliderMinValue}
              max={maxVal - minGap}
            />
          </div>
          <div className="w-auto rounded-xl border-1 border-gray-400 bg-white flex flex-col items-center ">
            <label className="text-[#6A6A6A] py-2 text-[12px]">Maximum</label>
            <input
              type="number"
              value={maxInput}
              onChange={handleMaxInput}
              onKeyDown={(e) => handleInputKeyDown(e, "max")}
              className="float-right"
              min={minVal + minGap}
              max={sliderMaxValue}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default PriceRange;
