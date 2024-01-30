import "./App.css";

import AnimateRoute from "./Components/AnimateRoute/AnimateRoute";
import Footer from "./Sections/Footer/Footer";
import Nav from "./Sections/Nav/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <Router>
      <div>
        <AnimateRoute />
      </div>
    </Router>
  );
}

export default App;
