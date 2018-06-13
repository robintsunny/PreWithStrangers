json.event do
  json.extract! @event, :id, :name, :description, :date, :time, :address, :city_id, :host_id
end

json.host do
  json.extract! @event.host, :fname, :id, :email
end

json.rsvps do
  @event.rsvps.each do |rsvp|
    json.set! rsvp.user_id, rsvp
  end
  json.hello "hello"    # , :id, :event_id, :user_i
end

json.city do
  json.extract! @event.city, :name, :id, :event_ids
end
