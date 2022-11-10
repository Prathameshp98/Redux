import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>      
                    {this.props.storedResults.map((eachResult) => {
                        return (
                            <li key={eachResult.id} onClick={() => this.props.onDeleteResult(eachResult.id)}>{eachResult.value}</li>
                        ) 
                    })}
                </ul>
            </div>
        );
    }
}

const mapStoreToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 5 }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 5 }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, elementId: id }),
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Counter);