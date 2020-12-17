import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component{

    submitEvent(){
        if(this.props.emitEvent){
            this.props.emitEvent()
        }
    }

    render(){
        const {buttontext}= this.props;
        return(
            <button onClick={()=> this.submitEvent()} data-test='buttonComponent'>
                {buttontext}
            </button>
        )
    }
}
Button.propTypes={
    buttonText:PropTypes.string,
    emitEvent:PropTypes.func
}

export default Button;