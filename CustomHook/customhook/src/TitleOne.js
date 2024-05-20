import React from 'react'
import { useState,useEffect } from 'react';
import useTitle from './useTitle';

export default function TitleOne() {
    const [num, setNum] = useState(0);
// useEffect(()=>{
//     document.title=`Sayı ${num}`
// },[num]);
useTitle(num);
  return (
    <div>
      <button onClick={()=>setNum(num + 1)}>Sayı - {num}</button>
    </div>
  )
}

