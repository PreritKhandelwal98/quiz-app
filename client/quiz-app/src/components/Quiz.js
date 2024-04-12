import Questions from './Questions'

export default function Quiz() {

    {/* Next button event handeler*/ }
    const onNext = () => {
        alert("Next Button clicked");
    }
    {/* Prev button event handeler*/ }
    const onPrev = () => {
        alert("Previous Button clicked");
    }

    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>

            {/* display questions */}
            <Questions />

            <div className='grid'>
                <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}