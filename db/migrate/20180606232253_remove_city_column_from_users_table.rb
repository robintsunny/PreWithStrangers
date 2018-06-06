class RemoveCityColumnFromUsersTable < ActiveRecord::Migration[5.2]
  def change
  end
  remove_column :users, :hometown_id
end
