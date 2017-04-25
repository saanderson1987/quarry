class Api::AnswersController < ApplicationController
  def index
    @answers = Answer.all
  end

  def show
    @answer = Answer.find(params[:id])
  end

  def create
    @answer = Answer.new(answer_params)

    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end

  end

  def update
    @answer = Answer.find(params[:id])

    if @answer.update(answer_params)
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end

  end

  def destroy
    @answer = Question.find(params[:id])

    if @answer.destroy
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end

  end

  private

  def answer_params
    params.require(:answer).permit(:text, :author_id, :question_id)
  end

end 
