class StaticPagesController < ApplicationController
  def index = @photo_urls ||= get_photo_urls

  private
  def get_photo_urls

  end
  
  def query_params
  end

end
