import React from "react";
import './styles/main.scss';
import LineChart from "./components/LineChart";

function App() {
  return (
    <div className="container">
      <h2>TRAIN ROUTES - Stuttgart</h2>
      <LineChart />
    </div>
  );
}

export default App;
