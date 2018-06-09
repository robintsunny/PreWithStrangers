# == Schema Information
#
# Table name: cities
#
#  id   :bigint(8)        not null, primary key
#  name :string           not null
#

class City < ApplicationRecord
 validates :name, presence: true, uniqueness: true

 has_many :citizens, {
   primary_key: :id,
   foreign_key: :hometown_id,
   class_name: :User
 }
has_many :events, {
  primary_key: :id,
  foreign_key: :city_id,
  class_name: :Event
}

end
