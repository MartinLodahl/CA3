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
                {this.state.house ? (
                    <div>
                        <div className="col-sm-4">
                            <img src={house.img[1].url} width="160" height="160" alt="nej" />
                        </div>
                        <div className="col-sm-8">
                            <p>{house.description}</p>
                        </div>
                    </div>
                ) : (
                        <div>
                            <h2>House rental</h2>
                            <p>Here you can view additional information about the houses. Click on a house on the left</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default HouseDetails;