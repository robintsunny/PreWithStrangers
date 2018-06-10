json.cities do
  @cities.each do |city|
    json.set! city.id do
      json.extract! city, :id, :name, :event_ids
    end
  end
end

json.events do
  @cities.each do |city|
    city.events.each do |event|
      json.set! event.city.id do
        json.extract! event.city
      end
    end
  end
end
