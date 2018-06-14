# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'


Austin = City.create(name:'Austin')
Chicago = City.create(name:'Chicago')
Denver = City.create(name:'Denver')
LA = City.create(name:'Los Angeles')
Miami = City.create(name:'Miami')
Montreal = City.create(name:'Montreal')
NYC = City.create(name:'New York City')
Philadelphia = City.create(name:'Philadelphia')
Portland = City.create(name:'Portland')
Seattle = City.create(name:'Seattle')
SFBay = City.create(name:'San Francisco / Bay Area')
Toronto = City.create(name:'Toronto')
Vancouver = City.create(name:'Vancouver')
Dublin = City.create(name:'Dublin')
London = City.create(name:'London')
Singapore = City.create(name:'Singapore')
Tokyo = City.create(name:'Tokyo')
Istanbul = City.create(name:'Istanbul')
Seoul = City.create(name:'Seoul')
Sydney = City.create(name:'Sydney')

CITIES = [Austin, Chicago, Denver, LA, Miami, Montreal, NYC, Philadelphia, Portland, Seattle, SFBay,
  Toronto, Vancouver, Dublin, London, Singapore, Tokyo, Istanbul, Seoul, Sydney]

demo_user = User.create(fname: "Randy Savage", password: "savagerandy", email: "randy@gmail.com", home_city:"Austin")


20.times do
  name = Faker::Name.unique.first_name
  email = name+ "@gmail.com"
  password = 'ynnusnibor'
  home_city = CITIES.sample.name
  User.create(fname: name, email: email, password: password, home_city: home_city)
end


40.times do
