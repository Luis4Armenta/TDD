import { VehicleHelper } from '../helpers/vehicle-model-helper'

export class VehicleModel {
  public constructor (private readonly vehicle: VehicleHelper) { }

  public getName (): string {
    return this.vehicle.name
  }

  public getModel (): string {
    return this.vehicle.model
  }

  public getYear (): number {
    return this.vehicle.year
  }

  public getPrice (): number {
    return this.vehicle.price
  }

  public getInventory (): number {
    return this.vehicle.inventory
  }
}
