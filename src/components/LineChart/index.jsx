import React, {useState} from "react";
import LineChartForm from './Form';
import LineChartBody from './Chart';

const dataLabels = [
  ["Aalen", "Goldshofe", "Westhausen", "Lauchheim" , "Aufhausen", "Bopfingen" , "Trochtelfingen", "Pflaumloch", "Nordlingen" , "Mottingen", "Hoppingen", "Harburg", "Wornitzstein", "Donauworth" ],
  ["1:00", "1:15", "1:30", "1:45", "2:00", "2:15", "2:30", "2:45", "3:00", "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45","5:00", "5:15", "5:30", "5:45","6:00", "6:15", "6:30", "6:45", "7:00"]
]

const routes = [
  {start: "Aalen", end: "Bopfingen"},
  {start: "Aufhausen", end: "Mottingen"},
  {start: "Westhausen", end: "Pflaumloch"},
  {start: "Trochtelfingen", end: "Nordlingen"},
  {start: "Nordlingen", end: "Harburg"},
  {start: "Bopfingen", end: "Westhausen"},
  {start: "Pflaumloch", end: "Goldshofe"},
  {start: "Mottingen", end: "Goldshofe"},
]

var colors = ['#FF6633', '#FFB399', '#FF33FF', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#B34D4D', '#434b54',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

const LineChart = () => {
  const padding = 51;
  const colHeight = 40;
  const colWidth = 80;
  const wrapperWidth = colWidth * dataLabels[0].length + padding;

  const [route, setRoute] = useState([...routes]);
  const [filterData, setFilterData] = useState([...dataLabels[1]]);
  const [wrapperHeight, setWrapperHeight] = useState((colHeight * filterData.length) + padding);


  return (
    <div className="lineChart">
      <LineChartForm setRoute={setRoute} setFilter={setFilterData} setHeight={setWrapperHeight} data={dataLabels} routes={route} />
      <LineChartBody data={dataLabels} route={route} filterData={filterData} height={wrapperHeight} width={wrapperWidth} colors={[...colors]}/>
    </div>

  );
};

export default LineChart;
