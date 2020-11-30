# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#                 api_users GET    /api/users(.:format)                                                                     api/users#index {:format=>:json}
#                           POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#                           PATCH  /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           DELETE /api/users/:id(.:format)                                                                 api/users#destroy {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#      toggle_like_api_song POST   /api/songs/:id/toggle_like(.:format)                                                     api/songs#toggle_like {:format=>:json}
#                 api_songs GET    /api/songs(.:format)                                                                     api/songs#index {:format=>:json}
#                  api_song GET    /api/songs/:id(.:format)                                                                 api/songs#show {:format=>:json}
#                api_albums GET    /api/albums(.:format)                                                                    api/albums#index {:format=>:json}
#                 api_album GET    /api/albums/:id(.:format)                                                                api/albums#show {:format=>:json}
#               api_artists GET    /api/artists(.:format)                                                                   api/artists#index {:format=>:json}
#                api_artist GET    /api/artists/:id(.:format)                                                               api/artists#show {:format=>:json}
#                 api_likes GET    /api/likes(.:format)                                                                     api/likes#index {:format=>:json}
#          add_api_playlist POST   /api/playlists/:id/add(.:format)                                                         api/playlists#add {:format=>:json}
#       remove_api_playlist POST   /api/playlists/:id/remove(.:format)                                                      api/playlists#remove {:format=>:json}
#             api_playlists GET    /api/playlists(.:format)                                                                 api/playlists#index {:format=>:json}
#                           POST   /api/playlists(.:format)                                                                 api/playlists#create {:format=>:json}
#              api_playlist GET    /api/playlists/:id(.:format)                                                             api/playlists#show {:format=>:json}
#                           PATCH  /api/playlists/:id(.:format)                                                             api/playlists#update {:format=>:json}
#                           PUT    /api/playlists/:id(.:format)                                                             api/playlists#update {:format=>:json}
#                           DELETE /api/playlists/:id(.:format)                                                             api/playlists#destroy {:format=>:json}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:show, :index] do
      member do
        post :toggle_like
      end
    end
    resources :albums, only: [:show, :index]
    resources :artists, only: [:show, :index]
    resources :likes, only: [:index]
    resources :playlists, only: [:index, :show, :create, :update, :destroy] do
      member do
        post :add
        post :remove
      end
    end
  end

end
