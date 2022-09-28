module.exports = (router) => {
    router.get('/channels/:id', require('./channels'));
};
