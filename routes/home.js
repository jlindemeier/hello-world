
// handler for homepage
exports.index = function(req, res) {
  res.render('home', { title: 'jQueryUI', version: 'v0.0.2'});
};


