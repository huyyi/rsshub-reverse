module.exports = function (router) {
    router.get('/:url', require('./reverse'));
};
