json.album do
    json.partial! 'api/albums/album', album: @album
end

json.songs do
    @album.songs.each do |song|
        json.set! song.id do 
            json.partial! 'api/songs/song', song: song
        end
    end
end

json.artist do
    json.set! @album.artist_id do 
        json.partial! 'api/artists/artist', artist: @album.artist
    end
end