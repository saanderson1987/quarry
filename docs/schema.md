# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
question    | string    | not null
details     | string    |
author_id   | integer   | not null, foreign key (references users), indexed

## topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name       | string    | not null

## topic_question_links
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
question_id | integer   | not null, foreign key (references questions), indexed, unique [topic_id]
topic_id    | integer   | not null, foreign key (references topics), indexed

## answers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
answer       | string    | not null
question_id  | integer   | not null, foreign key (references questions), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
comment       | string    | not null
answer_id  | integer   | not null, foreign key (references questions), indexed
