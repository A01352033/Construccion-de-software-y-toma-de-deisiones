exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/lab17/login'); 
    });
};