import Button from "../Button"
import Clock from "./Clock"
import style from "./Stopwatch.module.scss"
import { timeToSeconds } from "../../common/utils/date"

export default function Stopwatch() {
  console.log('conversao: ', timeToSeconds('01:01:06'));
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>
        Começar!
      </Button>
    </div>
  )
}