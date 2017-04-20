class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string :question, null: false
      t.string :details, null: false
      t.integer :author_id, null: false

      t.timestamps
    end

      add_index :questions, :author_id
  end
end
