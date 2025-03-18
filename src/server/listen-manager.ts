import createDebug from 'debug';
import { Server } from 'node:http';


const debug = createDebug('app:listen-manager');


export const listenManager = (server: Server) => {
    const addr = server.address();
    if (addr === null) return;
    let bind: string;
    if (typeof addr === 'string') {
        bind = 'pipe ' + addr;
    } else {
        bind =
            addr.address === '::'
                ? `http://localhost:${addr?.port}`
                : `${addr.address}:${addr?.port}`;
    }
    if (!process.env.DEBUG) {
        console.log(`Server listening on ${bind}`);
    } else {
        debug(`Servidor escuchando en ${bind}`);
    }
};
