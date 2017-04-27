class Api::TopicsController < ApplicationController
  def index
    @topics = Topic.all
  end

  def show
    @topic = Topic.find(params[:id])
  end

  def create
    @topic = Topic.new(topic_params)

    if @topic.save
      render :show
    else
      render json: @topic.errors.full_messages, status: 422
    end

  end

  def update
    @topic = Topic.find(params[:id])

    if @topic.update(topic_params)
      render :show
    else
      render json: @topic.errors.full_messages, status: 422
    end

  end

  def destroy
    @topic = Topic.find(params[:id])

    if @topic.destroy
      render :show
    else
      render json: @topic.errors.full_messages, status: 422
    end

  end

  private

  def topic_params
    params.require(:topic).permit(:name)
  end
end
