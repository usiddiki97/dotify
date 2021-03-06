# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  album_name :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Album < ApplicationRecord
    validates :album_name, presence: true

    has_many :likes, as: :likeable

    has_many :songs,
    foreign_key: :album_id,
    class_name: 'Song'

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'Artist'

    has_one_attached :artwork

end
