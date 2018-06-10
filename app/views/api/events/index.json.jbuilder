json.events do
  @events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :name, :description, :time, :address, :city_id, :host_id
    end
  end
end

json.cities do
  @events.each do |event|
    json.set! event.city.id do
      json.extract! event.city, :id, :name, :event_ids
    end
  end
end
