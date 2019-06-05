Rails.application.routes.draw do
  get 'scores/index'
  get 'scores/create'
  get 'players/create'
  resources :puzzles , only: [:index]
  resources :players , only: [:create]
  resources :scores , only: [:create, :index, :update]
  get "puzzle-character-locations/:id", to: "puzzles#find_puzzle_character_location"
end
