import elasticsearch from 'elasticsearch';
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

const create = async (index, type, first_name, last_name, location) => {
    let id = 1;

    console.log('elastic', Elasticsearch)
    await Elasticsearch.create({
        index,
        type,
        id,
        body: {
            first_name,
            last_name,
            location,
        },
    }, (e, r) => {
        console.log(`Inserted into Elasticsearch ${index} with id`, r._id);
    });
}

const search = async (value) => {
    const result = await Elasticsearch.search({ q: value });
    return results;
}

export {
    create,
    search
}
