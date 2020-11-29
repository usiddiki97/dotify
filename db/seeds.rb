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
    album_1_1 = Album.create(album_name: 'Starboy', artist_id: artist_1.id)
        song_1_1_1 = Song.create(song_title: 'Starboy', album_id: album_1_1.id)
        song_1_1_2 = Song.create(song_title: 'Reminder', album_id: album_1_1.id)
    album_1_2 = Album.create(album_name: 'After Hours', artist_id: artist_1.id)
        song_1_2_1 = Song.create(song_title: 'Heartless', album_id: album_1_2.id)
        song_1_2_2 = Song.create(song_title: 'Blinding Lights', album_id: album_1_2.id)

artist_2 = Artist.create(artist_name: 'Drake')
album_2 = Album.create(album_name: "Scorpion", artist_id: artist_2.id)
song_2 = Song.create(song_title: "God's Plan", album_id: album_2.id)

artist_3 = Artist.create(artist_name: 'Travis Scott')
album_3 = Album.create(album_name: 'Birds in the Trap Sing McKnight', artist_id: artist_3.id)
song_3 = Song.create(song_title: 'Wonderful', album_id: album_3.id)

artist_4 = Artist.create(artist_name: 'Harry Styles')
album_4 = Album.create(album_name: 'Fine Line', artist_id: artist_4.id)
song_4 = Song.create(song_title: 'Watermelon Sugar', album_id: album_4.id)

artist_5 = Artist.create(artist_name: 'Don Toliver')
album_5 = Album.create(album_name: 'Heaven or Hell', artist_id: artist_5.id)
song_5 = Song.create(song_title: 'After Party', album_id: album_5.id)

artist_6 = Artist.create(artist_name: 'Ariana Grande')
album_6 = Album.create(album_name: 'Dangerous Woman', artist_id: artist_6.id)
song_6 = Song.create(song_title: 'Greedy', album_id: album_6.id)

artist_7 = Artist.create(artist_name: 'Bryce Vine')
album_7 = Album.create(album_name: 'Carnival', artist_id: artist_7.id)
song_7 = Song.create(song_title: 'Drew Barrymore', album_id: album_7.id)

artist_8 = Artist.create(artist_name: 'Bazzi')
album_8 = Album.create(album_name: 'COSMIC', artist_id: artist_8.id)
song_8 = Song.create(song_title: 'Myself', album_id: album_8.id)

artist_9 = Artist.create(artist_name: 'Dua Lipa')
album_9 = Album.create(album_name: 'Birds in the Trap Sing McKnight', artist_id: artist_9.id)
song_9 = Song.create(song_title: 'Wonderful', album_id: album_9.id)

artist_10 = Artist.create(artist_name: 'Lil Mosey')
album_10 = Album.create(album_name: 'Certified Hitmaker', artist_id: artist_10.id)
song_10 = Song.create(song_title: 'Blueberry Faygo', album_id: album_10.id)