class Api::EventsController < ApplicationController

    def index
        @events = Event.all
        render :index
    end

    def show
        @event = Event.find_by(id: params[:id])
        render :show
    end



    def create
      all_params = event_params
      all_params[:city_id] = City.find_by(name: all_params[:city]).id
      all_params.delete(:city)

      @event = Event.new(all_params)

      if @event.save
        render :show
      else
        render json: @event.errors.full_messages, status: 422
      end
    end

    def update
      @event = current_user.events.find(params[:id])

      if @event.update(event_params)
        render :show
      else
        render json: @event.errors.full_messages, status: 422
      end
    end

    def destroy
      @event = current_user.hosted_events.find(params[:id])
      @event.destroy
      render :show
    end


    def event_params
        params.require(:event).permit(:name, :description, :date, :time,
          :address, :city, :host_id)

        #   Originally
        #   params.require(:event).permit(:name, :description, :date, :time,
        #     :address, :city_id, :host_id)
    end

    def user_events
      @events = current_user.joined_events
      render :index
    end



end
