class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null:false
      t.text :description, null:false
      t.string :date, null:false
      t.string :time, null: false
      t.string :address, null:false
      t.integer :city_id, null: false
      t.integer :host_id, null: false
    end
    add_index :events, :city_id
    add_index :events, :host_id
  end
end
