class Character < ApplicationRecord
    has_many :moves
    has_many_attached :images
end
