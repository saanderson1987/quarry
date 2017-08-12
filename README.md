# Quarry

[Live site](http://the-quarry.herokuapp.com)

Quarry is a full-stack web application inspired by Quora.com, a site where users can post questions and answer any question posted. On the backend, it uses Ruby on Rails and a PostgreSQL database, and on the front end, React with Redux data architecture.

The PostgreSQL database has the following tables: `users`, `questions`, `answers`, `comments`, `topics`, and `question_topic_links`. The relationships between users and questions, answers, and comments are straight forward, where a `User` `has_many` questions and a `Question` `belongs_to` a `User` and so on. The same goes for questions having many answers and answers having many comments.

The relationship between questions and topics is more complex. Since questions can be tagged with multiple topics and topics can be tagged by multiple topics, the database required an intermediary table to handle this relationship. I named this table `question_topic_links`, and configured it so that each item in the table `belongs_to` both a question and a topic. This allowed for both questions and topics to have a `has_many` association with each other `through` `question_topic_links`. With this association, the user can access on the front end a list of questions tagged with a particular topic.

On the backend I also set up secure, password-protected user authentication by leveraging a password hashing function called BCrypt, loaded as a Ruby gem. BCrypt makes it so a user's password does not have to be stored directly in the database. Instead, I store a value `password_digest`, which BCrypt generates based on the password. While the gem can validate a password entered by comparing it to the `password_digest`, it is not possible to determine a password by only knowing a `password_digest` because BCrypt not only relies on a hashing algorithm to generate the password digest, but it also adds a small chunk of random data, called a salt, to the password before it's hashed.
