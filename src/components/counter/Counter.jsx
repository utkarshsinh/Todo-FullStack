import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'
import ResetButton from './ResetButton'
export default function Counter(){
    const [count, setCount] = useState(0);
    function incrementPArentCounter(by){
        setCount(count + by)
    }

    function decrementPArentCounter(by){
        setCount(count - by)
    }

    function resetCounter() {
        setCount(0); // This function resets the count to 0
    }


    return (
        <>
        <span className="totalCount">{count}</span>
  <CounterButton incrementmethod = {incrementPArentCounter} decrementmethod = {decrementPArentCounter}/>
  <CounterButton by ={2} incrementmethod = {incrementPArentCounter} decrementmethod = {decrementPArentCounter}/>
  <CounterButton by ={5} incrementmethod = {incrementPArentCounter} decrementmethod = {decrementPArentCounter}/>
  <ResetButton resetmethod = {resetCounter}/>
        </>
    )
}

  