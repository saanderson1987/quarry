class AddIndexToQuestionTopicLinks < ActiveRecord::Migration[5.0]
  def change
    add_index :question_topic_links, :question_id
    add_index :question_topic_links, :topic_id
    add_index :question_topic_links, [:question_id, :topic_id], unique:true
  end
end
