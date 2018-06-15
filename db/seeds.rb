# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
Rsvp.destroy_all
Event.destroy_all
City.destroy_all

Austin = City.create!(name:'Austin')
Chicago = City.create!(name:'Chicago')
Denver = City.create!(name:'Denver')
LA = City.create!(name:'Los Angeles')
Miami = City.create!(name:'Miami')
Montreal = City.create!(name:'Montreal')
NYC = City.create!(name:'New York City')
Philadelphia = City.create!(name:'Philadelphia')
Portland = City.create!(name:'Portland')
Seattle = City.create!(name:'Seattle')
SFBay = City.create!(name:'San Francisco / Bay Area')
Toronto = City.create!(name:'Toronto')
Vancouver = City.create!(name:'Vancouver')
Dublin = City.create!(name:'Dublin')
London = City.create!(name:'London')
Singapore = City.create!(name:'Singapore')
Tokyo = City.create!(name:'Tokyo')
Istanbul = City.create!(name:'Istanbul')
Seoul = City.create!(name:'Seoul')
Sydney = City.create!(name:'Sydney')



demo_user = User.create!(fname: "Randy Savage", password: "savagerandy", email: "randy@gmail.com", home_city_id: Austin.id)


20.times do
  name = Faker::Name.unique.first_name
  email = name+ "@gmail.com"
  password = 'ynnusnibor'
  home_city_id = City.all.sample.id
  User.create!(fname: name, email: email, password: password, home_city_id: home_city_id)
end


50.times do
  name = Faker::Dessert.variety + " Time!"
  description = Faker::ChuckNorris.unique.fact
  date = Faker::Date.unique.forward(90)
  time = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'].sample + [':00 ',':30 '].sample + ['AM','PM'].sample
  address = Faker::Address.unique.street_address
  city_id = City.all.sample.id
  host_id = User.all.sample.id
  Event.create!(name: name, description: description, date: date, time: time, address: address, city_id: city_id, host_id: host_id)
end


i = 0
until i == 100
  made = []
  _user = User.all.sample
  _event = Event.all.sample

  if _event.host_id != _user.id && !made.include?([_event.id,_user.id])
    made<< [_event.id,_user.id]
    Rsvp.create!(user_id: _user.id, event_id: _event.id)
    i += 1
  end
end
