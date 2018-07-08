import React from "react";
import TableRow from "./TableRow";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableRow: null
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("[Table.js] prop recived ", nextProps);
    this.prepareTableRow(nextProps.tableData);
  }

  prepareTableRow = tableData => {
    console.log("[Table.js] prepeare row ", tableData);
    let tableBody = [tableData.length];

    for (let index in tableData) {
      console.log("iterarting", tableData[index]);
      tableBody[index] = (
        <TableRow
          clicked={this.props.SpeakerHandler}
          jobName={tableData[index].jobName}
          sentiment={tableData[index].sentiment}
          status={tableData[index].status}
          key={index}
          speakers={tableData[index].speakers}
        />
      );
    }

    this.setState({
      tableRow: tableBody
    });
  };

  render() {
    return (
      <div>
        <table className="table table-hoverable">
          <thead>
            <tr>
              <th className="text-left">Job Name</th>
              <th>Sentiments</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{this.state.tableRow}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
