import React, { Component } from "react";

class HouseDetails extends Component {

    constructor(props) {
        super();
        this.state = { "house": props.house}
    }

    componentWillReceiveProps =(nextProps)=>{
        this.setState({house:nextProps.house});
   }

    render() {
        const house = this.state.house;
        return (
            <div>
                <p>{house.description}</p>
            </div>
        )
    }
}

export default HouseDetails;