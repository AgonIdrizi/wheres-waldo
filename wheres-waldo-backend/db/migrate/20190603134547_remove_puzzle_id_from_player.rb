class RemovePuzzleIdFromPlayer < ActiveRecord::Migration[5.2]
  def change
  	remove_column :players, :puzzle_id , :integer
  end
end
