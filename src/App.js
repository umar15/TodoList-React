import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

var idtodo = 0;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					id: idtodo++,
					title: "Take out the trash",
					completed: false,
				},
				{
					id: idtodo++,
					title: "Dinner with wife",
					completed: false,
				},
				{
					id: idtodo++,
					title: "Meeting with boss",
					completed: false,
				},
				{
					id: idtodo++,
					title: "Take out the trash",
					completed: false,
				},
				{
					id: idtodo++,
					title: "Dinner with wife",
					completed: false,
				},
				{
					id: idtodo++,
					title: "Meeting with boss",
					completed: false,
				},
			],
		};
	}

	//Toggle COmplete
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	//Delete todo
	delTodo = (id) => {
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)],
		});
	};

	addTodo = (title) => {
		const newTodo = {
			id: idtodo++,
			title,
			completed: false,
		};
		this.setState({
			todos: [...this.state.todos, newTodo],
		});
	};

	render() {
		return (
			<Router>
				<div className="App">
					<div className="container">
						<Header />
						<Route
							exact
							path="/"
							render={(props) => (
								<>
									<AddTodo addTodo={this.addTodo} />
									<Todos
										todos={this.state.todos}
										markComplete={this.markComplete}
										delTodo={this.delTodo}
									/>
								</>
							)}
						/>
						<Route path="/about" component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
