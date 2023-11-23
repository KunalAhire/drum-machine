import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { audioClips } from '../config/audioData';
const DrumTools = () => {
    const [audioVolume, setAudioVolume] = useState(0.27);

    const {key_Press, power} = useSelector((state) => state.powerReducer);
    const dispatch = useDispatch();

     const machineState = () =>{
        dispatch({type:'POWER'});
     }

   
  
  const changeAudioVolumn = (e) =>{
    setAudioVolume(e.target.value)
   const audios = audioClips.map(sound => document.getElementById(sound.keyTrigger));
    audios.forEach(audio =>{
      if(audio){
        audio.volume = parseFloat(e.target.value);
      }
    })
  }

  useEffect(()=>{
    const e ={
        target:{
            value: audioVolume
        }
    }
    changeAudioVolumn(e)
  }, [])

    return (
        <div style={{height:"100%"}}>
            <form className='d-flex flex-column align-items-center justify-content-center h-100 fw-bolder fs-5'>

                <p className='mb-0'>POWER</p>
                <div className="toggleBtn">   
                    <div className='switch' style={{float:`${power ? 'right':'left'}`}} onClick={()=>{machineState()}}></div>
                </div>

                <div className='my-3 Info' id='display'>
                    {key_Press}
                </div>

                <input type="range" className="form-range w-50 my-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded" min="0" max="1" step={0.01} value={audioVolume} id="customRange1" onChange={(e)=>changeAudioVolumn(e)}></input>

                <p className='mb-0'>BANK</p>
                <div className="toggleBtn">   
                    <div className='switch' style={{float:"left"}}></div>
                </div>

            </form>
        </div>
    )
}

export default DrumTools