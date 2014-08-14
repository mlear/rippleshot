
function Tweet(content, username, latitude, longitude, id, created_at) {
    this.id = id;
    this.username = username;
    this.content = content;
    this.latitude = latitude;
    this.longitude = longitude;
    this.createdAt = created_at;
}

window.tweetArray = [];
window.searchArray = []
var lastTweet;

$(document).ready(function () {

    getTweetsFromServer();
    var load = setInterval(getTweetsFromServer, 500);

    function getTweetsFromServer(){
        console.log('number of tweets:' + window.tweetArray.length)
        $.ajax({
            type: 'get',
            url: '/tweets',
            dataType: 'json',
            data: {
                count: (window.tweetArray.length += 100)
            },
            success: function(data){
                console.log(data['length']);
                killIfNoNewTweets(data);
                cycleTweets(data);
            }
        })
    }

    function killIfNoNewTweets(data) {
        if (data['length'] === 0) {
            clearInterval(load);
        }
    }

    var counter;

    function errorMessage(data) {
        console.log('error');
    }

    function cycleTweets(tweets) {
        console.log('cycleTweets ' + tweets);
        console.log('cycling them tweets...starting at #' + tweets.length);
        for (key in tweets) {
            createTweetObject(tweets[key], key);
        }
    }

// {}

    function createTweetObject(tweet, index) {
        aTweet = new Tweet(tweet.content, tweet.username, tweet.latitude , tweet.longitude, index);
        window.searchArray.push(aTweet)
        window.tweetArray.push(aTweet);
            // you can create anything you want with each tweet here
    }
});

