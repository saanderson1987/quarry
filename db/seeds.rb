# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
# More info here : http://www.xyzpub.com/en/ruby-on-rails/3.2/seed_rb.html

Question.create(
  question: "Is this a test question?",
  details: "These are details",
  author_id: 1
)

Question.create(
  question: "Is this another test question?",
  details: "These are some more question details",
  author_id: 1
)
