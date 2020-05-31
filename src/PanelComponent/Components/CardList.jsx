import React from 'react';
import Card from './Card';

// class CardList extends Component {
    
//     render() {
//         const cardArray = robots.map((robot) =>
//             // If no key prop for elements generated in array => if we change some of the elements, ReactDOM won't know which one is being changed => so it will need to re-render all => not efficient, it's better to pass a key props to elements generated in an array
//             <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
//             );

//         return <div>{cardArray /* Wrap in curly braces so that JSX knows how to evaluate it */}</div>;
//     }
// }

const CardList = ({ robots }) => { // Pure component = dump component
    const cardArray = robots.map(robot => <Card key={robot.id} id={robot.id} email={robot.email} name={robot.name}/>);

    console.log(robots);

    return <div>{cardArray}</div>
}

export default CardList;