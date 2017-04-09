import {Observable} from 'data/observable';
import {Raven} from 'nativescript-raven';

export class HelloWorldModel extends Observable {
  public message: string;
  private raven: Raven;

  constructor() {
    super();

    this.raven = new Raven();
    this.message = this.raven.message;
  }
}