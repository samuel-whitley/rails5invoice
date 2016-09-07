class OrdersController < ApplicationController

  def show
    @order = Order.find_by(id: params[:id])
  end

  def index
    @orders = Order.all
  end

  def create
    @order = Order.new(order_params)
    @products = @order.products
    @products.each do |product|
      product.order = @order
    end
      if @order.save
        respond_to do |format|
          format.html {render :show}
      end
    end
  end

  def new
    @order = Order.new
    1.times {@order.products.build}
  end

  def edit
    @order = Order.find_by(id: params[:id])
  end

  def update
    binding.pry
  end

  def list
    @products = Product.all.map(&:name)
    @products = @products.uniq.reject {|product| product.nil?}
    render json: @products
  end

private

  def order_params
    params.require(:order).permit(:customer, products_attributes: [:name, :quantity, :price])
  end

end
