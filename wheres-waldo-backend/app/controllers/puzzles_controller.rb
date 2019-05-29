class PuzzlesController < ApplicationController
  def index
  	@puzzles = Puzzle.with_character_data
  	respond_to do |format|
  		format.json { render json: @puzzles } 
  	end
  end

  	def find_puzzle_character_location
  	  @character = Puzzle.find_by(id: params[:id]).character_location(608, 631, 'waldo')
  		#@character.character_location(608, 631, 'waldo')
  	  #debugger
      respond_to do |format|
        render :json => { 
         :status => :ok, 
         :message => @character
      }.to_json and return
      end
  
  end
end
