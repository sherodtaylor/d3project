gem 'sinatra', '1.3.6'
require 'sinatra/base'
require 'sinatra/reloader'
class D3 < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
  end
  get '/' do
    erb :index
  end
end
D3.run!
