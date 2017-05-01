# Quarry

[Quarry](the-quarry.herokuapp.com)

Quarry is a web application based on Quora, a question-and-answer site where questions are asked, answered, edited and organized by its community of users. It is built using Ruby on Rails on the backend, a PostrgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

### Questions

Questions are stored in a table in the database with columns for `id`, `author_id`, `question`, and `details`. Upon login, an API call is made to the database and retrieves all questions in the database to be rendered in the question index component, the root directory. This call is fine for the small ccurrent database, but it would be more appropriate to retrieve a random sample of 15 or so questions when the database is much larger.

The question's title, labeled `question` in the database, is displayed, as well as a randomly generated answer associated with the question and the answer's author. The question's topics are also displayed above the question. Topics are represented in it own table in the database. Since topics can have many questions and questions can have many topics, another table was created, titled `question_topic_links` to represent this relationship. The question index can be filtered by topic by selecting the topic on the left hand side of the page.

A new question can be created by clicking on the link at the top of page "What is your question?" This link triggers the rendering of a modal where the user can input text. Upon submit, an API call is made to the database which adds the question.

Questions are also rendered in the question show component. A route matching the question's id accesses this component. The questions show component shows the question and its details at the top, and below, a list of all its answers. It also provides buttons to edit the question and its topics.

### Answers

Answers are stored in a table in the database with columns for `id`, `author_id`, `text`, and `question_id`. The answer index component doesn't have its own route because it is rendered on the question show page. Each answer is in turn rendered in the answer index item component, which is also linked to on the question index page when a random answer is rendered.

A user may make comments on an answer. Comments are displayed by clicking on the comments link, found directly below the text of each answer. At the top of this list of comments is form to create a new comment.

## Future Direction of the Project

Beyond the features currently implemented, I plan to add the ability to add replies to comments and the opportunity for users to up-vote answers. Based on these up-votes, I will order the questions in the question index by popularity.
