import Image from "next/image";
import React from "react";
import t from "@/assets/SettingImage/t.jpg";

const SettingParagraph = () => {
  return (
    <div className="rounded-xl border border-grey-400 p-2 mt-2">
      <div className="flex justify-between mb-4">
        <div className="flex gap-4">
          <div>
            <Image src={t} alt="t"></Image>
          </div>
          <div>
            <h3 className="text-[#E55527]">Settings</h3>
          </div>
        </div>
        <div>
          <Image src={t} alt="t"></Image>
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <p>Pragraph font size</p>
        <p>19</p>
      </div>
      <div className="mb-4">
        <input
          type="range"
          min={0}
          max="100"
          value="30"
          className="range range-error range-xs h-2"
        />
      </div>
      <div className="mb-4">
        <h3>Choose Vitamin type</h3>
      </div>
      <div className="mb-4">
        <select className="select w-full max-w-xs border bg-[#EEF0F2]">
          <option>All Vitamin</option>
        </select>
      </div>
      <div className="flex justify-between mb-4">
        <h3>Turn Off Subtitles</h3>
        <input type="checkbox" className="toggle" disabled checked />
      </div>
    </div>
  );
};

export default SettingParagraph;
