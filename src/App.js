import React from "react";
import "./App.css";
// import Table from "./components/pages/inventory/Table";
import Db from "../src/firebase/Db";

function App() {
  return (
    <div className="App">
      <h1>Tina</h1>
      <Db></Db>
    </div>
  );
}
export default App;
