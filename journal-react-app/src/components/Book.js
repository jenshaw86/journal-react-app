import React from "react"

export default class Book extends React.Component {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         journal: ''
    //     }
    // }
    
    getSelectedJournal = (selectedJournalId) => {
        return this.props.journals.map((journal) => {
           return journal.id === selectedJournalId
       }) 
    }

    componentDidMount() {
        const arg = parseInt(this.props.match.params.id)
        const journal = this.getSelectedJournal(arg)
        console.log(journal)
    }

    // const selectedJournal = this.getSelectedJournal(this.props.match.params.id)

      

    

    render() {
        
        return <div>
            {this.getSelectedJournal(this.props.match.params.id).subject}
        </div>
    }
}