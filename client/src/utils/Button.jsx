import React from 'react';


const Button = ({onClick,text,icon, color, backgroundColor}) => {

    return (
        <div onClick={onClick} className="ui-button" style={{backgroundColor, color, border: `1px solid ${color}`}}>
            <div className="button-icon">{React.createElement(icon)}</div>
            <div className="button-text">{text}</div>
        </div>
    );
};

export default Button;