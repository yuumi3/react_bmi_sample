import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'
import { Paper, Grid, Fab, Container, Box } from '@material-ui/core'

const Bmi: React.FC = () => {
  const [judgeText, setJudgeText] = useState("")
  const [judgeColor, setJudgeColor] = useState("white")

  const { handleSubmit, register, errors } = useForm()

  type FormValues = {
    height: string
    weight: string
  }

  const judgeBMI: SubmitHandler<FormValues> = (data) => {
    console.log(data)

    const heightM = Number(data.height) / 100
    const bmi = Number(data.weight) / (heightM ** 2)

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

  const boxStyle = {width: 100, height: 60, lineHeight : "60px", textAlign: "center" as "center"}
  const numberInputValidation = {
    required: "必須項目です",
    pattern: {value: /^\d+$/, message: "数字のみ入力できます"}
  }
  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit(judgeBMI)}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField id="inputHeight" label="身長" placeholder="170"
            name="height" inputRef={register(numberInputValidation)} />
        </Grid>
        <Grid item xs={6}>
          <TextField id="inputWeight" label="体重" placeholder="60"
            name="weight" inputRef={register(numberInputValidation)} />
        </Grid>
      </Grid>
      {errors.height && <Alert severity="error">身長は{errors.height.message}</Alert>}
      {errors.weight && <Alert severity="error">体重は{errors.weight.message}</Alert>}
      <Box style={{height: 50}}></Box>
      <Grid container spacing={10}>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <Fab  color="primary" type="submit">BMI</Fab>
        </Grid>
        <Grid item xs={6}>
          {judgeText &&
          <Paper style={{...boxStyle, backgroundColor: judgeColor}}>{judgeText}</Paper>}
        </Grid>
      </Grid>
      </form>
    </Container>
  )
}

ReactDOM.render(<Bmi />, document.getElementById('root'))
