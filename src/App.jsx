import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"

function Reto1({ onBack }) {
  return (
    <>
      <button className="back-button" onClick={onBack}>
        Volver
      </button>

      <h1>Reto 1</h1>

      <Navbar />

      <div className="space"></div>

      <Navbar reverse />
    </>
  )
}

function Reto2({ onBack }) {
  const [percentage, setPercentage] = useState(10)

  const handleChange = (event) => {
    let value = Number(event.target.value)

    if (value < 0) value = 0
    if (value > 100) value = 100

    setPercentage(value)
  }

  return (
    <>
      <button className="back-button" onClick={onBack}>
        Volver
      </button>

      <div className="progress-container">
        <h1>Progress bar</h1>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          >
            <span>{percentage}%</span>
          </div>
        </div>

        <div className="progress-input">
          <label>Input Percentage:</label>

          <input
            type="number"
            min="0"
            max="100"
            value={percentage}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  )
}

function Reto3({ onBack }) {
  const [username, setUsername] = useState("")
  const [fullName, setFullName] = useState("")
  const [age, setAge] = useState("")
  const [submittedData, setSubmittedData] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!username || !fullName || !age) {
      alert("Please complete all fields")
      return
    }

    const data = {
      userName: username.toUpperCase(),
      fullName: fullName.toUpperCase(),
      age: Number(age),
    }

    alert(JSON.stringify(data))
    setSubmittedData(data)
  }

  return (
    <>
      <button className="back-button" onClick={onBack}>
        Volver
      </button>

      <div className="reto3-container">
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            placeholder="test"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>FullName:</label>
          <input
            type="text"
            placeholder="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label>Age:</label>
          <input
            type="number"
            placeholder="34"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>

        {submittedData && (
          <div className="result">
            <h3>Request Sent to DB with below request data</h3>

            <ul>
              <li>UserName: {submittedData.userName}</li>
              <li>FullName: {submittedData.fullName}</li>
              <li>Age: {submittedData.age}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

function Reto4({ onBack }) {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return

    const interval = setInterval(() => {
      setSeconds((current) => current + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [running])

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  const resetTimer = () => {
    setRunning(false)
    setSeconds(0)
  }

  return (
    <>
      <button className="back-button" onClick={onBack}>
        Volver
      </button>

      <div className="timer-container">
        <h1>Timer</h1>

        <div className="timer-display">
          {minutes} mins {remainingSeconds} secs
        </div>

        <div className="timer-buttons">
          <button
            className="start-button"
            onClick={() => setRunning(true)}
          >
            Start
          </button>

          <button
            className="stop-button"
            onClick={() => setRunning(false)}
          >
            Stop
          </button>

          <button
            className="reset-button"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

function App() {
  const [reto, setReto] = useState(null)

  if (reto === 1) {
    return <Reto1 onBack={() => setReto(null)} />
  }

  if (reto === 2) {
    return <Reto2 onBack={() => setReto(null)} />
  }

  if (reto === 3) {
    return <Reto3 onBack={() => setReto(null)} />
  }

  if (reto === 4) {
    return <Reto4 onBack={() => setReto(null)} />
  }

  return (
    <div className="menu">
      <h1>Selecciona un reto</h1>

      <div className="menu-buttons">
        <button onClick={() => setReto(1)}>Reto 1</button>
        <button onClick={() => setReto(2)}>Reto 2</button>
        <button onClick={() => setReto(3)}>Reto 3</button>
        <button onClick={() => setReto(4)}>Reto 4</button>
      </div>
    </div>
  )
}

export default App
