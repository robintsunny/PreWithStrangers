class ModifyUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :fname, :string
    add_column :users, :email, :string
    add_column :users, :home_city_id, :integer
    remove_column :users, :username
  end
end
