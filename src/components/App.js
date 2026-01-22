import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
    };

    buttonClickHandler() {
        this.setState({
            renderBall:true
        })
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button className='start' onClick={this.buttonClickHandler} >Start</button>
		}
    }

    handleKeyDown(event){
        if(event.key === "ArrowRight" && this.state.renderBall){
            this.setState(preState => {
                const newPosi = preState.posi + 5;
                return {
                    posi : newPosi, 
                    ballPosition : {left : newPosi + "px"}
                }
            })
        }
            
    }
    
   

    // bind ArrowRight keydown event
    componentDidMount() {
     document.addEventListener("keydown", this.handleKeyDown)
    }

    componentWillUnmount(){
        document.addEventListener("keydown", this.handleKeyDown)
    }
    
    
    render() {
        // console.log(this.state.ballPosition.left);
        return (
            <div className="playground" >
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
