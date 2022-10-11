import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  it('Class foodmodel', () => {
    const foodModel = new FoodModel({
      name: 'Chilaquiles',
      description: 'Tortillas con chile',
      price: 30,
      inventary: 50
    })

    expect(foodModel.getName()).toEqual('Chilaquiles')
    expect(foodModel.getDescription()).toEqual('Tortillas con chile')
    expect(foodModel.getPrice()).toBe(30)
    expect(foodModel.getInventary()).toBe(50)
  })
})
