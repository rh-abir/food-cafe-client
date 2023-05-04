import React from 'react';

const TableData = ({rec}) => {
    console.log(rec)
    const {name, ingredients} = rec;
    console.log(ingredients)
    return (
        <tr>
        <th></th> 
        <td>{name}</td> 
        <td>{ingredients}</td> 
        
      </tr>
    );
};

export default TableData;