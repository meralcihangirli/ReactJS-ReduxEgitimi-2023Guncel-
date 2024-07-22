import { useField } from 'formik';
import React from 'react'


export default function CustomCheckbox({ label, ...props }) {
    const [field, meta] = useField(props);
    console.log(field)
    console.log(meta)
    return (
        <>
            <div className='checkbox'>
                <input {...field} {...props}
                    className={meta.error ? 'input-error' : ''} />
                <span>Kullanım koşullarını kabul ediyorum.</span>
                {meta.error && <div className='error'>{meta.error}</div>}
            </div>

        </>

    );

}
