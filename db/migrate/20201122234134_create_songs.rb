class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :song_title, null: false
      t.integer :album_id, null: false

      t.timestamps
      t.index :song_title
      t.index :album_id
    end
  end
end
