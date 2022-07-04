import { useContext } from "react";
import React from "react";
import { Context } from "../ContextProvider";

const VendorAPITest = () => {
  const context = useContext(Context);
  const { vendors } = context;

  return (
    <div>
      {vendors &&
        vendors.map((vendor) => {
          return <h3 key={vendor._id}>{vendor.name}</h3>;
        })}
    </div>
  );
};

export default VendorAPITest;
