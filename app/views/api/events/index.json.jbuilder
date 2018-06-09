json.events do
  @events.each do |event|
    json.set! event.id do
      json.extract! event
    end
  end
end

json.cities do
  @events.each do |event|
    json.set! event.city.id do
      json.extract! event.city
    end
  end
end
