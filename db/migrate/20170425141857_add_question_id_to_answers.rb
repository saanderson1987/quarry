class AddQuestionIdToAnswers < ActiveRecord::Migration[5.0]
  def change
    
    add_index :answers, :question_id

  end
end
