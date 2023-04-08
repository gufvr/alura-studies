import Button from "../Button"
import Clock from "./Clock"
import style from "./Stopwatch.module.scss"
import { timeToSeconds } from "../../common/utils/time"
import ITask from "../../types/task"
import { useEffect, useState } from "react"

interface Props {
  selected: ITask | undefined
}

export default function Stopwatch({ selected }: 
Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.time) {
      setTime(timeToSeconds(selected.time))
    }
  }, [selected])
  
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      Tempo: {time}
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>
        Começar!
      </Button>
    </div>
  )
}