import { HttpRequest, HttpResponse } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (httpRequest.body.name === undefined) {
      return {
        statusCode: 400,
        body: new Error('error in the: name')
      }
    }

    if (httpRequest.body.model === undefined) {
      return {
        statusCode: 400,
        body: new Error('error in the: model')
      }
    }

    return {
      statusCode: 200,
      body: '<h1>All right!</h1>'
    }
  }
}
