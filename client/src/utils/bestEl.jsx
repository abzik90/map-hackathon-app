import React from 'react';

const BestEl = ({num, surname, name, area}) => {
    return (

            <tr>
                <td>{name} {surname}</td>
                <td>{area}</td>
                <td>{num}</td>
            </tr>
    );
};

export default BestEl;