import React, { Component } from "react";
import Houses from "../showcase/Houses";
//import Details from "../showcase/Details";
import housesMock from "../../mock/housesMock";
import { Switch, Route } from "react-router-dom";

export default class Rental extends Component {
    constructor() {
        super();
        this.state = { houses: housesMock.data };
    }

    render() {
        return (
            <div>
                <h1>House page</h1>
                <div class="col-sm-6">
                    <Houses houses={this.state.houses} />
                </div>
                <div class="col-sm-6">
                    <Switch>
                        <Route path='/articles/:id' render={(props) => {
                            console.log("ID INSIDE ROUTE RENDER: " + props.match.params.id);
                            const articles = this.state.articles;
                            const filtered = articles.filter(a => a.id === props.match.params.id)[0];
                            console.log('filtered is: '); console.log(filtered);
                            const article = (filtered) ? filtered : { id: '', title: '', url: '', img: '' };
                            return (
                            //    <ArticleDetail {...props} article={article} />
                                <p>p</p>
                            );
                        }} />

                    </Switch>
                </div>
            </div>
        )
    }
}