import React from 'react';
import LineRadius from './icon/LineRadius/LineRadius';
import Logo from './icon/Logo/Logo';
import LightBottom from './component/background/LighBottom/LightBottom';
import LightTop from './component/background/LigthTop/LightTop';
import './App.css';

function App() {
  return (
    <div className="shadow-2xl w-full h-full relative bg-background">
      <div className='shadow absolute z-10'></div>
        <LightTop/>
        <LineRadius/>
        <Logo/>
        <LightBottom/>

    </div>
  );
}

export default App;
