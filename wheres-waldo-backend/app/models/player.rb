class Player < ApplicationRecord
  has_many :scores, dependent: :destroy
  has_many :puzzles, through: :scores

  before_save :guest_name

  def guest_name
   self.name =  self.name == '' ? "Guest #{Player.count+1}" : self.name
  end
end
