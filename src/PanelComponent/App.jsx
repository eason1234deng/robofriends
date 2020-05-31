import React, { Component } from 'react';
import CardList from './Components/CardList';
import ErrorBoundary from './Components/ErrorBoundary';
import SearchBox from './Components/SearchBox';
import Scroll from './Components/Scroll';
import './Styles/App.css';

class App extends Component { // Smart component = stateful component
    constructor(props) {
        super(props);

        this.originalRobots = [];
        this.state = {
            robots: [],
            searchField: ''
        };

        this.onSearchFieldChange = this.onSearchFieldChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') // no context, not part of react => a method on the window object -> comes with all browsers now
        .then(response => response.json())
        .then(users => {
            this.originalRobots = users;
            this.setState({ robots: users });
        });
    }

    onSearchFieldChange(e) { // Or can use arrow function so we don't need to bind this, value of this is determined at runtime and depends on context => tricky
        const searchValue = e.target.value.toLowerCase();
        let newRobots = this.originalRobots;
        if (typeof(searchValue) === 'string' || searchValue instanceof String) {
            if (searchValue.length > this.state.searchField.length) {
                newRobots = this.state.robots;
            }
            if (searchValue.length > 0) {
                newRobots = newRobots.filter(robot => robot.name.toLowerCase().includes(searchValue));
            }
        }
        this.setState({
            robots: newRobots,
            searchField: searchValue
        });
    }

    render() {
        if (this.originalRobots === 0) {
            return <h1 className='tc f1'>Loading</h1>;
        }

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox onSearchFieldChange={this.onSearchFieldChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={this.state.robots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}
export default App;