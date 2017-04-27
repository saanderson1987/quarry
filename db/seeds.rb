# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
# More info here : http://www.xyzpub.com/en/ruby-on-rails/3.2/seed_rb.html

User.create(
  username: "user1",
  password: "password"
)

User.create(
  username: "user2",
  password: "password"
)

Topic.create(
  name: "Test Topic"
)

Topic.create(
  name: "Another Test Topic"
)

Question.create(
  question: "Is this a test question?",
  details: "These are details",
  author_id: 1,
  topic_ids: [1, 2]
)

Question.create(
  question: "Is this another test question?",
  details: "These are some more question details",
  author_id: 1,
  topic_ids: [2]
)

Answer.create(
  author_id: 2,
  text: "Yes, and this is a test answer.",
  question_id: 1
)

Comment.create(
  author_id: 2,
  answer_id: 1,
  text: "And this is a comment"
)
