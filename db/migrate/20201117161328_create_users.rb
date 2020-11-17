class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :username, null: false
      t.string :session_token, null: false
      t.date :birth_date, null: false
      t.string :gender, null: false

      t.index :email, unique: true
      t.index :username, unique: true
      t.index :session_token, unique: true

      t.timestamps
    end
  end
end
