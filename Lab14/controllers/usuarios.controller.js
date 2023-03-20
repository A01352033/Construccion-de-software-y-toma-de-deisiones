exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/lab14/login'); 
    });
};