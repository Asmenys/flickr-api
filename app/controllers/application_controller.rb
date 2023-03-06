class ApplicationController < ActionController::Base
    @@flickr = Flickr.new ENV["flickr_key"], ENV["flickr_secret"]
end
