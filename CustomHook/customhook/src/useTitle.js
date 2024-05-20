
import { useEffect } from 'react';


export default function useTitle(num) {
    useEffect(()=>{
        document.title=`Sayı ${num}`
    },[num]);
}
