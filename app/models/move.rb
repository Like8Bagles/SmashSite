class Move < ApplicationRecord
  belongs_to :character
  has_many_attached :gifs
end
