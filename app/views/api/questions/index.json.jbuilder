@questions.each do |question|
  json.set! question.id do
    json.extract! question, :id, :question, :details, :author_id, :answers
  end
end
