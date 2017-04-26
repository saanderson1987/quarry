@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :text, :answer_id, :author_id, :author, :answer
  end
end
