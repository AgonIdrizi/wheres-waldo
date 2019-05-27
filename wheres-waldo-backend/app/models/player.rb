class Player < ApplicationRecord
  belongs_to :puzzle, optional: true
end
