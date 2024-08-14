import React from 'react';
import { todoType } from './apptypes'

type PropsType = {
    task: todoType
    deleteTask(nameToDelete: string): void;
};


export default function TodoItem({ task, deleteTask }: PropsType) {
    return (
        <div className='card'>
            <div>
                <p>{task.taskName}</p>
                <p>{task.workDay}</p>
                <button onClick={() => deleteTask(task.taskName)}>Sil</button>
            </div>
        </div>
    )
}
