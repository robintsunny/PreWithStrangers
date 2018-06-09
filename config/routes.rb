Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create,:destroy]
    resources :users, only: [:create]
    resources :cities, only: [:index, :show]
    resources :events, only: [:index, :show, :create, :udpate, :delete]
  end

  root "static_pages#root"
end
