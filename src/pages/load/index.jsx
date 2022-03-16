import React from "react";
import LoadCustomerCards from "../../components/Load/LoadCustomerCard";
import LoadQRScanner from "../../components/Load/LoadQRScanner";
const Load = () => {
  return (
    <div className="flex mt-[22px]">
      <LoadCustomerCards />
      <LoadQRScanner />
    </div>
  );
};

export default Load;
