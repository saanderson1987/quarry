class ChangeColumnNull < ActiveRecord::Migration[5.0]
  def change
    change_column_null :answers, :text, false
    change_column_null :answers, :answer_id, false
    change_column_null :comments, :author_id, false
  end
end
