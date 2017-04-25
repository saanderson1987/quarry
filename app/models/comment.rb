class Comment < ApplicationRecord
  validates :text, :answer_id, :author_id, presence: true

  belongs_to :answer,
    class_name: 'Answer',
    foreign_key: :answer_id,
    primary_key: :id

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

end
