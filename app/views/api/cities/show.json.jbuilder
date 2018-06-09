json.extract! @city, :id, :name

json.citizens @city.citizens, :id
