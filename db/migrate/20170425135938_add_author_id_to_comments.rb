class AddAuthorIdToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :author_id, :integer
  end
end
