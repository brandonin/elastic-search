import express from 'express';
import ElasticSearch from './elastic-search';
import { HttpError } from '../errors';

const router = express.Router();
export function register(app) {
    app.use('/elastic-search', router);
}

router.post('/', (req, res) => {
    throw new Error(501);
});
