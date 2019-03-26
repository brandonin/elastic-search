import Elasticsearch from 'elasticsearch';
const host = "https://search-signafireapi-3yocmsnbm4j4wp3z72fx7ifwbi.us-east-2.es.amazonaws.com/";


const Elasticsearch = new elasticsearch.Client({
    host,
    log: 'trace',
});

// const userSchema = {
//     first_name: null,   // first_name: String
//     last_name: null,    // last_name: String
//     location: null,     // location: String
// }

const create = (index, type, body) => {
    let id = 1;

    Elasticsearch.create({
        index,
        type,
        id,
        body,
    }, (e, r) => {
        console.log(`Inserted into Elasticsearch ${index} with id`, r._id);
    });
}

export default {
    create
}
