import React, {Component} from 'react'

class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
            unFilteredArray:[{name:"Prakarsh",hairColor:"Dark Brown"},
            {name:"Mark",location:"New Jersey",spectacles:true},
            {name:"Jordan", location:"Cincinnati"},
            ],

            userInput: "",

            filteredArray: []


        }
    }

    updateUserInput(val){
        this.setState({userInput: val});
    }

    filterObject(obj){
        let unFiltered = this.state.unFilteredArray.slice();
        let filtered = [];
        for(var i = 0; i < unFiltered.length; i++){
            if(unFiltered[i].hasOwnProperty(obj)){
                filtered.push(unFiltered[i])
            }
        }
        this.setState({filteredArray: filtered})
        
    }
    render(){
        return(
           <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>

                <span className="puzzleText">
                Original: {JSON.stringify(this.state.unFilteredArray)} 
                </span>

                <input className="inputLine" 
                onChange={(e) => {this.updateUserInput(e.target.value)}}>
                </input>

                <button className="confirmationButton"
                 onClick={() => this.filterObject(this.state.userInput)}>
                 filter Original
                 </button>

                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
           </div> 
        )
    }
}
export default FilterObject