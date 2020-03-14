import React from 'react'
import Dates from './Dates'

function Time() {
    const date = new Date();
    const now = date.toLocaleString();
    return (
        <div>
        <Dates time= {now} />
        </div>
    )
}
export default Time;