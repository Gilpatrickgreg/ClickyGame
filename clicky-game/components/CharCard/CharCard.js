import React from "react";


const CharCard = ({ id, name, image, handlePicked }) => (
   
    <div>
        <div
            className="card"
            key={id}
            data-id={id}
            name={name}
            style={{ backgroundImage: `url(${image})` }}
            onClick={handlePicked}
        >
        </div>
    </div>
)

export default CharCard;
