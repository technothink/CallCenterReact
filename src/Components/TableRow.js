import React from 'react';
import Table from './Table';



const TableRow =(props)=>(

    

<tr onClick={() => props.clicked(props.speakers)}>
    <td className="text-left">{props.jobName}</td>
    <td>{props.sentiment}</td>
    <td>{props.status}</td>
    </tr>)
    

export default  TableRow;