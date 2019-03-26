const info = () => `This is the API of an elastic-search project for Signafire`;
const users = (root, args, { prisma }, info) => prisma.users();

export {
    info,
    users
}
