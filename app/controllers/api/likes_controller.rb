class Api::LikesController < ApplicationController
    
    before_action :ensure_logged_in!

    def index
        @liked_songs = current_user.liked_songs
        render 'api/likes/index'
    end

end
