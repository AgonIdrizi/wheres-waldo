class PuzzlesController < ApplicationController
  def index
  	@puzzles = Puzzle.with_character_data
  	respond_to do |format|
  		format.json { render json: @puzzles } 
  	end

  end
end
