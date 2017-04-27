@question_topic_links.each do |question_topic_link|
  json.set! question_topic_link.id do
    json.extract! question_topic_link, :id, :question_id, :answer_id, :question, :topic
  end
end
