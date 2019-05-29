Rails.application.routes.draw do
  resources :puzzles , only: [:index]
  get "puzzle-character-locations/:id", to: "puzzles#find_puzzle_character_location"
end
