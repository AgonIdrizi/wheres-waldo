Rails.application.routes.draw do
  resources :puzzles , only: [:index]
  
end