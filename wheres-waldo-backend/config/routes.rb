Rails.application.routes.draw do
  get 'players/create'
  resources :puzzles , only: [:index]
  resources :players , only: [:create]
  get "puzzle-character-locations/:id", to: "puzzles#find_puzzle_character_location"
end
