import React, { Component } from "react";
import { Link } from "react-router-dom";
class Houses extends Component {

    constructor(props) {
        super();
        this.state = { houses: props.houses }
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>House</th>
                            <th>Description</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    {printHouse(this.state.houses)}
                </table>
            </div>
        )
    }
}

const printHouse = (houses) => {
    const houseData = houses;
    let rows = [];
    houseData.forEach(function (e) {
        rows.push(
            <tr key={e.id}>
                <td>house</td>
                <td>{e.description}</td>
                <td><Link to={`/rental/${e.id}`}>{e.id}</Link></td>
            </tr>
        );
    }, this);
    return <tbody>{rows}</tbody>
}

export default Houses;