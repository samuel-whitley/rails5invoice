class Order < ApplicationRecord
  has_many :products
  validates :customer, presence: true
  

  accepts_nested_attributes_for :products

  scope :search, ->(quary) {
    where("customer ILIKE ?", "%#{quary}")
  }

  def total_order
    totals = []
    self.products.each do |product|
      totals << product.quantity * product.price
    end
    totals.sum
  end

end
