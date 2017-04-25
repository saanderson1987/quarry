@answers.each do |answer|
  json.set! answer.id do
    json.extract! answer, :id, :text, :author_id, :question_id
  end
end 
