class Score < ApplicationRecord
  belongs_to :puzzle
  belongs_to :player

  def update_done_time
  	self[:done_at] = Time.now
  	self[:time] = self[:done_at] - self[:created_at]
  	save
  end


end
