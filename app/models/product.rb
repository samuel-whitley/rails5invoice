class Product < ApplicationRecord
  belongs_to :order, optional: true

  validates :price, presence: true
  validates :quantity, presence: true
  validates :name, presence: true
end
