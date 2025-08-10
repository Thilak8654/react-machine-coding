import React, { useEffect, useState } from 'react';
import '../App.css';

const ProgressBar = ({progress}) => {
    const [delayedProgress, setDelayedProgress] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setDelayedProgress(progress)
        }, 400);
    }, [progress])
  return (
    <div><h3>Progress Bar</h3>
        <div className='outer' style={{color: progress<=50 ? "black": "white"}}>{progress}%
            <div className='inner' style={{transform: `translateX(${delayedProgress-100}%` }}></div>
        </div>
    </div>

  )
}

export default ProgressBar