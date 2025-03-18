import { createServer } from 'node:http';
import createDebug from 'debug';
import { listenManager } from './server/listen-manager.js';
import { errorManager } from './server/error-manager.js';
import { createApp } from './app.js';



const debug = createDebug('app:index');

debug('Starting server from index...');

const PORT = process.env.PORT || 3000;

try{
    const server = createServer(createApp());
    server.listen(PORT);
    server.on('listening', () => listenManager(server));
    server.on('error', errorManager)
} catch (error) {
    console.error('Server Error:',error);
    process.exit(1);
}