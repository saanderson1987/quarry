class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.string :text, null: false
      t.integer :question_id, null: false

      t.timestamps
    end

    add_index :answers, :question_id
  end
end
