import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
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
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RobotFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;