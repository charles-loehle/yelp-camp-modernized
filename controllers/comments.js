const Campground = require('../models/Campground');

// @desc      Show the create new comment page
// @route     GET /campgrounds/:id/comments/new
// @access    Public
exports.showCreateComment = (req, res) => {
  return res.json(req.params.id);
  // try {
  //   const campground = await Campground.findById(req.params.id);

  //   if (!campground)
  //     return res.status(404).json({ msg: 'Campground not found' });
  //   // return res.json({ success: true, data: campground });
  //   res.render('comments/createComment');
  // } catch (err) {
  //   console.error(err.message);
  //   res.status(500).send('Server error');
  // }
};
