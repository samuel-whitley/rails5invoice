class OrdersController < ApplicationController

  def show
    @order = Order.find_by(id: params[:id])
  end

  def index
    if params[:q]
      @orders = Order.search(params[:q]).order("created_at DESC")
    else
      @orders = Order.all.reverse
    end
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
    else
      flash[:alert] = @order.errors
      render 'new'
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
    @order = Order.find_by(id: params[:id])
    @order.update(order_params)
    render :show
  end

  def list
    @products = Product.all.map(&:name)
    @products = @products.uniq.reject {|product| product.nil?}
    render json: @products
  end


private

  def order_params
    params.require(:order).permit(:customer,:total, products_attributes: [:id, :name, :quantity, :price])
  end

end
