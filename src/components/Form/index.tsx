import React from "react";
import Button from "../Button";
import style from'./Form.module.scss';

class Form extends React.Component {
  state = {
    task: "",
    time: "00:00:00"
  }

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('state: ', this.state);
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input 
            type="text"
            name="tarefa"
            value={this.state.task}
            onChange={event => this.setState({ ...this.state, task: event.target.value})}
            id="tarefa"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input 
            type="time"
            step="1"
            name="tempo"
            value={this.state.time}
            onChange={event => this.setState({ ...this.state, time: event.target.value })}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button>
          Adicionar
        </Button>
      </form>
    )
  }
}

export default Form;