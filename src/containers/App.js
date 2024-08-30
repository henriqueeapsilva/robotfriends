import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

function App() {

    // we define the state of robots/searchfield using useState -> the parameter of useState is the initial state of the variables
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState('');


    useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>  response.json()) 
            .then(users => {setRobots(users)});
    }, []) // this parameter means that it will run when the parameter changes

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    
    return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RobotFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );

}

export default App;