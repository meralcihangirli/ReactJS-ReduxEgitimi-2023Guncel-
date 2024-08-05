import React from 'react';
import { useRef, useEffect } from 'react';

export default function RefExemple() {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    return (
        <div>
<input type="text" ref={inputRef}/>
        </div>
    )
}
