class CreateScores < ActiveRecord::Migration[5.2]
  def change
    create_table :scores do |t|
      t.date :time
      t.references :player, foreign_key: true
      t.references :puzzle

      t.timestamps
    end
  end
end
