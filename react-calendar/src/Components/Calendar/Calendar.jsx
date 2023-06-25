import "./Calendar.css";
import CalendarCell from "../Calendarcell";
import { useState } from "react";

export default function Calendar() {
  const days = [
    {
      name: "Sunday",
    },
    {
      name: "Monday",
    },
    {
      name: "Tuesday",
    },
    {
      name: "Wednesday",
    },
    {
      name: "Thursday",
    },
    {
      name: "Friday",
    },
    {
      name: "Saturday",
    },
  ];

  // The following creates an array of numbers from [1..28]
  const dates = Array.from({ length: 28 }, (x, i) => i + 1);

  const colorSelectors = ["Holiday", "Work", "Errands", "Sick"];

  const [selectorColorCat, setSelectorColorCat] = useState("");
  const [selectedDate, setSelectedDate] = useState([{ date: 0, cat: "" }]);

  const handleColorSelector = (selectors) => {
    setSelectorColorCat(selectors);
    console.log(selectors);
  };

  const handleCellClick = (Calendardate) => {
    // console.log("oncellCat", selectorColorCat);
    // console.log("oncellselected", selectedDate);
    // console.log("oncell", Calendardate);
    const linkedDate = {
      date: Calendardate,
      cat: selectorColorCat,
    };
    console.log("oncell", linkedDate);
    setSelectedDate([...selectedDate, linkedDate]);
  };

  const matchClassnameDates = (date) => {
    const found = selectedDate.findLast((element) => element.date == date);
    console.log("found", found);
    if (found) {
      if (found.cat === "") {
        return "calendarCell";
      }
      return `${found.cat}_cell`;
    }
    return "calendarCell";
  };

  const handleReset = () => {
    setSelectedDate([{ date: 0, cat: "" }]);
  };

  return (
    <div className="App">
      <h1>React Calendar</h1>
      <button onClick={handleReset}>Reset</button>
      <div className="selectors">
        {colorSelectors.map((selectors) => (
          <button
            key={selectors}
            className={
              selectorColorCat === selectors
                ? `${selectors}`
                : `${selectors}_notSelected`
            }
            onClick={() => handleColorSelector(selectors)}
          >
            {selectors}
          </button>
        ))}
      </div>
      <div className="calendar">
        {dates.map((date) => (
          <span
            className={matchClassnameDates(date)}
            key={date}
            onClick={() => handleCellClick(date)}
          >
            <CalendarCell
              days={days}
              date={date}
              selectedDates={selectedDate}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
