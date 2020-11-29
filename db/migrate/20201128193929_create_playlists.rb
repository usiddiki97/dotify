class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :playlist_name, null: false
      t.text :description, null: false
      t.integer :user_id, null: false

      t.index :user_id
      t.index :playlist_name
      
      t.timestamps
    end
  end
end
