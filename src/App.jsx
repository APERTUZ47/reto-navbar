import { useState } from "react"
import Navbar from "./components/Navbar"

function Reto1() {
  return (
    <>
      <button className="back-button" onClick={() => window.location.reload()}>
        Volver
      </button>

      <h1>Reto 1</h1>

      <Navbar />

      <div className="space"></div>

      <Navbar reverse />
    </>
  )
}

function Reto3() {
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
      <button className="back-button" onClick={() => window.location.reload()}>
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

function App() {
  const [reto, setReto] = useState(null)

  if (reto === 1) {
    return <Reto1 />
  }

  if (reto === 3) {
    return <Reto3 />
  }

  return (
    <div className="menu">
      <h1>Selecciona un reto</h1>

      <div className="menu-buttons">
        <button onClick={() => setReto(1)}>
          Reto 1
        </button>

        <button onClick={() => setReto(3)}>
          Reto 3
        </button>
      </div>
    </div>
  )
}

export default App
