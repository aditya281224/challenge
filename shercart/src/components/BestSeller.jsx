import React from "react";
import { bestseller } from "../DummyData/bestseller";
const BestSeller = () => {
  return (
    
      <section className="mx-auto mt-24 max-w-7xl overflow-hidden rounded-[50px] border border-cyan-400/10 bg-[#07111f] px-5 py-5 shadow-2xl">
      <div className="mb-10 text-center">
        <p className="mb-3 text-4xl uppercase tracking-[4px] text-cyan-400">
          SherCart BestSellers
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 px-6 pt-6 pb-12">
        {bestseller.map((item, idx) => (
          <div className="rounded-3xl border border-cyan-400/10 bg-[#0f172a]/80 p-4 shadow-xl backdrop-blur-xl">
            <img
              src={item.image}
              alt="collection"
              className="h-[260px] w-full rounded-2xl object-cover"
            />

            <h3 className="mt-4 text-lg font-bold">{item.name}</h3>

            <p className="text-sm text-slate-400">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default BestSeller;
