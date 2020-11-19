# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo_user = User.create(username: 'Demo', password: 't42gf4g24v7875g784', email: 'demouser@fakeboi.com', gender: 'Male', birth_date: 'Tue, 10 Nov 2020')