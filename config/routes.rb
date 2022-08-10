Rails.application.routes.draw do
  devise_for :users
  #Resources
  resources :investigators
  resources :projects

  #Root page
  root "pages#home"
end
