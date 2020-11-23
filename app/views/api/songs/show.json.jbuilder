json.song do
    json.partial! 'api/songs/song', song: @song
end

json.album do
    json.set! @song.album_id do 
        json.partial! 'api/albums/album', album: @song.album
        json.partial! 'api/albums/album', album: @song.album
    end
end

json.artist do
    json.set! @song.album.artist_id do 
        json.partial! 'api/artists/artist', artist: @song.artist
    end
end

