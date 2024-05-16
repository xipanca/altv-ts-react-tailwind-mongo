import React, { useEffect, useState } from 'react';
const Hud = () => {
    const [playerName, setPlayerName] = useState();
    const [health, setHealth] = useState();
    useEffect(() => {
        if (!alt || playerName) {
            return;
        }
        alt.on('hud:Init', (name) => {
            setPlayerName(name);
        });
    }, []);
    useEffect(() => {
        if (!alt) {
            return;
        }
        alt.on('hud:update:health', (health) => {
            setHealth(health);
        });
    }, []);

    return (
        <div className="relative w-full h-[100vh] p-0 m-0 overflow-hidden">
            {/* Player Name */}
            <div className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded">{playerName}</div>

            {/* Health Bar */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-700 w-3/12 h-2 rounded">
                <div className="bg-red-500 h-full rounded" style={{ width: `${health}%` }}></div>
            </div>
        </div>
    );
};
export default Hud;
