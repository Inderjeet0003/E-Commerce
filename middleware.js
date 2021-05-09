const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'You need to Login First')
        res.redirect('/login')
    }
    next()
}

module.exports = {
    isLoggedIn
}