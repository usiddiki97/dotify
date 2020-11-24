@liked_songs.each do |song|
    json.set! song.id do 
        json.extract! song, :id, :song_title, :album_id
    end
end