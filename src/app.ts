import express from 'express';
import { resolve } from 'path';
import morgan from 'morgan';
import cors from 'cors';
import createDebug from 'debug';
import { notFoundController, notMethodController } from './controllers/controller.base';
import { errorManager } from './controllers/controller.error.js';


const debug = createDebug('app:server');

debug('Starting server from app...');

export const createApp = () => {
    debug('Creating app...');

    const app = express();
    const _dirname = resolve();
    const publicDir = resolve(_dirname, 'public');


    app.disable('x-powered-by');
    app.use(cors());

    
    if (!process.env.DEBUG) {
        app.use(morgan('dev'));
    }

    app.use(express.static(publicDir));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    return app;


    
   app.get('*', notFoundController);
   app.use('*', notMethodController);
   app.use(errorManager);





}