class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :album_name, null: false
      t.integer :artist_id, null: false

      t.timestamps

      t.index :album_name
      t.index :artist_id
    end
  end
end
