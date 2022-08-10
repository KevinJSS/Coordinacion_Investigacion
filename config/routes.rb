Rails.application.routes.draw do
  resources :investigators
  resources :projects

  #Root page
  root "pages#home"
end
