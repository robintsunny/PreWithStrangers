class Api::UsersController < ApplicationController
  def create
    all_params = user_params
    all_params[:home_city_id] = City.find_by(name: all_params[:home_city]).id
    all_params.delete(:home_city)

    @user = User.new(all_params)
    if @user.save!
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:email, :password, :fname, :home_city)
  end

end
