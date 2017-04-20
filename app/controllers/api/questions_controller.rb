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
      render json: @post.erros.full_messages, status: 422
    end

  end

  def update
    @question = Question.find(params[:id])

    if @question.update(question_params)
      render :show
    else
      render json: @question.errors.full_message, status: 422
    end

  end

  def destroy
    @question = Post.find(params[:id])

    if @post.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end

  end

  private

  def question_params
    params.require(:question).permit(:question, :details, :author_id)
  end

end
