import React from "react";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" element={<HomeScreen />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
