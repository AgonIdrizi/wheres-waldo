class Score < ApplicationRecord
  belongs_to :puzzle
  belongs_to :player

  def update_done_time
  	self[:done_at] = Time.now
  	self[:time] = self[:done_at] - self[:created_at]
  	save
  end

  def self.top_ten_scores id
  	scores = Puzzle.find(id).scores.includes(:player).where('time not ?', nil).order(time: :asc).limit(10)

  	scores.map {|elem| { id:elem.id, name:elem.player.name, time:elem.time}}
  end

end
