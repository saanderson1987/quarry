class CreateQuestionTopicLinks < ActiveRecord::Migration[5.0]
  def change
    create_table :question_topic_links do |t|
      t.integer :question_id, null: false
      t.integer :topic_id, null: false

      t.timestamps
    end

    
  end
end
