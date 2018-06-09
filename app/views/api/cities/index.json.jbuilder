json.cities do
  @cities.each do |city|
    json.set! city.id do
      json.extract! city
    end
  end
end

json.events do
  @cities.events.each do |event|
    json.set! event.city.id do
      json.extract! event.city
    end
  end
end
