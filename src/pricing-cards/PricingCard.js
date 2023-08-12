import React from "react";
import Card from "./Card";

const PricingCard = () => {
  const lists = [
    {
      backgroundcolor: "bg-slate-700",
      title: "Basic",
      quantity: "100GB",
      price: "$1.99/Month",
    },
    {
      backgroundcolor: "bg-violet-800",
      title: "Standard",
      quantity: "200GB",
      price: "$3.99/Month",
    },
    {
      backgroundcolor: "bg-slate-700",
      title: "Premium",
      quantity: "500GB",
      price: "$5.99/Month",
    },
  ];
  return (
    //   GlobalContainer
    <div className='flex items-center justify-center min-h-screen bg-slate-800'>
      {/* Inner Container */}
      <div className='flex flex-col space-y-6 my-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0'>
        {lists.map((list) => (
          <Card list={list} />
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
