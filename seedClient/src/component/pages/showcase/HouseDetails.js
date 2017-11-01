import React, { Component } from "react";

class HouseDetails extends Component {

    constructor(props) {
        super();
        this.state = { "house": props.house }
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({ house: nextProps.house });
    }

    render() {
        const house = this.state.house;
        return (
            <div>
                <div className="col-sm-4">
                    <img src={house.img[1].url} width="160" height="160" />
                </div>
                <div className="col-sm-8">
                    <p>{house.description}</p>
                </div>
                {/*
                <div class="col-sm-3">
                    <p>Average user rating {house.rating.stars} on {house.rating.amount} ratings</p>
                </div>
                */}
            </div>
        )
    }
}

export default HouseDetails;