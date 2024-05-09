import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex max-sm:flex-col items-center justify-center bg-teal-500 text-white px-6 py-3.5 rounded font-[sans-serif]">
      <p className="text-base">Limited Time Offer: Get 20% Off!</p>
      <div className="max-sm:mt-4 sm:ml-6 flex gap-4">
        <button
          type="button"
          className="bg-white text-teal-500 font-semibold py-2 px-4 rounded text-sm hover:bg-slate-100"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="bg-white text-teal-500 font-semibold py-2 px-4 rounded text-sm hover:bg-slate-100"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Footer;
