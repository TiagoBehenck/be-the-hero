import { errors } from 'celebrate';
import express from 'express';
import cors from 'cors';

import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.server.use(express.json());
    this.server.use(errors());
    this.server.use(cors());
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
