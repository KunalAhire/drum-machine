import React, { useEffect } from "react";
import { audioClips } from "../config/audioData";
import { useDispatch, useSelector } from "react-redux";
import { keyPress } from "./../redux/actions/index";
const DrumPads = () => {
  const dispatch = useDispatch();
  const { power } = useSelector((state) => state.powerReducer);
  const playSound = (e) => {
    if (power) {
      const audioTag = document.getElementById(e);
      if (audioTag && audioTag !== null) {
        dispatch(keyPress(e));
        audioTag.currentTime = 0;
        audioTag.play();
      }
    }
  };

  const handleKeyDown = (e) => {
    if (power) {
      switch (e.key) {
        case "q":
          const q = document.getElementById("Heater-1");
          q.classList.toggle("drum-active");
          setTimeout(() => {
            q.classList.toggle("drum-active");
          }, 100);
          break;

        case "w":
          const w = document.getElementById("Heater-2");
          w.classList.toggle("drum-active");
          setTimeout(() => {
            w.classList.toggle("drum-active");
          }, 100);
          break;

        case "e":
          const e = document.getElementById("Heater-3");
          e.classList.toggle("drum-active");
          setTimeout(() => {
            e.classList.toggle("drum-active");
          }, 100);
          break;

        case "a":
          const a = document.getElementById("Heater-4");
          a.classList.toggle("drum-active");
          setTimeout(() => {
            a.classList.toggle("drum-active");
          }, 100);
          break;

        case "s":
          const s = document.getElementById("Clap");
          s.classList.toggle("drum-active");
          setTimeout(() => {
            s.classList.toggle("drum-active");
          }, 100);
          break;

        case "d":
          const d = document.getElementById("Open-HH");
          d.classList.toggle("drum-active");
          setTimeout(() => {
            d.classList.toggle("drum-active");
          }, 100);
          break;

        case "z":
          const z = document.getElementById("Kick-n'-Hat");
          z.classList.toggle("drum-active");
          setTimeout(() => {
            z.classList.toggle("drum-active");
          }, 100);
          break;

        case "x":
          const x = document.getElementById("Kick");
          x.classList.toggle("drum-active");
          setTimeout(() => {
            x.classList.toggle("drum-active");
          }, 100);
          break;

        case "c":
          const c = document.getElementById("Closed-HH");
          c.classList.toggle("drum-active");
          setTimeout(() => {
            c.classList.toggle("drum-active");
          }, 100);
          break;

        default:
          break;
      }
      return playSound(e.key.toUpperCase());
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
     return () => {
       document.removeEventListener("keydown", handleKeyDown);
     };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overflow-hidden text-center">
      <div className="row g-2">
        {audioClips.map((clips) => {
          return (
            <div
              className="col-4"
              key={clips.id}
              onClick={() => {
                playSound(clips.keyTrigger);
              }}
            >
              <div className={`p-4 drum-pad`} id={clips.id}>
                <audio
                  className="clip"
                  id={clips.keyTrigger}
                  src={clips.url}
                ></audio>
                {clips.keyTrigger}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DrumPads;
