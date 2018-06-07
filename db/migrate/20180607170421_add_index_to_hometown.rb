class AddIndexToHometown < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :home_city_id
  end
end
