import moment from 'moment';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CountdownNumber } from './';


export const Countdown = () => {
    const releaseDate = useMemo(() => moment(process.env.REACT_APP_RELEASE_DATE), []);

    const timer = useRef(null);
    const [timeToRelease, setTimeToRelease] = useState(moment.duration(releaseDate.diff(moment(new Date()))));
    const timerOver = useMemo(() => Math.floor(timeToRelease.asSeconds()) <= 0, [timeToRelease]);

    useEffect(() => {
        const timerId = setInterval(() => {
            const updatedDate = moment(new Date());
            setTimeToRelease(moment.duration(releaseDate.diff(updatedDate)))
        }, 1000);
        timer.current = timerId;

        return () => clearInterval(timer.current);
    }, [releaseDate]);

    useEffect(() => {
        if(timerOver) clearInterval(timer.current);
    }, [timerOver]);
    
    return (
        <div className='countdown'>
            <CountdownNumber 
                label='Días'
                number={ timerOver ? 0 : Math.floor(timeToRelease.asDays()) }
            />
            <CountdownNumber 
                label='Horas'
                number={ timerOver ? 0 : timeToRelease.hours() }
            />
            <CountdownNumber 
                label='Minutos'
                number={ timerOver ? 0 : timeToRelease.minutes() }
            />
            <CountdownNumber 
                label='Segundos'
                number={ timerOver ? 0 : timeToRelease.seconds() }
            />
        </div>
    )
}
