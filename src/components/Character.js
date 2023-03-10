// Write your Character component here
import React from 'react';

const CharacterList = (props) => {
    return (
        <div>
            <p>{props.name[0].name}</p>
            <p>{props.name[1].name}</p>
            <p>{props.name[2].name}</p>
            <p>{props.name[3].name}</p>
            <p>{props.name[4].name}</p>
            <p>{props.name[5].name}</p>
        </div>
    )
}

const rootElement = document.getElementById("root");

// ReactDOM.render(
//     <CharacterList />,
//     rootElement
// );

export default CharacterList;