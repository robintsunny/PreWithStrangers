# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_07_170421) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string "name", null: false
    t.index ["name"], name: "index_cities_on_name", unique: true
  end

  create_table "events", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.string "date", null: false
    t.string "time", null: false
    t.string "address", null: false
    t.integer "city_id", null: false
    t.integer "host_id", null: false
    t.index ["city_id"], name: "index_events_on_city_id"
    t.index ["host_id"], name: "index_events_on_host_id"
  end

  create_table "rsvps", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "event_id", null: false
    t.index ["event_id"], name: "index_rsvps_on_event_id"
    t.index ["user_id"], name: "index_rsvps_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "fname"
    t.string "email"
    t.integer "home_city_id", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["home_city_id"], name: "index_users_on_home_city_id"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
