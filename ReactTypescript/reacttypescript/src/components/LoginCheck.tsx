import React from 'react'
import { useState } from 'react'

type UserType = {
    name: string,
    email: string,
    phone: string,
}

export default function LoginCheck() {
    const [user, setUser] = useState<UserType | null>({} as UserType);
    const handleLogin = () => {
        setUser({
            name: 'Meral',
            email: 'mc@gmail.com',
            phone: '555555555',
        });
    };

    const handleLogout = () => {
        setUser({} as UserType);
    };
    return (
        <div>
            <button onClick={handleLogin}>Giriş Yap</button>
            <button onClick={handleLogout}>Çıkış Yap</button>
            <div>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
                <p>{user?.phone}</p>
            </div>
        </div>
    )
}
