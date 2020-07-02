import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import TextField from '@material-ui/core/TextField'
import { Paper, Grid, Fab, Container, Box } from '@material-ui/core'

const Bmi: React.FC = () => {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [judgeText, setJudgeText] = useState("")
  const [judgeColor, setJudgeColor] = useState("white")

  const judgeBMI = () => {
    const heightM = Number(height) / 100
    const bmi = Number(weight) / (heightM ** 2)

    if (bmi < 18.5) {
      setJudgeText("やせ")
      setJudgeColor("yellow")
    } else if (bmi >= 25) {
      setJudgeText("肥満")
      setJudgeColor("red")
    } else {
      setJudgeText("標準")
      setJudgeColor("lightgreen")
    }
  }

  const boxStyle = {width: 100, height: 60, "line-height" : "60px", "text-align": "center"}

  return (
    <Container maxWidth="xs">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField id="inputHeight" label="身長"
            value={height} placeholder="170"
            onChange={(e) => setHeight(e.target.value)} />
        </Grid>
        <Grid item xs={6}>
          <TextField id="inputWeight" label="体重"
            value={weight} placeholder="60"
            onChange={(e) => setWeight(e.target.value)} />
        </Grid>
      </Grid>
      <Box style={{height: 50}}></Box>
      <Grid container spacing={10}>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <Fab  color="primary" onClick={() => judgeBMI()}>BMI</Fab>
        </Grid>
        <Grid item xs={6}>
          {judgeText &&
          <Paper style={{...boxStyle, backgroundColor: judgeColor}}>{judgeText}</Paper>}
        </Grid>
      </Grid>
    </Container>
  )
}

ReactDOM.render(<Bmi />, document.getElementById('root'))
