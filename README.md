# Quarry

[Live site](http://the-quarry.herokuapp.com)

Quarry is a full-stack web application inspired by Quora.com, a site where users can post questions and answer any question posted. On the back end, it uses Ruby on Rails and a PostgreSQL database, and on the front end, React with Redux data architecture.

### Database

The PostgreSQL database has the following tables: `users`, `questions`, `answers`, `comments`, `topics`, and `question_topic_links`. The relationships between users and questions, answers, and comments are straight forward, where a `User` `has_many` questions and a `Question` `belongs_to` a `User` and so on. The same goes for questions having many answers and answers having many comments.

The relationship between questions and topics is more complex. Since questions can be tagged with multiple topics and topics can be tagged by multiple topics, the database required an intermediary table to handle this relationship. I named this table `question_topic_links`, and configured it so that each item in the table `belongs_to` both a question and a topic. This allowed for both questions and topics to have a `has_many` association with each other `through` `question_topic_links`. With this association, the user can access on the front end a list of questions tagged with a particular topic.

### User Authentication

I set up secure, password-protected user authentication by leveraging a password hashing function called BCrypt, loaded as a Ruby gem. BCrypt makes it so a user's password does not have to be stored directly in the database. Instead, I store a value `password_digest`, which BCrypt generates based on the password. While the gem can validate a password entered by comparing it to the `password_digest`, it is not possible to determine a password by only knowing a `password_digest` because BCrypt not only relies on a hashing algorithm to generate the password digest, but it also adds a small chunk of random data, called a salt, to the password before it's hashed.


### Routes

I set up the back end routes under a namespace 'api' to distinguish them from the front end routes, which I create with React Router. The API routes are configured so that they respond only in the JSON format.

```ruby
namespace :api, defaults: {format: :json} do
```
This way, when AJAX requests are made on the front end to get application data, the functions receive the proper data that they can handle.

### Views

By declaring the format as JSON on the routes, Rails automatically looks for a `.json` view file instead of a `.html.erb` view file. I make use of the jBuilder gem to more easily extract and convert the data from the database into JSON. Here is an example of the question index view file:

```ruby
@questions.each do |question|
  json.set! question.id do
    json.extract! question, :id, :question, :details, :author_id, :answers, :topics
  end
end
```

### Redux Data Architecture

The front end is structured into React components that receive data through the Redux data architecture.

Application data is managed in an object tree called the store, which represents an immutable, single source of truth. To update the store, there are a series of steps.

The data is retrieved from the back end through AJAX functions. These AJAX functions are grouped in files based on database table and stored in the folder `util/`.

Another set of functions call the AJAX functions and in the promise they return, invoke the function `dispatch`, which updates the store with the new data. The `dispatch` function is called with an argument known as an *action*. An action is a function that takes in the data returned in an AJAX promise and returns an object containing both that data and an attribute named `type`. Setting the `type` allows the `dispatch` function to appropriately process the data and update the store. The following displays the operation I've described:

```javascript
export const createAnswer = answer => dispatch => {
  return AnswerApiUtil.createAnswer(answer).then(newAnswer => dispatch(receiveAnswer(newAnswer)));
};

const receiveAnswer = answer => ({
  type: RECEIVE_ANSWER,
  answer
});
```

In order for `dispatch` to update the store, it relies on functions called reducers to process the data. Depending on the action `type`, the reducer will perform a different operation. In all cases, the reducer merges the previous state with the new data and returns the new state. The store is then set to the new state. To perform the merge operation, the reducers employ the Lodash function `merge`, which makes a deep copy of the objects, which is necessary when the objects have multiple layers.

###Root component

The `<Root>` component is the first component rendered when the site is loaded. It sets the routes and handles the session authentication logic. While the api routes are configured using Rails and allow for data operations, the front end routes are established with the package `react-router` and enable the user to navigate this single-page application as if it had multiple pages. This makes it easier to navigate the UI and bookmark different views of the application. I didn't find it necessary to provide for extensive routes in the application. The `<IndexRoute>` renders the `<QuestionIndexContainer>` component, which displays the user question feed. There is also a route which renders `<QuestionShowContainer>` based on the id of the question and another that displays the login page.

In addition to setting the routes, the `<Root>` component manages user log-in. It makes use of `react-router`'s `onEnter` event callback by passing a function that checks to see if there is a `currentUser`in the store. If not, it redirects the route to `/session`, which renders the log in and sign up forms.


More topics to cover:
-Component organization
-Feature highlights
