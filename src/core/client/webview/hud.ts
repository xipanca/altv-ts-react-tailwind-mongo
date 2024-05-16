import * as alt from 'alt-client';

let view: alt.WebView;

const Hud = async () => {
    view = new alt.WebView('http://assets/webviews/index.html#/hud');
    await new Promise((resolve: (...args: any[]) => void) => {
        view.once('load', resolve);
    });
    view.emit('hud:Init', alt.Player.local.name);
};
alt.on('connectionComplete', () => {
    Hud();
});

alt.setInterval(() => {
    if (!view) return;
    let health = alt.Player.local.health - 100;
    view.emit('hud:update:health', health);
}, 100);
