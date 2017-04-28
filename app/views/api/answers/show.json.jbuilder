# json.extract! @answer, :id, :text, :author_id, :question_id, :comments, :author



json.id @answer.id
json.text simple_format@answer.text
json.author_id (@answer.author_id)
json.question_id (@answer.question_id)
json.comments @answer.comments
json.author @answer.author
