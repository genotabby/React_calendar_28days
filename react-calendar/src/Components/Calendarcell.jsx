export default function CalendarCell({ days, date, cellClick, selectedDates }) {
  //   console.log(date);
  //   console.log(days);
  //   console.log(selectedDates);
  return (
    <>
      {/* <button onClick={cellClick}> */}
      <div className="cell_day">{days[(date - 1) % 7].name}</div>

      <div className="cell_date">{date}</div>
      {/* </button> */}
    </>
  );
}
