class ScoresController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
  	@scores = Puzzle.find(params[:puzzle_id]).scores.where('time not ?', nil).order(time: :asc).limit(10)
  end

  def create
  	@puzzle = Puzzle.find(params[:puzzle_id])
  	@score = @puzzle.scores.build(player_id: params[:player_id])
  	if @score.save
  	  respond_to do |format|
  	  	format.json { render json: @score.to_json}
  	  end
  	end
  end

  def update
  	@score = Score.find(params[:id])
  	
  	if @score.update_done_time
  	  respond_to do |format|
  	    format.json { render json: @score.to_json}
  	  end
  	end
  end
end
