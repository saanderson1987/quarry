class Api::QuestionTopicLinksController < ApplicationController
  def index
    @question_topic_links = QuestionTopicLink.all
  end

  def show
    @question_topic_link = QuestionTopicLink.find(params[:id])
  end

  def create
    @question_topic_link = QuestionTopicLink.new(question_topic_link_params)

    if @question_topic_link.save
      @question = Question.find(@question_topic_link.question_id)
      render 'api/questions/show.json.jbuilder'
    else
      render json: @question_topic_link.errors.full_messages, status: 422
    end

  end

  def update
    @question_topic_link = QuestionTopicLink.find(params[:id])

    if @question_topic_link.update(question_topic_link_params)
      render :show
    else
      render json: @question_topic_link.errors.full_messages, status: 422
    end

  end

  private

  def question_topic_link_params
    params.require(:question_topic_link).permit(:question_id, :topic_id)
  end

end
