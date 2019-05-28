class RemoveImgUrlfromPlayers < ActiveRecord::Migration[5.2]
  def change
  	remove_column :players, :imgUrl
  end
end
