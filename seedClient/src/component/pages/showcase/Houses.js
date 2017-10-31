import React, { Component } from "react";
import housesMock from "../../mock/housesMock";
import houseDetail from "./HouseDetails";

class Houses extends Component {

    constructor() {
        super();
        this.state = { houses: [] }
    }

    componentDidMount() {
        housesMock.addObserver(this)
        housesMock.loadData();
    }

    notify = (data) => {
        this.setState({ houses: data });
    }

    render() {
        return (
            <div>
                {houseDetail}
            </div>
        )
    }
}

export default Houses;