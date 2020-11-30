json.extract! album, :id, :album_name, :artist_id
if album.artwork.attached?
  json.artwork url_for(album.artwork)
end