import React, { Component } from "react";
import housesMock from "../../mock/housesMock";

class Houses extends Component {

    constructor() {
        super();
        this.state = { houses: housesMock.data }
    }

    render() {
        console.log(this.state.houses[0].description);
        return (
            <div>
                <table>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
                </table>
                {/* <table>
                    <tr>
                        <th>House</th>
                        <th>Description</th>
                        <th>Address</th>
                    </tr>
                    <tr>
                        <td>House</td>
                        <td>{this.state.houses[0].description}</td>
                        <td>{this.state.houses[0].address}</td>
                    </tr>
                    <tr>
                        <td>House</td>
                        <td>{this.state.houses[1].description}</td>
                        <td>{this.state.houses[1].address}</td>
                    </tr>
                </table> */}
            </div>
        )
    }
}

export default Houses;