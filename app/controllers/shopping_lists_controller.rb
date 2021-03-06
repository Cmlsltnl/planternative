class ShoppingListsController < ApplicationController
  before_action :find_list, only: [ :show, :update, :destroy, :mark_as_done, :send_list ]

  def show;  end

  def create
    @shopping_list = ShoppingList.new
    @shopping_list.date = Date.today
    @shopping_list.user = current_user
    if @shopping_list.save
      redirect_to shopping_list_path(@shopping_list)
    else
      redirect_to home_path
    end
  end

  def update
    @shopping_list.update()
  end

  def mark_as_done
    @shopping_list.mark_as_done = true
    @shopping_list.save

    redirect_to myprofile_path(current_user)
  end

  def send_list
    @shopping_list.mark_as_done = true
    @shopping_list.save
    ShoppingListMailer.with(shopping_list: @shopping_list).shopping_list.deliver_now
    redirect_to myprofile_path(current_user), notice: "Email sent"
  end

  def destroy
    @shopping_list.destroy

    redirect_to myprofile_path(current_user)
  end

  private

  def find_list
    @shopping_list = ShoppingList.find(params[:id])
  end
end
