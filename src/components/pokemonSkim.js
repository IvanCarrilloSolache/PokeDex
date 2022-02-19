import React from 'react'

const PokemonSkim = ({id, image, name, type, _callback }) => {
    const style = type + " skim-container";
    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonSkim