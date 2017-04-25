@answers.each do |answer|
  json.set! answer.id do
    json.extract! answer, :id, :text, :answer_id, :author_id
  end
end
