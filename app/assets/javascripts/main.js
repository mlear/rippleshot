
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
window.data = [{timeOfTweet: "9:00pm", tweets: 0}, 
            {timeOfTweet: "10:00pm", tweets: 0}, 
            {timeOfTweet: "11:00pm", tweets: 0}, 
            {timeOfTweet: "12:00am", tweets: 0}, 
            {timeOfTweet: "1:00am", tweets: 0}, 
            {timeOfTweet: "2:00am", tweets: 0}, 
            {timeOfTweet: "3:00am", tweets: 0}, 
            {timeOfTweet: "4:00am", tweets: 0}, 
            {timeOfTweet: "5:00am", tweets: 0}, 
            {timeOfTweet: "6:00am", tweets: 0}, 
            {timeOfTweet: "7:00am", tweets: 0}, 
            {timeOfTweet: "8:00am", tweets: 0}, 
            {timeOfTweet: "9:00am", tweets: 0}, 
            {timeOfTweet: "10:00am", tweets: 0},
            {timeOfTweet: "11:00am", tweets: 0},
            {timeOfTweet: "12:00pm", tweets: 0},
            {timeOfTweet: "1:00pm", tweets: 0}];
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

    function createTweetObject(tweet, index) {
        console.log(tweet)
        aTweet = new Tweet(tweet.content, tweet.username, tweet.latitude , tweet.longitude, index);
          if (tweet.chart > "02:00AM" && tweet.chart < "03:00AM") {
            window.data[0].tweets ++;
          } else if (tweet.chart > "03:00AM" && tweet.chart < "04:00AM") {
            window.data[1].tweets ++;
          }else if (tweet.chart > "04:00AM" && tweet.chart < "05:00AM") {
            window.data[2].tweets ++;
          }else if (tweet.chart > "05:00AM" && tweet.chart < "06:00AM") {
            window.data[3].tweets ++;
          }else if (tweet.chart > "06:00AM" && tweet.chart < "07:00AM") {
            window.data[4].tweets ++;
          }else if (tweet.chart > "07:00AM" && tweet.chart < "08:00AM") {
            window.data[5].tweets ++;
          }else if (tweet.chart > "08:00AM" && tweet.chart < "09:00AM") {
            window.data[6].tweets ++;
          }else if (tweet.chart > "09:00AM" && tweet.chart < "10:00AM") {
            window.data[7].tweets ++;
          }else if (tweet.chart > "10:00AM" && tweet.chart < "11:00AM") {
            window.data[8].tweets ++;
          }else if (tweet.chart > "11:00AM" && tweet.chart < "12:00PM") {
            window.data[9].tweets ++;
          }else if (tweet.chart > "12:00PM" && tweet.chart < "01:00PM") {
            window.data[10].tweets ++;
          }else if (tweet.chart > "01:00PM" && tweet.chart < "02:00PM") {
            window.data[11].tweets ++;
          }else if (tweet.chart > "02:00PM" && tweet.chart < "03:00PM") {
            window.data[12].tweets ++;
          }else if (tweet.chart > "03:00PM" && tweet.chart < "04:00PM") {
            window.data[13].tweets ++;
          }else if (tweet.chart > "04:00PM" && tweet.chart < "05:00PM") {
            window.data[14].tweets ++;
          }else if (tweet.chart > "05:00PM" && tweet.chart < "06:00PM") {
            window.data[15].tweets ++;
          }else if (tweet.chart > "06:00PM" && tweet.chart < "07:00PM") {
            window.data[16].tweets ++;
          }
        console.log("this is the window data: " + window.data[0].tweets)
        window.searchArray.push(aTweet);
        window.tweetArray.push(aTweet);
            // you can create anything you want with each tweet here
    }
});

