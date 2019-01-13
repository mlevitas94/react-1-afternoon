import React, {Component} from 'react'

class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    updateUserInput(e){
        this.setState({userInput: e});
    }

    assignEvenAndOdds(val){
        let newArr = val.split(",");
        let evenArr = [];
        let oddArr = [];
        for(var i = 0; i < newArr.length; i++){
            if(parseInt(newArr[i], 10) % 2 ===0){
                evenArr.push(parseInt(newArr[i],10))
            } else{
                oddArr.push(parseInt(newArr[i], 10))
            }
        }

        this.setState({evenArray : evenArr, oddArray: oddArr})
    }
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">

                <h4>EvenAndOdd</h4>

                <input className="inputLine" onChange={(e) => this.updateUserInput(e.target.value)}></input>

                <button className="confirmationButton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>

                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>

                <span className="resultsBox">Odds:{JSON.stringify(this.state.oddArray)}</span>

            </div>
        )
    }
}
export default EvenAndOdd