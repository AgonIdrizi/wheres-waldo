class Puzzle < ApplicationRecord
  has_many :characters, dependent: :destroy
end
