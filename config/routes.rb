Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :questions, except: [:new, :edit]
    resources :answers, except: [:new, :edit]
    resources :comments, except: [:new, :edit]
  end

  root "static_pages#root"

end
