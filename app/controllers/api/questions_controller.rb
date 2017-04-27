class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
  end

  def create
    @question = Question.new(question_params)

    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end

  end

  def update
    @question = Question.find(params[:id])

    # unless params[question][topic_ids].empty?
    #   @question.topics += params[question][topic_ids]
    #   @question.save
    # end

    if @question.update(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end

  end

  def destroy
    @question = Question.find(params[:id])

    if @question.destroy
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end

  end

  private

  def question_params
    params.require(:question).permit(:question, :details, :author_id, topic_ids: [])
  end

end
