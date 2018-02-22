import React, {Component} from 'react';
import './to-do-list.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state= {
           todos: [
               {id: 1, title:"Obst kaufen"},
               {id: 2, title:"Programmieren"},
               {id: 3, title:"Katzen füttern"}    
           ]
        }
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo() {
        let todos = this.state.todos;
        let maxId = 0;
        for(let todo of todos) {
            maxId = todo.id;
        }

        todos.push({id: (maxId + 1), title:"New Todo"});
        this.setState({
            todos: todos
        })
    }

    render() {
        return (
            <div className="ToDoList">
                <h1>ToDo-Liste</h1>
                    <ul className="ToDoList-todo">
                        {this.state.todos.map( function(todo) { 
                        return (
                            <li key={todo.id}>{todo.title}</li>
                        )  
                        } )}
                    </ul>
                    <button onClick={this.addTodo}>Add ToDo</button>
            </div>
            /* .map ist quasi eine for-schleife die alle Inhalte
                 des Array durchgeht und sie in den Parameter der Funktion schreibt
             */
        )
    }

}

export default ToDoList;
