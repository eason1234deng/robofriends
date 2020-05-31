import React from 'react';


// const Card= ({ name, email, id }) => // destructure props right inside the argument list
    // <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    //     <img src={`https://robohash.org/${id}?200x200`} alt="Description goes here"/>
    //     <div>
    //         <h2>{name}</h2>
    //         <p>{email}</p>
    //     </div>
    // </div>

// class Card extends Component {
//     render() {
//         return ( // Can only return one element
//             <div className='bg-light-green dib br6 pa4 ma4 grow bw4 shadow-5'>
//                 <img src={`https://robohash.org/${this.props.id}?200x200`} alt="Description goes here"/>
//                 <div>
//                     <h2>{this.props.name}</h2>
//                     <p>{this.props.email}</p>
//                 </div>
//             </div>
//         );
//     }
// }

const Card = ({ name, email, id }) => (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?200x200`} alt="Description goes here"/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    );
export default Card;