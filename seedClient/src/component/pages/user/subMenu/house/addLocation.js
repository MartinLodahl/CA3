import React, { Component } from 'react';
const URL = require("../../../../../../package.json").serverURL;

class AddLocation extends Component {

    constructor() {
        super();
        this.state = { title: "", street: "", zip: "", city: "", description: "", img: "", stars: 0, amount: 0 }
        this.handleChange = this.handleChange.bind(this);
        this.submitHouse = this.submitHouse.bind(this);
    }

    submitHouse(e) {
        e.preventDefault();
        let data = new FormData();
        let imageData = document.querySelector('input[type="file"]').files[0];

        data.append("file", imageData);
        data.append("place", JSON.stringify(jsonObj(
            this.state.title,
            this.state.street,
            this.state.zip,
            this.state.city,
            this.state.description,
            this.state.stars,
            this.state.amount,
            this.state.img
        )));

        fetch(URL + 'api/registerPlace/file', {
            method: 'POST',
            body: data
        }).then(function (res) {
            if (res.ok){
                alert("Upload works!")
            }else{
                alert("somethings not correct!")
            }
        })
    }

    handleChange(e) {
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    render() {
        return (
            <div>
                <h2>House management</h2>
                <p>Here you can add new houses that customers can rent</p>
                <form encType="multipart/form-data" action="" method="post">
                    <input type="text" id="title" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange} />
                    <p />
                    <input type="text" id="street" name="street" placeholder="street" value={this.state.street} onChange={this.handleChange} />
                    <p />
                    <input type="number" id="zip" name="zip" placeholder="zip" value={this.state.zip} onChange={this.handleChange} />
                    <p />
                    <input type="text" id="city" name="city" placeholder="city" value={this.state.city} onChange={this.handleChange} />
                    <p />
                    <input type="text" id="description" name="description" placeholder="description" value={this.state.description} onChange={this.handleChange} />
                    <p />
                    <input type="file" id="img" name="img" placeholder="image" value={this.state.img} onChange={this.handleChange} />
                    <p />
                    <button onClick={this.submitHouse}>click here</button>
                </form>
            </div>
        )
    }
}



const jsonObj = (title, street, zipCode, city, description, stars, amount, imgArray) => {
    return ({
        title: title,
        address: {
            street: street,
            zip: {
                zip: zipCode,
                city: city
            }
        },
        gps: {

        },
        description: description,
        rating: {
            stars: stars,
            amount: amount
        },
        images: [
            {
            }
        ]
    })
}

export default AddLocation;