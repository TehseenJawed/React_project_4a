import React, {useState} from 'react';
import './App.css';
import useWebAnimations, {zoomIn} from "@wellyshen/use-web-animations";
import FrameMoon from './img/frame_moon.png';
import Framecenter from './img/frame_center.png';
import Framefront from './img/frame_front.png';
import Frameclouds from './img/frame_clouds.png';
import MainObject from './img/main_object.gif';
import Killer from './img/people.gif';
import CowPower from './img/cowpower.png';

export default function App() {
  let [killerSpeed, setKillerSpeed] = useState(0);
  let [power, setpower] = useState('');
  let [count, setcount] = useState(1)

  const { ref: cloud1, playState: cloudplayState1 } = useWebAnimations({
    keyframes: [
      {transform:"translate(170%,0)"},
      {transform:"translate(-110%,0)"},
      
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 13000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      // direction: , // Run the animation forwards and then backwards
      
    },
  }); 
  const { ref: cloud2, playState: cloudplayState2 } = useWebAnimations({
    keyframes: [
      {transform:"translate(70%,0)"},
      {transform:"translate(-230%,0)"},
      
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 20000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      // direction: , // Run the animation forwards and then backwards
      
    },
  }); 
  const { ref: frontFrame, playState: frontFrameplayState } = useWebAnimations({
    keyframes: [
      {transform:"translate(0%,0)"},
      {transform:"translate(-100.2%,0)"},
      
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 2000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      // direction: , // Run the animation forwards and then backwards
      
    },
  }); 
  const { ref: frontFrame2, playState: frontFrameplayState2 } = useWebAnimations({
    keyframes: [
      {transform:"translate(0%,0)"},
      {transform:"translate(-100.2%,0)"},
      
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 2000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      // direction: , // Run the animation forwards and then backwards
      
    },
  }); 
  
  const { ref: backgroundanim, playState: backgroundanimplayState } = useWebAnimations({
    keyframes: [
      {transform:"translate(0%,0)"},
      {transform:"translate(-100.2%,0)"},
      
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 20000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      // direction: , // Run the animation forwards and then backwards
      
    },
  }); 
  const { ref: backgroundanim2, playState: backgroundanimplayState2 } = useWebAnimations({
    keyframes: [
      {transform:"translate(0%,0)"},
      {transform:"translate(-100.2%,0)"},
      
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 20000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      // direction: , // Run the animation forwards and then backwards
      
    },
  });

  const { ref: killer, playState: killerplayState2 } = useWebAnimations({
    keyframes: [
      // {transform:"translate(0%,0)"},
      {transform:`translate(${killerSpeed}%,0)`},
      
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 20000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate",
    },
  }); 
  const { ref, playState } = useWebAnimations({
    keyframes: [
      {transform:"translate(-0%,0%)"},
      {transform: power},
      
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 800, // Run for 1000ms
      // iterations: Infinity, // Repeat once
      direction: "alternate",
    },
  });
  
  const { keyframes, timing } = zoomIn;
  const { ref:ref_font } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 1000, // Delay 1s
      duration: timing.duration * 1, // Speed up the animation
      // iterations:Infinity,
    },
  });
  
  return (
    <div>
      <img className='frameset' src={FrameMoon}/>
      <img className='frameset adjustcloud' ref={cloud1} src={Frameclouds}/>
      <img className='frameset adjustcloud1' ref={cloud2} src={Frameclouds}/>
      <img className='frameset adjustcenter' ref={backgroundanim} src={Framecenter}/>
      <img className='frameset adjustcenter newalign' ref={backgroundanim2} src={Framecenter}/>
      <img className='frameset adjustfront' ref={frontFrame} src={Framefront}/>
      <img className='frameset adjustfront newalign' ref={frontFrame2} src={Framefront}/>
      <img className='frameset setMainObj' src={MainObject} />
      <img className='frameset setMainObj setkiller' ref={killer} src={Killer} />
      <img className='frameset setCowpower' ref={ref} src={CowPower} />
        <div className='message' ref={ref_font}>
          <h4>Game Name: Catch the Cow</h4>
          <h2>Happy Eid - ul - Adha By <br /> Theseen Jawed</h2>
        </div>
      <div className='frameset color_adjust'>
        <button onClick={()=> setKillerSpeed(killerSpeed+6)}>Increase Speed</button>
        <button onClick={()=> setKillerSpeed(killerSpeed-6)}>Slowdown Speed</button>
  <button onClick={()=> {setpower("translate(-1000%,100%)"); setcount(count-1);} }>Cow Power {count}</button>
      </div>

    </div>
  );
}
