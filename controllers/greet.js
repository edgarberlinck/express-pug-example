module.exports = app => {
    app.get('/greet/:name', (req, res) => {
        const { name } = req.params;

        res.render('greet', { name });
    })
}