Rails.application.routes.draw do
  resources :agreements
  resources :records
  resources :investigators
  resources :projects
  devise_for :users, controllers: { sessions: "users/sessions", registrations: "users/registrations" }

  #Root page
  root "pages#home"
end
