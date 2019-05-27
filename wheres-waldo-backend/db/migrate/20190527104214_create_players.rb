class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.references :puzzle, foreign_key: true
      t.string :name
      t.string :imgUrl

      t.timestamps
    end
  end
end
