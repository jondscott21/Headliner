import React, { useState } from 'react'
import DatePicker from 'react-datepicker'


const Calender = () => {
    const [startDate, setStartDate] = useState(new Date())

    const handleChange = date => {
        // setStartDate(date)
        // console.log(startDate)
    }
    const handleSelect = date => {
        setStartDate(date)
        console.log(date)
    }
    return (
        <>
            <DatePicker
                selected={startDate}
                onSelect={handleSelect}
                onChange={handleChange}
            />
            <div>{startDate.toDateString()}</div>
        </>
    )
}

export default Calender