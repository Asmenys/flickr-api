class StaticPagesController < ApplicationController
  def index
    @photo_list = nil
    if params[:commit] == "Search"
      @photo_list = get_photo_list_from_flickr
    end
  end

  private

  def get_photo_list_from_flickr
    @@flickr.photos.search :tags => query_params["tags"].split(','), :tag_mode => query_params["tag_mode"], :content_type => query_params["content_type"]
  end

  def query_params
    params.require(:query).permit(:tags, :tag_mode, :content_type)
  end
end
