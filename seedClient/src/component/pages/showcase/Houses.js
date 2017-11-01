import React, { Component } from "react";
import { Link } from "react-router-dom";
class Houses extends Component {

    constructor(props) {
        super();
        this.state = { houses: props.houses, rating: 0 }
    }
    onChange = (e) => {
        const value = e.target.value;        
        this.setState({rating: value});
    }

    render() {
        return (
            <div>
            {/*<button onClick={(e) => this.handleClick(1)}>
            Search 1 star or better
            </button>
            <button onClick={(e) => this.handleClick(2)}>
            Search 2 star or better
            </button>
            <button onClick={(e) => this.handleClick(3)}>
            Search 3 star or better
            </button>
            <button onClick={(e) => this.handleClick(4)}>
            Search 4 star or better
            </button>
            <button onClick={(e) => this.handleClick(5)}>
            Search 5 star or better
        </button>*/}
        <form>
        <input type="text" value={this.state.rating} onChange={this.onChange} className="form-control" id="username" placeholder="User Name" required autoFocus />
        </form>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>House</th>
                            <th>Description</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    {filterHouse(this.state.houses, this.state.rating)}
                </table>
            </div>
        )
    }
}


const printHouse2 = (houses) => {
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

const filterHouse = (houses, rate) => {
    console.log(rate);
    const houseData = houses;
    let rows = [];
    const
    click = (event) => {
        window.location = event.target.parentElement.getAttribute("href");
    }
    houseData.forEach(function (e) {
        if(e.rating.stars >= rate){
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
    }}, this);
    return <tbody>{rows}</tbody>
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