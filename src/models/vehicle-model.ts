export class VehicleModel {
  public constructor (private readonly name: string, private readonly model: string, private readonly year: number) { }

  public getName (): string {
    return this.name
  }

  public getModel (): string {
    return this.model
  }

  public getYear (): number {
    return this.year
  }
}
