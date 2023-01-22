class StaticPagesController < ApplicationController
  def index
  end

  private
  def get_photo_array
    #photo_array = @@flickr.photos.search(query_params)
  end

  def query_params
    params.require(:query).permit(
      :tags, query_parameters: [:tag_mode, :content_type]
    )
  end
end
