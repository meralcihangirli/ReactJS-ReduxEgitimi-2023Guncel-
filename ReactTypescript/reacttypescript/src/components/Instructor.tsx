import React from 'react'
import { instructorPros } from './PropsTypes';


export default function Instructor(props: instructorPros) {
    return <div>{props.instructorNameLastName.firstName}{' '}{props.instructorNameLastName.lastName}</div>

}
