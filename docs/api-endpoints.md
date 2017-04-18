# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Questions

- `GET /api/questions`
  - Notes index/search
  - accepts `topic_name` query param to list notes by topic
- `POST /api/questions
- `GET /api/questions/:id`
- `PATCH /api/questions/:id`
- `DELETE /api/questions/:id`
- `GET /api/questions/:id/answers`
  - index of all answers to a question

### Answers

- `GET /api/answers`
- `POST /api/answers
- `GET /api/answers/:id`
- `PATCH /api/answers/:id`
- `DELETE /api/answers/:id`
- `GET /api/answers/:id/comments`
  - index of all comments on an answer

### Comments

- `GET /api/comments`
- `POST /api/comments
- `GET /api/comments/:id`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`

### Topics
- `GET /api/topics`
- `POST /api/topics`:
- `DELETE /api/topics/:topic_name`: remove topic from question by name
