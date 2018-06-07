class AddIndexAndConstraints < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :email, unique: true
    remove_column :users, :home_city_id, :integer
    add_column :users, :home_city_id, :integer
  end
end
