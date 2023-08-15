function adminRoute(req, res) {
    res.json({ message: 'Admin route accessed' });
}
  
function userProfile(req, res) {
    res.json({ message: `Welcome, ${req.user.Id}! You have user-level access.` });
}
  
module.exports = {adminRoute, userProfile };
  