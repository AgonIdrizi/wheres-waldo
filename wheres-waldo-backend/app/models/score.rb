class Score < ApplicationRecord
  belongs_to :puzzle
  belongs_to :player
end
