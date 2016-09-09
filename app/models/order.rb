class Order < ApplicationRecord
  has_many :products

  accepts_nested_attributes_for :products

  scope :search, ->(quary) {
    where("customer ILIKE ?", "%#{quary}")
  }

end
