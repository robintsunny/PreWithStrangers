json.event do
  json.extract! @event, :id, :name, :description, :date, :time, :address, :city_id, :host_id
  json.host do
    json.extract! @event.host, :fname, :id, :email
  end
end

json.city do
  json.extract! @event.city, :name, :id, :event_ids
end
