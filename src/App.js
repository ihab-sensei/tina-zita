import React from "react";
import "./App.css";
// import Table from "./components/pages/inventory/Table";
import Db from "../src/firebase/Db";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from "../src/components/Admin/Admin";
import Navbar from "../src/components/Navbar/Navbar";
import Bills from "../src/components/Bills/Bills";
import Recipes from "../src/components/Recipes/Recipes";
import Orders from "../src/components/Orders/Order";
import Drawer from "../src/components/Drawer/Drawer";

function App() {
  return (
    <Router>
      <div className="App">
        <Drawer />
        <Route path="/admin" component={Admin} />
        <Route path="/inventory" component={Db} />
        <Route path="/bills" component={Bills} />
        <Route path="/orders" component={Orders} />
        <Route path="/recipes" component={Recipes} />
      </div>
    </Router>
  );
}
export default App;
