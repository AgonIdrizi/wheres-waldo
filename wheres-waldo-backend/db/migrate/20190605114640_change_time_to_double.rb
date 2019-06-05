class ChangeTimeToDouble < ActiveRecord::Migration[5.2]
  def change
  	change_column :scores, :time, :double, scale: 2
  end
end
