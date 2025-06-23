import React from "react";
import DataProvider from "./context/dataProvider";
import Form from "./compoents/Form";
import "./App.css";

const App = () => {
  return (
    <div>
      {/* checking */}
      <DataProvider>
        <Form />
      </DataProvider>
    </div>
  );
};

export default App;
