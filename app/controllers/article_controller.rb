class ArticleController < ApplicationController
    def index
     @article = Article.first
    end

end