This project is to architect and properly implement an Elastic Search solution.

This project is utilizing AWS' cloud elastic search and prisma with a MySQL Database utilizing GraphQL to reduce the amount of configurations to launch the project.

To install dependencies

    npm install

If you would like to add additional dependencies, simply run

    npm install --save <package-name>

To run the test suite

    npm test


Example CURL command for GET:

curl -XGET https://search-signafireapi-3yocmsnbm4j4wp3z72fx7ifwbi.us-east-2.es.amazonaws.com/foo_index/_search/?q="first_name:fred"

Example CURL command for POST:

curl -XPOST https://search-signafireapi-3yocmsnbm4j4wp3z72fx7ifwbi.us-east-2.es.amazonaws.com/foo_index/docs/1 -d '{"first_name": "fred"}' -H'Content-Type: application/json'
