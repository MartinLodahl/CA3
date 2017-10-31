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
                <table class="table table-hover">
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
        let b = <tr>
            <td>house</td>
            <td>{e.description}</td>
            <td>{e.rating.stars}</td>
        </tr>
        rows.push(b);
    }, this);
    return <tbody> {rows} </tbody>
}


export default Houses;