# json.joined_events do
#   @joined_events.each do |event|
#     json.set! event.id do
#       json.extract! event, :id, :name, :description, :date,:time, :address, :city_id, :host_id
#     end
#   end
# end
#
# json.hosted_events do
#   @hosted_events.each do |event|
#     json.set! event.id do
#       json.extract! event, :id, :name, :description, :date,:time, :address, :city_id, :host_id
#     end
#   end
# end
