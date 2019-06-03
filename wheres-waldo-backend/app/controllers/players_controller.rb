class PlayersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
  	@player = Player.new(name: params[:name])

  	if @player.save
  	  respond_to do |format|
  	  	format.json { render json: @player.to_json}
  	  end
  	end
  end
end
