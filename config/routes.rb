Rails.application.routes.draw do
  resources :records
  devise_for :users, controllers: { sessions: "users/sessions", registrations: "users/registrations" }
  resources :investigators
  resources :projects

  #Root page
  root "pages#home"
end
