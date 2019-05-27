class Puzzle < ApplicationRecord
  has_many :characters, dependent: :destroy

  #scope :with_character_data

  def self.with_character_data
  	puzzles_with_characters = []
  	puzzles = self.includes(:characters).all
  	puzzles.each do |puzzle|
  	  puzzles_with_characters.push({puzzle: puzzle }.merge(characters: puzzle.characters) )
  	end
  	puzzles_with_characters
  end
end
