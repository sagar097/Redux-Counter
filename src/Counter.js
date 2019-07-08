import React, { Component } from 'react'
import {decrement, increment} from './Redux/actions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Counter extends Component {
    increment=()=>{
        // console.log( this.props.incrementCounter())
        this.props.incrementCounter()
    }
    decrement=()=>{
         this.props.decrementCounter();
    }
  render() {
     console.log(this.props.counter,this.props)
    return (
      <div>
        <h2>Counter</h2>
        <span/>
        <button onClick={this.increment}>+</button>
        <span>{this.props.counter}</span>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}


const mapStateToProps=(state)=>{
return{
       counter:state.count
   }
}
const mapDispatchToProps=(dispatch)=>({
       incrementCounter: bindActionCreators(increment,dispatch),  //component is not aware about redux thats why we use middleware bindactioncreators 
       decrementCounter: bindActionCreators(decrement,dispatch)   
})
export default connect(mapStateToProps,mapDispatchToProps )(Counter);