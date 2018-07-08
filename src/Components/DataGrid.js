import React from 'react';
import ReactDataGrid from 'react-data-grid';
import 'bootstrap/dist/css/bootstrap.css';

class DataGrid extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._columns = [
            {
                key: 'id',
                name: 'ID',
                width: 50
            },
           
        
            {
                key: 'issueType',
                name: 'Agent Name',
                width: 200
                
                
            },
            {
                key: 'complete',
                name: 'Sentiments',
                 width: 100
               
            },
            {
                key: 'startDate',
                name: 'Processed Date'
               
            }
        ];

        this.state = { rows: this.createRows(10) };
    }

    createRows = (numberOfRows) => {
        let rows = [];
        for (let i = 1; i < numberOfRows; i++) {
            rows.push({
                id: i,
                task: 'Task ' + i,
                complete: Math.min(100, Math.round(Math.random() * 110)),
                priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
                issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
                startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
                completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
            });
        }
        return rows;
    };

    getRandomDate = (start, end) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
    };

    rowGetter = (i) => {
        return this.state.rows[i];
    };

    render() {
        return (
            <ReactDataGrid
                enableCellSelect={true}
                columns={this._columns}
                rowGetter={this.rowGetter}
                rowsCount={this.state.rows.length}
                minHeight='375px'
                Width='400px'
              

            />

        )
    }
}

export default DataGrid;