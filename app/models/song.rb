# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  song_title :string           not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Song < ApplicationRecord
    validates :song_title, presence: true

    has_many :likes, as: :likeable

    belongs_to :album,
    foreign_key: :album_id,
    class_name: 'Album'

    has_one :artist,
    through: :album,
    source: :artist 
    

end
