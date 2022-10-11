import { FoodHelper } from '../helpers/food-model-helper'

export class FoodModel {
  constructor (
    private readonly food: FoodHelper
  ) { }

  public getName (): string {
    return this.food.name
  }

  public getDescription (): string {
    return this.food.description
  }

  public getPrice (): number {
    return this.food.price
  }

  public getInventory (): number {
    return this.food.inventory
  }
}
