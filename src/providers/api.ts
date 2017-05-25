import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Api provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Api {
  static toCamel(o): any {
    var newO, origKey, newKey, value
    if (o instanceof Array) {
      newO = []
      for (origKey in o) {
        value = o[origKey]
        if (typeof value === "object") {
          value = this.toCamel(value)
        }
        newO.push(value)
      }
    } else {
      newO = {}
      for (origKey in o) {
        if (o.hasOwnProperty(origKey)) {
          newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString()
          value = o[origKey]
          if (value !== null && (value.constructor === Object || value instanceof Array)) {
            value = this.toCamel(value)
          }
          newO[newKey] = value
        }
      }
    }
    return newO
  }


}
