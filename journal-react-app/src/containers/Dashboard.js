import React, {Component} from 'react'
import JournalCard from '../components/JournalCard'

class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            journals: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/journals")
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                journals: data
            })
        })
    }

createCards = (arr) => {
    return arr.map((journal, idx) => {
        return <JournalCard key={idx} journal={journal}/>
    })
}

    render() {
        return(
            <div>{this.createCards(this.state.journals)}</div>
        )
    }
}

export default Dashboard