Rails.application.routes.draw do

  root 'tweets#index'
  get '/stream' => 'tweets#stream'
  get '/tweets' => 'tweets#send_tweets'

end
