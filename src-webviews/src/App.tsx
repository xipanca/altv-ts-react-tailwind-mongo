import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { WebViewEvents } from '../../src/core/shared/webviewEvents';

function App() {
    const [count, setCount] = useState(0);
    const [isVisible, setVisibility] = useState(false);

    function invokeEvent() {
        console.log('Test!');

        if ('alt' in window) {
            alt.emit('emitToClient');
        }
    }

    useEffect(() => {
        if (!alt) {
            return;
        }

        alt.on(WebViewEvents.toggleVisibility, (shouldBeVisible: boolean) => {
            setVisibility(shouldBeVisible);
        });
    }, []);

    return (
        <div className={` ${isVisible ? 'flex' : 'hidden'} w-full h-[100vh] justify-center items-center`}>
            <h1 className="text-4xl text-white">Alt:V</h1>
        </div>
    );
}

export default App;
