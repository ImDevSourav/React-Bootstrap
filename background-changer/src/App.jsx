import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('white');
  const [animationClass, setAnimationClass] = useState('');

  function changeColor(newColor) {
    setAnimationClass(''); // Reset animation class for re-triggering
    setTimeout(() => {
      setColor(newColor); // Set the new color after a delay to match animation duration
      setAnimationClass('color-transition'); // Apply animation class
    }, 10); // Small delay to allow the animation to reset
  }

  return (
    <>
      <div className={`w-full h-screen ${animationClass}`} style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
            <button onClick={() => changeColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>
              Red
            </button>
            <button onClick={() => changeColor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>
              Green
            </button>
            <button onClick={() => changeColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
