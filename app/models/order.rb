class Order < ApplicationRecord
  has_many :products

  accepts_nested_attributes_for :products

  scope :search, ->(quary) {
    where("customer ILIKE ?", "%#{quary}")
  }

  def total_order
    self.products
  end
end
