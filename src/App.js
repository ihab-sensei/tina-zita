import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from "../src/components/Admin/Admin";
import Recipes from "../src/components/Recipes/Recipes";
import Orders from "../src/components/Orders/Order";
import Drawer from "../src/components/Drawer/Drawer";
import Footer from "../src/components/Footer/Footer";
import Inventory from "../src/components/Inventory/Inventory";
function App() {
  return (
    <Router>
      <div className="App">
        <Drawer />
        <Route exact path="/" component={Admin} />
        <Route path="/admin" component={Admin} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/orders" component={Orders} />
        <Route path="/recipes" component={Recipes} />
      </div>
      <Footer />
    </Router>
  );
}
export default App;
