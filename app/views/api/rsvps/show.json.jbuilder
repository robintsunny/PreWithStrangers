json.rsvp @rsvp, :user_id, :event_id

json.event do
  json.extract! @event, :id, :name, :description, :date, :time, :address, :city_id, :host_id
  json.host do
    json.extract! @event.host, :fname, :id, :email
  end
end
