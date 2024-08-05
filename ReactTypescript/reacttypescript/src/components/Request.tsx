import React from 'react'

type RequestProps = {
    // status: string;
    status: 'loading' | 'success' | 'error';
}

export default function Request(props: RequestProps) {
    let message = '';
    if (props.status === 'loading') {
        message = 'Yükleniyor'
    }
    if (props.status === 'success') {
        message = 'Başarılı'
    }
    if (props.status === 'error') {
        message = 'Hata'
    }

    return <div>{message}</div>
}
