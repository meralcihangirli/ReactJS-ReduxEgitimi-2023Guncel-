import React from 'react'
import useInput from './useInput';




export default function PersonalInfo() {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

   const [firstName,bindFirstName,resetFirstName]=  useInput('');
   const [lastName,bindLastName,resetLastName]=  useInput('');


    const submitForm = (e) => {
        e.preventDefault();
        alert(`Merhaba ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label>Ad</label>
                    <input type='text' 
                    {...bindFirstName}
                    />
                </div>
                <div>
                    <label>Soyad</label>
                    <input type='text'
                    {...bindLastName}
                    />
                </div>
                <button>Kaydet</button>
            </form>
        </div>
    )
}
