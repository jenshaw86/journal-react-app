import React, {Component} from 'react'
import JournalCard from '../components/JournalCard'


class Dashboard extends Component {

createCards = (arr) => {
    return arr.map((journal, idx) => {
        return <JournalCard key={idx} journal={journal}/>
    })
}

    render() {
        return(
            <div className="card-holder">{this.createCards(this.props.journals)}</div>
        )
    }
}


export default Dashboard