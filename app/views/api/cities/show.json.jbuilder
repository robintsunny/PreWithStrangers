json.set! :city do
  json.set! @city.id do
      json.extract! @city, :id
    end
  end
end

json.set! :events do
  json.set! @city.id do
      json.extract! @city
    end
  end
end
