class Api::RsvpsController < ApplicationController
  def create
    @rsvp = Rsvp.new(rsvp_params)
    if @rsvp.save
      render :show
    else
      render json: @rsvp.errors.full_messages, status: 422
    end
  end

  def destroy
    @rsvp = current_user.rsvps.find(params[:id])
    @rsvp.destroy
    render :show
  end

  def rsvp_params
    params.require(:rsvp).permit(:user_id, :event_id)
  end


end
