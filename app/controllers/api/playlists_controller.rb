class Api::PlaylistsController < ApplicationController
    
    before_action :ensure_logged_in!

    def index
        @playlists = current_user.playlists
        render 'api/playlists/index'
    end

    def show
        @playlist = current_user.playlists.find(params[:id])
        render 'api/playlists/show'
    end

    def create
        @playlist = current_user.playlists.new(playlist_params)

        if @playlist.save 
            render 'api/playlists/show'
        else
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    def update
        @playlist = current_user.playlists.find(params[:id])
        @playlist.update(playlist_params)

        if @playlist.save
            render 'api/playlist/show'
        else
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    def destroy
        @playlist = current_user.playlists.find(params[:id])
        @playlist.destroy if @playlist
        render 'api/playlists/index'
    end

    def add
        @playlist = current_user.playlists.find(params[:playlist_id])
        @song = Song.find(params[:song_id])
        unless @playlist.added_to_playlist(@song)
            @playlist_song = @playlist.playlist_songs.new(song_id: @song.id)
            if @playlist_song.save
                render 'api/playlists/show'
            else
                render json: [ 'Song could not be added' ], status: 422
            end
        end
    end
    

    def remove
        @playlist = current_user.playlists.find(params[:playlist_id])
        @song = Song.find(params[:song_id])
        if @playlist.added_to_playlist(@song)
            @playlist_song = @playlist.playlist_songs.find_by(song_id: @song.id)
            @playlist_song.destroy
            render 'api/playlists/show'   
        end
    end

    private

    def playlist_params
        params.require(:playlist).permit(:playlist_name, :description)
    end

end
