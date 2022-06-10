Rails.application.routes.draw do
  namespace :api do 

    resources :workout_exercises
    resources :workouts
    resources :exercises
    resources :users

    get '/me', to: 'users#show'
    post '/signup', to: 'users#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    get '/hello', to: 'application#hello_world'
  end 
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
