Rails.application.routes.draw do
  #Resources
  resources :investigators
  resources :projects

  #Root page
  root "pages#home"
end
