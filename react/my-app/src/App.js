import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Materjalid from './components/pages/Materjalid';
import Footer from './components/layout/Footer';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Game from './components/pages/Game';
import Contact from './components/pages/Contact';
import Bannner from './components/layout/Banner';
import Examples from './components/SimpleTab';
import uuid from 'uuid';
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Add your notes',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Notes',
        completed: false
      }
    ]
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  // Delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
 
  // Add todo 
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return(
      <Router>
        <div className="App">
            <Header />
            <Route exact path="/react-app" component={Home} />
            <Route  path="/todo" render={props => (
              <React.Fragment>
                <Bannner />
                  <div className="container">
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                  </div>
              </React.Fragment>
            )} />
            <Route path="/materjalid" component={Materjalid} />
            <Route path="/game" component={Game} />
            <Route path="/naited" component={Examples} />
            <Route path="/tagasiside" component={Contact} />
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
