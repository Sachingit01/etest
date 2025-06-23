import React, { createContext, useEffect, useState } from "react";

export const dataContext = createContext();
const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "",
    address: "",
    medicare: null,
    itemNo: null,
    item: "",
    rebatePrice: null,
    gap: null,
    total: null,
    discount: 50,
  });
  const [total, setTotal] = useState();

useEffect(()=>{
    if(data.rebatePrice && data.gap && data.discount){
        console.log("okkkkkkkkk")
    }
},[data.discount, data.gap, data.rebatePrice])

  return (
    <div>
      <dataContext.Provider value={{ data, setData }}>
        {children}
      </dataContext.Provider>
    </div>
  );
};

export default DataProvider;
