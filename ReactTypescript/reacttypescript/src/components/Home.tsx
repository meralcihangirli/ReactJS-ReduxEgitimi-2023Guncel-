import React from 'react'
import { DataComing } from './PropsTypes'


export default function Home(props: DataComing) {
    return (
        <div>
            {props.name} eğitime hoşgeldiniz.Kurs sayısı :{props.courseNumber} {props.isThere ? <p>React eğitimi listede var.</p> : <p>React eğitimi listede yok.</p>}
        </div>
    )
}
