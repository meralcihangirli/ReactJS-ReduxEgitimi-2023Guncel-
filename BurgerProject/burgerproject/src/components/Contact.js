import React from 'react'
import BannerImage from '../assets/logo.png'
import '../styles/Contact.css'

export const Contact = () => {
    return (
        <div className='contact'>
            <div className='leftSide' style={{ backgroundImage: `url(${BannerImage})` }}>
            </div>
            <div className='rightSide'>
                <h1>Bizimle İletişime Geçebilirsiniz</h1>
                <form>
                    <label>Adınız Soyadınız</label>
                    <input type="text" name='name' placeholder='Lütfen Adınız Soyadınız alanını doldurunuz.'></input>
                    <label>Email</label>
                    <input type="email" name='email' placeholder='Lütfen Mail Adresinizi bu alana giriniz.'></input>
                    <label>Mesajınız</label>
                    <textarea rows="6" name='message' placeholder='Mesajınızı iletebilirsiniz.'></textarea>
                    <button>Gönder</button>
                </form>
            </div>
        </div>
    )
}
