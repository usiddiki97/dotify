json.extract! artist, :id, :artist_name
if artist.profile_photo.attached?
  json.profilePhoto url_for(artist.profile_photo)
end