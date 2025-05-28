"use client";

import React, { useState } from "react";
import { HisoblashCard } from "../Hisoblash-Card/hisoblash-card";

export default function HisoblashComp({ products }) {
  const [selectedPowerSystem, setSelectedPowerSystem] = useState("on-grid");
console.log(products);
  const filteredProducts = products.filter(
    (item) => item.power_system?.toLowerCase() === selectedPowerSystem
  );

  return (
    <div className="container lg:w-[1200px] mx-auto">
      <div className="flex items-center justify-center gap-[72px] mt-[35px] mb-[57px]">
        <div>
          <div>
            <div className="flex gap-[169px] items-center mb-[20px]">
              <h4 className="text-[14px] font-[400]  text-black">
                Stansiya turini tanlang
              </h4>
              <p className="text-black font-[400] text-[14px]">
                <span className="text-yellow">kvt</span> ni tanlang
              </p>
            </div>
          </div>
          <div className="flex  items-center gap-[35px] mb-6">
            <ul className="flex gap-4  items-center">
              {["on-grid", "off-grid", "hybrid"].map((type) => (
                <li key={type}>
                  <label className="flex items-center gap-2 cursor-pointer text-black">
                    <input
                      type="radio"
                      name="choice"
                      value={type}
                      checked={selectedPowerSystem === type}
                      onChange={() => setSelectedPowerSystem(type)}
                      className="sr-only peer"
                    />
                    <div className="w-4 h-4 rounded-full border border-gray-400 peer-checked:bg-yellow peer-checked:border-yellow transition-all" />
                    <span className="capitalize">{type}</span>
                  </label>
                </li>
              ))}
            </ul>
            <div>
              <select className="border border-yellow w-[142px] rounded-[12px] py-[7px] pr-[7px] text-right text-black outline-none">
                <option value="3 kvt">3 kvt</option>
                <option value="3 kvt">4 kvt</option>
                <option value="3 kvt">5 kvt</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-yellow rounded-[12px] py-[17px] pl-[37px] w-[667px]">
          <h3 className="text-[14px] font-[400] mb-[20px]">
            “ Hurmatli mijoz siz xarid qilmasdan turib o’z ehtiyojingizga qarab
            mahsulotlarni <br /> tanlashingiz mumkin, biz sizga hisoblab
            beramiz”.
          </h3>

          <div>
            <p className="font-[400] text-[14px] mb-[11px]">
              1 - Stansiya turini tanlang.
            </p>

            <p className="font-[400] text-[14px] mb-[11px]">
              2 - Ehtiyojingizga qarab kvt ni belgilang.
            </p>

            <p className="font-[400] text-[14px] mb-[11px]">
              3 - Istalgan mahsulotni tanlang.
            </p>

            <p className="font-[400] text-[14px] mb-[11px]">
              4 - Hisoblash tugmasini bosing.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black mt-[135px]">
        {filteredProducts.map((item) => (
          <HisoblashCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
