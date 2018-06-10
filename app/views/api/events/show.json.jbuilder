json.event do
  json.extract! @event
end

json.city do
  json.set! @event.city_id do
    json.extract! @event.city
  end
end
