import React, { Component } from 'react'
import './App.css'

const tasks = [
    {
        id: 1,
        title: "Learn Spanish",
        description: "Practice Spanish for at least 20min",
        completed: false
    },
    {
        id: 2,
        title: "Kung Fu",
        description: "Fight in the Kumate Tournament",
        completed: false
    },
    {
        id: 3,
        title: "Gangnam Style",
        description: "Dance in Korea",
        completed: false
    },
    {
        id: 4,
        title: "Safari",
        description: "Go to Africa",
        completed: false
    }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        viewCompleted: false,
        taskList: tasks
    }
  }

  displayCompleted = status => {
    if (status) {
        return this.setstatus({ viewCompleted: true })
    }
    return this.setstatus({ viewCompleted: false })
  }

  renderTabList = () => {
    return (
        <div classNAme="my-5 tab-list">
            <span
                onClick={() => this.displayCompleted(true)}
                className={this.state.viewCompleted ? "active" : ""}>
                    Completed
                </span>
            <span
            onClick={() => this.displayCompleted(false)}
            className={this.state.viewCompleted ? "" : "active"}>
                Incomplete
            </span>
        </div>
    )
  }

  //Render list items complete/incomplete
  renderItems = () => {
    const { viewCompleted } = this.state
    const newItems = this.state.taskList.filter(
        item => item.completed === viewCompleted
    )
    return newItems.map(item => (
        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span className={"task-title mr-2" `${this.state.viewCompleted ? "completed-task" : ""}`}
            title={item.title}>
            {item.title}
            </span>
            <span>
                <button className="btn btn-info mr-2">Edit</button>
                <button className="btn btn-danger mr-2">Delete</button>
            </span>
        </li>
    ))
  }


  render() {
    return (
        <main className="context">
            <h1 className="text-black text-uppercase text-center my-4">Task Manager</h1>
            <h1 className="row">
                <div className="col-md6 col-sma-10 mx-auto p-0">
                    <div className="card p-3">
                        <button className="btn btn-primary">Add Task</button>
                        {this.renderTabList()}
                        <ul className="list-group list-group-flush">
                            {this.renderItems}
                        </ul>
                    </div>
                </div>
            </h1>
        </main>
    )
  }
}

export default App
