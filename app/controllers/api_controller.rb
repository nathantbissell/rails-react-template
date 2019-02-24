class ApiController < ActionController::API
  acts_as_token_authentication_handler_for User, fallback_to_devise: false
  before_action :set_csrf_cookie
  include ActionController::Cookies
  include ActionController::HttpAuthentication::Token::ControllerMethods
  include ActionController::RequestForgeryProtection

  def require_authentication
    authenticate_user || send_error('Access Denied')
  end

  def current_user
    @current_user ||= authenticate_user
  end

  protected

  def send_error(message)
    errors = { errors: [ { detail: message } ] }
    render json: errors, status: :unauthorized
  end


  private
  def authenticate_user
    cookies.encrypted['a_t'] ? User.find_by(authentication_token: cookies.encrypted['a_t']) : nil
  end

  def set_csrf_cookie
    cookies["CSRF-TOKEN"] = form_authenticity_token
  end




end
