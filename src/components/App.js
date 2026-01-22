import React, { Component, useState ,setState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
    };

    buttonClickHandler() {
        this.setState({
            renderBall:!this.state.renderBall
        })
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button className='start' onClick={this.buttonClickHandler} >Start</button>
		}
    }
    
   

    // bind ArrowRight keydown event
    componentDidMount() {
     document.addEventListener("keydown", (event)=>{
        console.log(event.key);
        if(event.key==='ArrowRight'){
            this.setState(prevState=>({
                posi:prevState.posi+5,
                ballPosition:{left:`${prevState.posi}px`}
            }))
        }
    });
    }
    
    
    render() {
        // console.log(this.state.ballPosition.left);
        return (
            <div className="playground" style={{position:"relative",...this.state.ballPosition}}>
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
