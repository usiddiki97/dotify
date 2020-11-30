json.playlist do
    json.extract! @playlist, :id, :playlist_name, :description
    json.songs @playlist.songs.pluck(:id)
    json.creator @playlist.user.id
end

@playlist.songs.each do |song|
    json.songs do
        json.set! song.id do
            json.partial! 'api/songs/song', song: song
        end
    end
end

json.creator @playlist.user, :id, :username