if @events
  json.events do
    @events.each do |event|
      json.set! event.id do
        json.extract! event, :id, :name, :description, :date,:time, :address, :city_id, :host_id
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


else
  json.joined_events do
    @joined_events.each do |event|
      json.set! event.id do
        json.extract! event, :id, :name, :description, :date,:time, :address, :city_id, :host_id
      end
    end
  end

  json.hosted_events do
    @hosted_events.each do |event|
      json.set! event.id do
        json.extract! event, :id, :name, :description, :date,:time, :address, :city_id, :host_id
      end
    end
  end

  json.rsvps do
    @rsvps.each do |rsvp|
      json.set! rsvp.id do
        json.extract! rsvp, :id, :event_id, :user_id
      end
    end
  end


end
