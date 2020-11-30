# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Song.destroy_all
Album.destroy_all
Artist.destroy_all
Like.destroy_all
Playlist.destroy_all
PlaylistSong.destroy_all

demo_user = User.create(username: 'Demo', password: 't42gf4g24v7875g784', email: 'demouser@fakeboi.com', gender: 'Male', birth_date: 'Tue, 10 Nov 2020')
usiddiki = User.create(username: 'usiddiki', password: 'hunter12', email: 'usiddiki97@gmail.com', gender: 'Male', birth_date: 'Tue, 10 Nov 2020')

artist_1 = Artist.create(artist_name: 'The Weeknd')
artist_1.profile_photo.attach(io: File.open('app/assets/images/the_weeknd.jpg'), filename: 'the_weeknd.jpg')
    album_1_1 = Album.create(album_name: 'Starboy', artist_id: artist_1.id)
    album_1_1.artwork.attach(io: File.open('app/assets/images/starboy.jpg'), filename: 'starboy.jpg')
        song_1_1_1 = Song.create(song_title: 'Starboy', album_id: album_1_1.id)
        song_1_1_2 = Song.create(song_title: 'Reminder', album_id: album_1_1.id)
    album_1_2 = Album.create(album_name: 'After Hours', artist_id: artist_1.id)
    album_1_2.artwork.attach(io: File.open('app/assets/images/after_hours.jpg'), filename: 'after_hours.jpg')
        song_1_2_1 = Song.create(song_title: 'Heartless', album_id: album_1_2.id)
        song_1_2_2 = Song.create(song_title: 'Blinding Lights', album_id: album_1_2.id)

artist_2 = Artist.create(artist_name: 'Drake')
artist_2.profile_photo.attach(io: File.open('app/assets/images/drake.jpg'), filename: 'drake.jpg')
    album_2 = Album.create(album_name: "Scorpion", artist_id: artist_2.id)
    album_2.artwork.attach(io: File.open('app/assets/images/scorpion.jpg'), filename: 'scorpion.jpg')
        song_2 = Song.create(song_title: "God's Plan", album_id: album_2.id)

artist_3 = Artist.create(artist_name: 'Travis Scott')
artist_3.profile_photo.attach(io: File.open('app/assets/images/travis_scott.jpg'), filename: 'travis_scott.jpg')
    album_3 = Album.create(album_name: 'Birds in the Trap Sing McKnight', artist_id: artist_3.id)
    album_3.artwork.attach(io: File.open('app/assets/images/bittsm.jpg'), filename: 'bittsm.jpg')
        song_3 = Song.create(song_title: 'Wonderful', album_id: album_3.id)

artist_4 = Artist.create(artist_name: 'Harry Styles')
artist_4.profile_photo.attach(io: File.open('app/assets/images/harry_styles.jpg'), filename: 'harry_styles.jpg')
    album_4 = Album.create(album_name: 'Fine Line', artist_id: artist_4.id)
    album_4.artwork.attach(io: File.open('app/assets/images/fine_line.jpg'), filename: 'fine_line.jpg')
        song_4 = Song.create(song_title: 'Watermelon Sugar', album_id: album_4.id)

artist_5 = Artist.create(artist_name: 'Don Toliver')
artist_5.profile_photo.attach(io: File.open('app/assets/images/don_toliver.jpg'), filename: 'don_toliver.jpg')
    album_5 = Album.create(album_name: 'Heaven or Hell', artist_id: artist_5.id)
    album_5.artwork.attach(io: File.open('app/assets/images/heaven_or_hell.jpg'), filename: 'heaven_or_hell.jpg')
        song_5 = Song.create(song_title: 'After Party', album_id: album_5.id)

artist_6 = Artist.create(artist_name: 'Ariana Grande')
artist_6.profile_photo.attach(io: File.open('app/assets/images/ariana_grande.jpg'), filename: 'ariana_grande.jpg')
    album_6 = Album.create(album_name: 'Dangerous Woman', artist_id: artist_6.id)
    album_6.artwork.attach(io: File.open('app/assets/images/dangerous_woman.jpg'), filename: 'dangerous_woman.jpg')
        song_6 = Song.create(song_title: 'Greedy', album_id: album_6.id)

artist_7 = Artist.create(artist_name: 'Bryce Vine')
artist_7.profile_photo.attach(io: File.open('app/assets/images/bryce_vine.jpg'), filename: 'bryce_vine.jpg')
    album_7 = Album.create(album_name: 'Carnival', artist_id: artist_7.id)
    album_7.artwork.attach(io: File.open('app/assets/images/carnival.jpg'), filename: 'carnival.jpg')
        song_7 = Song.create(song_title: 'Drew Barrymore', album_id: album_7.id)

artist_8 = Artist.create(artist_name: 'Bazzi')
artist_8.profile_photo.attach(io: File.open('app/assets/images/bazzi.jpg'), filename: 'bazzi.jpg')
    album_8 = Album.create(album_name: 'COSMIC', artist_id: artist_8.id)
    album_8.artwork.attach(io: File.open('app/assets/images/cosmic.jpg'), filename: 'cosmic.jpg')
        song_8 = Song.create(song_title: 'Myself', album_id: album_8.id)

artist_9 = Artist.create(artist_name: 'Dua Lipa')
artist_9.profile_photo.attach(io: File.open('app/assets/images/dua_lipa.jpg'), filename: 'dua_lipa.jpg')
    album_9 = Album.create(album_name: 'Future Nostalgia', artist_id: artist_9.id)
    album_9.artwork.attach(io: File.open('app/assets/images/future_nostalgia.jpg'), filename: 'future_nostalgia.jpg')
        song_9 = Song.create(song_title: 'Break My Heart', album_id: album_9.id)

artist_10 = Artist.create(artist_name: 'Lil Mosey')
artist_10.profile_photo.attach(io: File.open('app/assets/images/lil_mosey.jpg'), filename: 'lil_mosey.jpg')
    album_10 = Album.create(album_name: 'Certified Hitmaker', artist_id: artist_10.id)
    album_10.artwork.attach(io: File.open('app/assets/images/certified_hitmaker.jpg'), filename: 'certified_hitmaker.jpg')
        song_10 = Song.create(song_title: 'Blueberry Faygo', album_id: album_10.id)

like_1 = Like.create(user_id: usiddiki.id, likeable_type: 'Song', likeable_id: song_1_1_1.id)
like_2 = Like.create(user_id: usiddiki.id, likeable_type: 'Song', likeable_id: song_1_1_2.id)
like_3 = Like.create(user_id: usiddiki.id, likeable_type: 'Song', likeable_id: song_1_2_1.id)
like_4 = Like.create(user_id: usiddiki.id, likeable_type: 'Song', likeable_id: song_1_2_2.id)

playlist_1 = usiddiki.playlists.create(playlist_name: 'Bangers', description: 'Music that slaps harder than your dad')
    playlist_song_1_1 = playlist_1.playlist_songs.create(song_id: song_1_1_1.id)
    playlist_song_1_2 = playlist_1.playlist_songs.create(song_id: song_1_1_2.id)
    playlist_song_1_3 = playlist_1.playlist_songs.create(song_id: song_1_2_1.id)
    playlist_song_1_4 = playlist_1.playlist_songs.create(song_id: song_1_2_2.id)