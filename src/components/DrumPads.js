import React, { useEffect } from 'react'
import { audioClips } from '../config/audioData';
import { useDispatch, useSelector } from 'react-redux';
import {keyPress} from './../redux/actions/index';
const DrumPads = () => {
    const dispatch = useDispatch();
    const { power} = useSelector((state) => state.powerReducer);
    const playSound = (e) =>{
        if(power){
            const audioTag = document.getElementById(e);
            dispatch(keyPress(e))
            audioTag.currentTime = 0;
            audioTag.play();
        }
       
    }

    const handleKeyDown = (e) =>{
        return playSound(e.key.toUpperCase());
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    return (
        <div className="overflow-hidden text-center">
            <div className="row g-2">
                {
                    audioClips.map((clips => {
                        return (
                            <div className="col-4" key={clips.id} onClick={() =>{playSound(clips.keyTrigger)}}>
                                <div className={`p-4 drum-pad`} id={clips.id}>
                                    <audio className="clip" id={clips.keyTrigger} src={clips.url}></audio>
                                    {clips.keyTrigger}
                                </div>
                            </div>
                        )
                    }))
                }
            </div>
        </div>
    )
}
export default DrumPads;