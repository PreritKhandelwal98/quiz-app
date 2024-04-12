import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'
import '../styles/Result.css'

export default function Result() {

    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>

            <div className='result flex-center'>
                <div className='flex'>
                    <span>Username</span>
                    <span className='bold'>User Id</span>
                </div>
                <div className='flex'>
                    <span>Total Quiz Points : </span>
                    <span className='bold'>Total points</span>
                </div>
                <div className='flex'>
                    <span>Total Questions : </span>
                    <span className='bold'>length</span>
                </div>
                <div className='flex'>
                    <span>Total Attempts : </span>
                    <span className='bold'>attemps</span>
                </div>
                <div className='flex'>
                    <span>Total Earn Points : </span>
                    <span className='bold'>earn point</span>
                </div>
                <div className='flex'>
                    <span>Quiz Result</span>
                    <span className='bold'> "Passed" : "Failed"</span>
                </div>
            </div>

            <div className="start">
                <Link className='btn' to={'/'} >Restart</Link>
            </div>

            <div className="container">
                {/* result table */}
                <ResultTable></ResultTable>
            </div>
        </div>
    )
}