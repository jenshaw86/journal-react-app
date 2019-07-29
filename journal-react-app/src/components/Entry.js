import React, { Component } from "react"

export default class Entry extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            content: ''
        }
    }


    render() {
        return ( <div>
            Title: {this.state.title}
            Content: {this.state.content}
            </div>
        )
    }
}