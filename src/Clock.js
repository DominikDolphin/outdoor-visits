import {useState, useEffect} from 'react';

function Clock(props){
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        console.log("creating a new time interval")
        const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return ()=>{
            clearInterval(timerID);
        }
    }, [])

    
    return (
        <div>
            <h1>Hello World!</h1>
            <h2>It is {date.toLocaleTimeString()}</h2>
        </div>
    );

}

export default Clock;