class AddTextToAnswers < ActiveRecord::Migration[5.0]
  def change
    add_column :answers, :text, :string
    add_column :answers, :answer_id, :integer
    
  end
end
