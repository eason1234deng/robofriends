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
    componentDidMount() {
        this.props.onRequestRobots();
    }

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