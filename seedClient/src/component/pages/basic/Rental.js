import React, { Component } from "react";
import Houses from "../showcase/Houses";
import HouseDetails from "../showcase/HouseDetails";
import housesMock from "../../mock/housesMock";
import { Switch, Route } from "react-router-dom";

export default class Rental extends Component {
    constructor() {
        super();
        this.state = { houses: housesMock.data, currentHouse: null };
    }

    render() {
        return (
            <div>
                <h1>House page</h1>
                <div className="col-sm-6">
                    <Houses houses={this.state.houses} />
                </div>
                <div className="col-sm-6">
                    <Switch>
                        <Route path='/rental/:id'
                            render={(props) => {
                                const id = props.match.params.id;
                                const houses = this.state.houses;
                                const house = houses[id - 1];
                                return <HouseDetails {...props} house={house} />
                            }}
                        />
                    </Switch>
                </div>
            </div>
        )
    }
}