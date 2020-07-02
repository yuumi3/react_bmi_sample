import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Bmi: React.FC = () => {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [judgeText, setJudgeText] = useState("")

  const judgeBMI = () => {
    const heightM = Number(height) / 100
    const bmi = Number(weight) / (heightM ** 2)

    if (bmi < 18.5) {
      setJudgeText("やせ")
    } else if (bmi >= 25) {
      setJudgeText("肥満")
    } else {
      setJudgeText("標準")
    }
  }

  const boxStyle = {display: "inline-block", width: 100, height: 60, border: "solid 1px #000",
                   "margin-left" : 20, "line-height" : "60px", "text-align": "center"}

  return (
    <>
      <p>
        <label htmlFor="inputHeight">身長 </label>
        <input type="text" id="inputHeight" value={height} placeholder="170"
          onChange={(e) => setHeight(e.target.value)} />
      </p>
      <p>
        <label htmlFor="inputWeight">体重 </label>
        <input type="text" id="inputWeight" value={weight} placeholder="60"
          onChange={(e) => setWeight(e.target.value)} />
      </p>
      <p>
        <input type="submit" value="BMI" onClick={() => judgeBMI()} />
        {judgeText &&  <span style={boxStyle}>{judgeText}</span>}
      </p>
    </>
  )
}

ReactDOM.render(<Bmi />, document.getElementById('root'))
