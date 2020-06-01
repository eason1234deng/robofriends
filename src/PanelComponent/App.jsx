import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './Components/CardList';
import ErrorBoundary from './Components/ErrorBoundary';
import SearchBox from './Components/SearchBox';
import Scroll from './Components/Scroll';
import { setSearchField, requestRobots } from '../Actions/actions';
import './Styles/App.css';

const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
    onSearchFieldChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()) // thunk to check to see if this action returns a function -> if it is, it will pass dispatch as arg to the function
});

class App extends Component { // Smart component = stateful component
    // constructor(props) {
    //     super(props);

    //     // this.originalRobots = [];
    //     // this.state = {
    //     //     robots: []
    //     // };

    //     // this.onSearchFieldChange = this.onSearchFieldChange.bind(this);
    // }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users') // no context, not part of react => a method on the window object -> comes with all browsers now
        // .then(response => response.json())
        // .then(users => {
        //     this.originalRobots = users;
        //     this.setState({ robots: users });
        // });
        this.props.onRequestRobots();
    }

    // onSearchFieldChange(e) { // Or can use arrow function so we don't need to bind this, value of this is determined at runtime and depends on context => tricky
    //     const searchValue = e.target.value.toLowerCase();
    //     let newRobots = this.originalRobots;
    //     const { searchField } = this.props;
    //     if (typeof(searchValue) === 'string' || searchValue instanceof String) {
    //         if (searchValue.length > searchField.length) {
    //             newRobots = this.state.robots;
    //         }
    //         if (searchValue.length > 0) {
    //             newRobots = newRobots.filter(robot => robot.name.toLowerCase().includes(searchValue));
    //         }
    //     }
    //     this.setState({
    //         robots: newRobots
    //     });
    // }

    render() {
        const { onSearchFieldChange, searchField, robots, isPending, error } = this.props;
        if (isPending) {
            return <h1 className='tc f1'>Loading</h1>;
        } else if (error.length) {
            return <h1 className='tc f1'>Ooooops, Error Loading Data</h1>
        }

        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox onSearchFieldChange={onSearchFieldChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);