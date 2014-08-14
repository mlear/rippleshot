class Backlog
  include Sidekiq::Worker

  def perform(tweet)
    Tweet.create(tweet)
  end

end
