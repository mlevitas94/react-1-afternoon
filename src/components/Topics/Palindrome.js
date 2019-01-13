import React, {Component} from 'react'

class Palindrome extends Component {
    constructor(){
        super()
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    userInput(val){
        this.setState({userInput: val})
    }

    setPalindrome(input){
        var backwards = []
        var inputCheck = this.state.userInput.slice()
        var split = inputCheck.split("")
        for(var i = split.length; i >= 0; i--){
            backwards.push(split[i])
        }

       var backwardsString = backwards.join("")

        if(backwardsString === inputCheck) {
            this.setState({palindrome: "true"})
        }else{
            this.setState({palindrome: "false"})
        }

        
        
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">

                <h4>Palindrome</h4>

                <input className="inputLine" onChange={(e) => {this.userInput(e.target.value)}}></input>

                <button className="confirmationButton" onClick={() => this.setPalindrome(this.state.userInput)}>Check</button>

                <span className="resultsBox">{this.state.palindrome}</span>

            </div>
        )
    }
}
export default Palindrome