import React, {useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";

function App() {
  const [value, onChange] = useState(new Date());
  const tileInside = ({activeStartDate, date, view}) => {
    console.log(activeStartDate, "activeStartDate");
    console.log(date, "date");
    console.log(view, "view");
  };

  return (
    <div className="App">
      <Calendar
        onChange={onChange}
        value={value}
        minDate={new Date("December 01 2020")}
        // prevLabel={null}
        prev2Label={null}
        tileContent={tileInside}
      />
      {console.log(value)}
    </div>
  );
}

export default App;
