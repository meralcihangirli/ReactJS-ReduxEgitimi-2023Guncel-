import React from 'react'
import { useState } from 'react'

export default function useCounter() {
    const [num, setNum] = useState(0)
    const increment = () => {
        setNum((prevNum) => prevNum + 1);
    };

    const decrement = () => {
        setNum((prevNum) => prevNum - 1);
    };

    const reset=()=>{
        setNum(0);
    };

    return [num,increment,decrement,reset];
}
