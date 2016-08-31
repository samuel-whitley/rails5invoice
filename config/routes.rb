Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :orders do
    collection do
      get 'list'
    end
  end
    resources :products

    root to: 'orders#index'
end


=begin
  resources :orders do
    get 'list' on: :collection
  end
=end
