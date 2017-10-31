import React, { Component } from "react";

class HouseDetail extends React.Component {
    constructor(props) {
        super();
        this.state = {
            house: props.house
        };
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({ house: nextProps.house });
    }

    render() {
        const house = this.state.house;
        return (
            <div id="details">
                <h2>{house.id}</h2>
                <a href={house.description}>Click here to go to the house</a><br />
            </div>
        );
    }
}

export default HouseDetail;