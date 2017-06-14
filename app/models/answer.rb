class Answer < ApplicationRecord
  validates :text, :author_id, :question_id, presence: true

  belongs_to :question,
    class_name: 'Question',
    foreign_key: :question_id,
    primary_key: :id

  has_many :comments,
    class_name: 'Comment',
    foreign_key: :answer_id,
    primary_key: :id

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

end
