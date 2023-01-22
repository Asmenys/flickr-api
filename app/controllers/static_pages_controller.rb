class StaticPagesController < ApplicationController
  def index = @photo_urls ||= get_photo_array

  private
  def get_photo_array
    #photo_array = @@flickr.photos.search(query_params)
  end

  def query_params
    parameters.permit(:query, :query_parameters);
  end
end
