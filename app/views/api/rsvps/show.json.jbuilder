json.rsvp do
  json.extract! @rsvp, :id, :user_id, :event_id
end

json.event do
  json.extract! @rsvp.event, :id, :name, :description, :date, :time, :address, :city_id, :host_id
  json.host do
    json.extract! @rsvp.event.host, :fname, :id, :email
  end
end
