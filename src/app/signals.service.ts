import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SignalsService {
  private counterSignal = signal(0);

  readonly counter = this.counterSignal.asReadonly();

  increment() {
    if (this.counter() >= 10) {
      throw new Error("too high");
    }
    this.counterSignal.update((c) => c + 1);
  }
}
