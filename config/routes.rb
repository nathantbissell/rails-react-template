Rails.application.routes.draw do
  #create default devise user routes -- not needed in API app
  #use custom routes
  # devise_for :users
  root 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #custom user routes
  # sign up
  post '/sign_up' => 'users#signup'
  # sign in
  post '/sign_in' => 'users#signin'
  # sign out
  delete '/sign_out' => 'users#signout'
  # change password
  patch '/change_pw' => 'users#change_pw'
  # checks current user
  get '/check_user' => 'users#check_user'

  get '/users' => 'users#index'
end
