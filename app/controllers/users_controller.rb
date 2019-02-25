class UsersController < ApiController
  before_action :require_authentication, except: %i[signup signin]

  # /sign_up
  def signup
    new_user = User.create(user_creds)
    if(new_user.valid?)
      render json: new_user
    else
      render json: new_user.errors, status: :bad_request
    end
  end

  # /sign in
  def signin
    # finds user by
    user = User.where(email: user_creds[:email]).first

    if(user &&
       user.valid_password?(user_creds[:password]) &&
       user.update_column(:authentication_token, Devise.friendly_token) &&
       user.save
      )
      cookies.encrypted[:a_t] = {
        value: user[:authentication_token],
        path:'/',
        expires: Time.now + 1.year
      }
       render json: user, status: :created
    else
      send_error('Email/Password combination invalid')
    end
  end

  # log out -- change token to nill -- null in db --
  def signout
    if current_user
      current_user.update_column(:authentication_token, nil)
      cookies[:a_t] = nil
      head :ok
    else
      head :bad_request
    end
  end

  # /change_pw
  def change_pw
    @user = current_user
    if @user && @user.valid_password?(pw_creds[:old]) && !pw_creds[:new].blank?
      @user.password = pw_creds[:new]
      @user.update_column(:authentication_token, Devise.friendly_token)
      @user.save
      cookies.encrypted[:a_t] = {
        value: @user[:authentication_token],
        path:'/',
        expires: Time.now + 1.year
      }
      head :ok
    else
      head :bad_request
    end
  end

  # /check_user
  def check_user
    render json: current_user, status: :ok
  end

  private
  # only allow 'white list' parameters through to be used in create and update actions
  def user_creds
    params.require(:credentials)
          .permit(:email, :password, :password_confirmation)
  end

  def pw_creds
    params.require(:passwords)
          .permit(:old, :new)
  end
end
