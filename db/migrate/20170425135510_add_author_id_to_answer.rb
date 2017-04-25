class AddAuthorIdToAnswer < ActiveRecord::Migration[5.0]
  def change
    add_column :answers, :author_id, :integer, null: false
  end
end
