import Calendar from "./Calendar"
import { calendarDays } from "./data/days"

function App() {
  return (
    <>
      <div className="wrapper">
        <h1>Adventi kalendárium</h1>
        <Calendar data={calendarDays} />
      </div>
    </>
  )
}

export default App
