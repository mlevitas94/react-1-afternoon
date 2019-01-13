import React, {Component} from 'react'

class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            unfilteredArray :["cat", "dog", "lizard", "moose", "gorilla", "fish"],
            userInput: "",
            filteredArray: []
        }
    }

    userInput(val){
        this.setState({userInput : val})
    }

    filterString(input){
        let oldArr = this.state.unfilteredArray.slice()
        let newArr = []
        for(var i = 0; i < oldArr.length; i++){
            if(oldArr[i].includes(input)){
                newArr.push(oldArr[i])
            }
        }
        this.setState({filteredArray: newArr})
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">

                <h4>Filter String</h4>

                <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray)}</span>

                <input className="inputLine" onChange={(e) => {this.userInput(e.target.value)}}></input>

                <button className="confirmationButton" onClick={() => this.filterString(this.state.userInput)}>Filter Names</button>

                <span className=" resultsBox filterStringRB">Filtered Names:{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}
export default FilterString