@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :playlist_name, :description
        json.songs playlist.songs, :id, :song_title
        json.creator playlist.user, :id, :username
    end
end