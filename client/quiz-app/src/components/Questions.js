import React, { useEffect, useState } from 'react'
import data from '../dabase/data'


export default function Questions({ onChecked }) {


    const questions = data[0];

    return (
        <div className='questions'>
            <h2 className='text-light'>{questions?.question}</h2>

            <ul key={questions?.id}>
                {
                    questions?.options.map((q, i) => (
                        <li key={i}>
                            <input
                                type="radio"
                                value={false}
                                name="options"
                                id={`q${i}-option`}

                            />

                            <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                            <div className="check"></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}