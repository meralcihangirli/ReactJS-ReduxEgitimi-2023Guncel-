import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import { Link } from 'react-router-dom'

const onSubmit = async (values, actions) => {
    console.log(values)
    console.log(actions)
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    });
    actions.resetForm();
}

export default function GeneralForm() {
    const { values, errors, isSubmitting, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    return <form onSubmit={handleSubmit}>
        <div className='inputDiv'>
            <label>Email</label>
            <input type='email' value={values.email} onChange={handleChange} id='email' placeholder='Mail adresinizi giriniz' className={errors.email ? 'input-error' : ''} />
        </div>
        {errors.email && <p className='error'>{errors.email}</p>}
        <div className='inputDiv'>
            <label>Yaş</label>
            <input type='number' value={values.age} onChange={handleChange} id='age' placeholder='Yaşınızı giriniz' className={errors.age ? 'input-error' : ''} />
        </div>
        {errors.age && <p className='error'>{errors.age}</p>}
        <div className='inputDiv'>
            <label>Şifre</label>
            <input type='password' value={values.password} onChange={handleChange} id='password' placeholder='Şifrenizi giriniz' className={errors.password ? 'input-error' : ''} />
        </div>
        {errors.password && <p className='error'>{errors.password}</p>}
        <div className='inputDiv'>
            <label>Şifre Tekrar</label>
            <input type='password' value={values.confirmPassword} onChange={handleChange} id='confirmPassword' placeholder='Şifrenizi tekrar giriniz' className={errors.confirmPassword ? 'input-error' : ''} />
        </div>
        {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
        <button disabled={isSubmitting} type='submit'>
            Kaydet
        </button>
        <Link className='formLink' to="/portal">Portala Git</Link>
    </form>
}
