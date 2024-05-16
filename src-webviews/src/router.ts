import { createHashRouter } from 'react-router-dom';
import App from './App';
import Hud from './hud/page';
const router = createHashRouter(
    [
        {
            path: '/',
            Component: App,
        },
        {
            path: '/hud',
            Component: Hud,
        },
    ],
    { basename: '/' }
);

export default router;
