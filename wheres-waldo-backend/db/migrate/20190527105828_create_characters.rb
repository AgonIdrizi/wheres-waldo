class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :top_left_x
      t.integer :top_left_y
      t.integer :width
      t.integer :height
      t.references :puzzle, foreign_key: true

      t.timestamps
    end
  end
end
