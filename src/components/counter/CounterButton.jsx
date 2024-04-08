import { useState } from 'react'
// import './Counter.css'
import {PropTypes} from 'prop-types'


export default function CounterButton({by, incrementmethod, decrementmethod}){
    // const [count, setCount] = useState(0);

    console.log(by)

    function incrementCounter(){

        // setCount(count + by)
        incrementmethod(by);
    }

    function decrementCounter(){
        
        // setCount(count - by)
        decrementmethod(by);
    }
    // We could also use lambda funcion instead of incrementcounter and decrement counter and dierectly useincrement or decrementmethod
    return (
            <div className = "Counter">
                {/* <span className="count">{count}</span> */}
                <div>
                <button className="counterButton" 
                        onClick={incrementCounter}
                        >+{by}</button>
                 <button className="counterButton" 
                        onClick={decrementCounter}
                        >-{by}</button>
                </div>
            </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
  }
  
CounterButton.defaultProps = {
    by: 1
  }