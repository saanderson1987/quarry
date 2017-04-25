class Question < ApplicationRecord
  validates :question, :author_id, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

  has_many :answers,
    class_name: 'Answer',
    foreign_key: :answer_id,
    primary_key: :id

  

end
