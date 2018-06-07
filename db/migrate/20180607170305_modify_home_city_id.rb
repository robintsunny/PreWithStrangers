class ModifyHomeCityId < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :home_city_id, :integer
    add_column :users, :home_city_id, :integer, null: false
  end
end
