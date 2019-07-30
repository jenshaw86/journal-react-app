import React, { Component } from "react"

export default class Entry extends Component {

    render() {
        return ( 
            <div>
                <h1>Title: {this.props.entry.title}</h1>
                <p>{this.props.entry.content}</p>
            </div>
        )
    }
}