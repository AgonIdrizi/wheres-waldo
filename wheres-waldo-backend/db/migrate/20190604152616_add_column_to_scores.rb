class AddColumnToScores < ActiveRecord::Migration[5.2]
  def change
    add_column :scores, :done_at, :datetime
  end
end
