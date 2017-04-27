class QuestionTopicLink < ApplicationRecord
  validates :question, :topic, presence: true

  belongs_to :question
  belongs_to :topic
end
