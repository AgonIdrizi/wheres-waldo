class Character < ApplicationRecord
  belongs_to :puzzle, optional: true
  validates :puzzle_id, presence: true, uniqueness: {scope: :puzzle_id }
  validates_presence_of :name, 
  						:top_left_x, 
  						:top_left_y, 
  						:width, 
  						:height
  
end
