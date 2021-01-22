import React from 'react';

function TableBody(props) {
    return(
        <tbody>
            {props.table.map(item => 
                <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                    <ul>
                        <li>{item.categories.id1}</li>
                        <li>{item.categories.id2}</li>
                        <li>{item.categories.id3}</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li><span className="text-danger">{item.colors.c1}</span></li>
                        <li><span className="text-primary">{item.colors.c2}</span></li>
                        <li><span className="text-success">{item.colors.c3}</span></li>
                    </ul>
                </td>
                <td>{item.stock}</td>
            </tr>)}
             
        </tbody>
    )
    
}

export default TableBody;