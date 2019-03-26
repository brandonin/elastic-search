import { create } from '../elastic-search/elastic-search';
const createUser = async (_, { index, type, first_name, last_name, location }, { prisma }) => {
    let createUser = await prisma.createUser({
        first_name,
        last_name,
        location
    })

    // We might not need to do await for this since we are already doing it inside the helper method.
    await create(index, type, first_name, last_name, location);

    return createUser;
}

export {
    createUser
}
