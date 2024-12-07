import { useState } from 'react'

const Header = ( {text} ) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ( {text, handleClick} ) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const TableRow = ( {text, value} ) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? 0 : (good / all) * 100

  return (
    <div>
      <Header text="give feedback"/>
      <Button text="good" handleClick={() => setGood(good + 1)}/>
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" handleClick={() => setBad(bad + 1)}/>
      <Header text="statistics"/>
      <table>
        <tbody>
          <TableRow text="good" value={good}/>
          <TableRow text="neutral" value={neutral}/>
          <TableRow text="bad" value={bad}/>
          <TableRow text="all" value={all}/>
          <TableRow text="average" value={average.toFixed(1)}/>
          <TableRow text="positive" value={`${positive.toFixed(1)} %`}/>
        </tbody>
      </table>
    </div>
  )
}

export default App