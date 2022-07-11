class StaticPagesController < ApplicationController
  def index
    @photo_url = nil
    set_photo_url
  end

  private
  def set_photo_url
    photo_url = nil
    user_id = get_id_from_params
    unless user_id.nil?
     photo_url = get_photo_url_from(get_random_user_photo_info_from(user_id))
    end
    @photo_url = photo_url
  end

  def get_id_from_params
    id = nil
    if params.key?(:id) and params[:id] != ""
      id = params[:id]
    end
    id
  end

  def get_random_user_photo_info_from(user_id)
    photo_array = @@flickr.photos.search(:user_id => "#{user_id}")
    photo_array[get_random_photo_index(photo_array.length)]
  end

  def get_photo_url_from(photo_info)
    "https://live.staticflickr.com/#{photo_info.server}/#{photo_info.id}_#{photo_info.secret}.jpg"
  end

  def get_random_photo_index(photo_array_length)
    rand(0..photo_array_length-1)
  end

end
