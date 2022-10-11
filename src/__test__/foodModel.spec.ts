import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  it('Class foodmodel', () => {
    const foodModel = new FoodModel('Chilaquiles', 'Tortillas con chile', 30)

    expect(foodModel.getName()).toEqual('Chilaquiles')
    expect(foodModel.getDescription()).toEqual('Tortillas con chile')
    expect(foodModel.getPrice()).toBe(30)
  })
})
