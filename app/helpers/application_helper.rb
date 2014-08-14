module ApplicationHelper
	def prepare(tweets)
    tweets_hash = {}
    @tweets.each do |tweet|
      p "#{tweet.latitude}, #{tweet.longitude}"
      tweets_hash["#{tweet.id - 1}"] = {
        content: tweet.content,
        username: tweet.username,
        latitude: tweet.latitude,
        longitude: tweet.longitude,
        chart: tweet.created_at.strftime("%I:%M%p")
      }
    end
    tweets_hash["length"] = @tweets.length
    tweets_hash
  end
end
