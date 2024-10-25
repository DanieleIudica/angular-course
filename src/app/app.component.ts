import { Component, computed, effect, signal } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { SignalsService } from "./signals.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = COURSES;
  numb = 9.99;

  // SIGNALS
  counter = signal(0);

  // counterFromSrv = this.signalsSrv.counter()

  // vedi signals derivati >>
  derivedCounter = computed(() => {
    const counter = this.counter();
    return counter * 10;
  });

  constructor(public signalsSrv: SignalsService) {
    // vedi effetti >>
    effect(() => {
      // ogni volta che 1 o + signals all'interno dell'effetto cambiano, lo stesso viene triggerato
      // l'effetto viene cancellato alla distruzione del componente (default) oppure su richiesta (vedi manualCleanup)
      const counterValue = this.counter();
      console.log(`counter: ${counterValue}`);
    });
  }

  increment() {
    this.counter.update((c) => c + 1);
  }

  // SIGNALS

  viewCourse(course: Course) {
    console.log("you clicked the course:", course);
  }
}
