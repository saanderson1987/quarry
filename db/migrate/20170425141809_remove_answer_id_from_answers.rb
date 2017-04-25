class RemoveAnswerIdFromAnswers < ActiveRecord::Migration[5.0]
  def change
    remove_column :answers, :answer_id, :integer
  end
end
