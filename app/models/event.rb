# == Schema Information
#
# Table name: events
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  description :text             not null
#  date        :string           not null
#  time        :string           not null
#  address     :string           not null
#  city_id     :integer          not null
#  host_id     :integer          not null
#

class Event < ApplicationRecord
  validates :name, :description, :date, :time, :address, :city_id, :host_id, presence: true


  belongs_to :host, {
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User
  }

  belongs_to :city, {
    primary_key: :id,
    foreign_key: :city_id,
    class_name: :City
  }

end
