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

  # If the provided position is in the character, return the
  # location of the character; else return false
  def character_location(x, y, character_name)
    character = self.characters.select do |xter|
      xter.name == character_name
    end.first

    return false if character.nil?

    if ( x.to_i.between?(character.top_left_x.to_i, 
                    character.top_left_x.to_i + character.width.to_i) &&
         y.to_i.between?(character.top_left_y.to_i, 
                    character.top_left_y.to_i + character.height.to_i) )
      { name: character.name, x: character.top_left_x, 
        y: character.top_left_y, width: character.width, 
        height: character.height, found: true }
    else
      {found: false}
    end
  end
end
