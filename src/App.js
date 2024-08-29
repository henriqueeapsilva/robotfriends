import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
// import { robots } from './robots';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    
    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value } );
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>  response.json()) // passing the data to json - because it receaves a promise
            .then(users => this.setState({ robots: users })); // and setting the robots to the users 
    }


    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RobotFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots} />
                </div>
            );
        }
    }
}

export default App;