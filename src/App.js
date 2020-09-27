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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/inventory" component={Db} />
        <Route exact path="/bills" component={Bills} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/recipes" component={Recipes} />
      </div>
    </Router>
  );
}
export default App;
