class Api::SongsController < ApplicationController
    
    def index
        @songs = Song.all
        render 'api/songs/index'
    end

    def show
        @song = Song.find(params[:id])
        render 'api/songs/show'
    end

    def toggle_like
        @song = Song.find(params[:id])
        @liked_songs = current_user.liked_songs
        unless @song.liked_by_user?(current_user)
            @like = current_user.likes.new(likeable_id: @song.id, likeable_type: 'Song')
            if @like.save
                render 'api/likes/index'
            else
                render json: ['Cannot process your request'], status: :unprocessable_entity
            end
        else
            @like = current_user.likes.find_by(likeable_id: @song.id, likeable_type: 'Song')
            @like.destroy
            render 'api/likes/index'
        end
    end
    
end
