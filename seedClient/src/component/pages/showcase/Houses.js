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
    const click = (event) => {
        let parent = event.target.parentElement;
        if (!parent.getAttribute("href")) {
            parent = parent.parentElement;
        }
        window.location = parent.getAttribute("href");
    }
    houseData.forEach(function (e) {
        rows.push(
            <tr key={e.id} href={`/#/rental/${e.id}`} onClick={click}>
                <td>
                    <img src={e.img[1].url} width="80" height="80" alt="nej" />
                </td>
                <td className="text-left">
                    <b>{e.title}</b> <br />
                    {e.description}
                </td>
                <td>{`${e.rating.stars} (${e.rating.amount})`}</td>
            </tr>
        );
    }, this);
    return <tbody>{rows}</tbody>
}

export default Houses;