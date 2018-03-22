var express = require('express');
var router = express.Router();

/* GET home page. */
var jeff = setInterval(pickWord(words), 1000);

var words = ["Search...", "Keyword", "Restraunt Name", "Cuisine i.e.Chineese", "postcode"];
function pickWord(wordsArray) {
    var rand = wordsArray[math.floor(Math.random() * wordsArray.length)];
    var pickedWord = wordsArray[rand];
    return pickedWord;
}

/* GET home page. */
router.get('/welcome', function(req, res, next) {
    res.render('welcome', { title: 'COM3504' });
});

module.exports = router;
