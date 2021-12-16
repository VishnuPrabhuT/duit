function isAuthenticated(req, res, next) {
    console.log(req.session.id);
    res.locals.isLoggedIn = false;
    next();
}

exports.isAuthenticated = isAuthenticated;
