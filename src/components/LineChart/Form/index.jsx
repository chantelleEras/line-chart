import React, {useState} from "react";


const LineChartForm = ({setRoute, setFilter, setHeight, colHeight=40, padding=51, routes, data}) => {

  const AddRoutes = () =>{
    const [start, setStart] = useState([]);
    const [end, setEnd] = useState("Choose end");

    const addRoute = (e) => {
      e.preventDefault();
      let currentRoute = [...routes];
      currentRoute.push(
        {start: start, end: end},
      );
      setRoute(currentRoute);
     }

    return(
      <div className="lineChart__form-add" >
        <form onSubmit={addRoute}>
          <div className="form-group">
            <label htmlFor="start">Start</label>
            <select name="start" value={start} onChange={(e) => setStart(e.target.value)}>
              <option selected disabled>Choose start</option>
              {data[0].map((item, key) => (
                <option value={item} key={key}>{item}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="end">End</label>
            <select name="end" value={end} onChange={(e) => setEnd(e.target.value)}>
              <option selected disabled>Choose end</option>
              {data[0].map((item, key) => (
                <option value={item} key={key}>{item}</option>
              ))}
            </select>
          </div>
          <button type="submit">
            Add Route
          </button>  
        </form>
      </div>
    )
  }

  const FilterHours = () =>{
    const handleFilter = (e) => {
      let hoursData = data[1].filter((x,i)=>i<data[1].length - (4 * (6 - e.target.value)));
      setFilter(hoursData);
      setHeight((colHeight * (hoursData.length)) + padding);
    }

    return(
      <div className="lineChart__form-hours">
        <form >
          <label htmlFor="name">Set Hours</label>
          <select name="pets" onChange={e => handleFilter(e)}>
            <option selected disabled>Choose hours</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </form>
      </div>
    )
  }

  return (
    <div className="lineChart__form">
      <AddRoutes />
      <FilterHours/>
    </div>
  );
};

export default LineChartForm;
