import express from 'express';
import { json as parseJsonBody, urlencoded } from 'body-parser';

import { register as registerElasticSearch } from './measurements/elastic-search-routes';

const server = express();

// all requests and responses are in JSON
server.use(urlencoded({extended: true}));
server.use(parseJsonBody());

server.get('/', (req, res) => res.send('Weather tracker is up and running!\n'));

registerElasticSearch(server);

export default server;
