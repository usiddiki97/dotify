# == Schema Information
#
# Table name: playlists
#
#  id            :bigint           not null, primary key
#  playlist_name :string           not null
#  description   :text             not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Playlist < ApplicationRecord
    validates :playlist_name, :description, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

    has_many :playlist_songs,
    foreign_key: :playlist_id,
    class_name: 'PlaylistSong'

    has_many :songs,
    through: :playlist_songs,
    source: :song

    def added_to_playlist?(song)
        query = PlaylistSong.where(playlist_id: self.id).where(song_id: song.id)
        !query.empty?
    end
end
