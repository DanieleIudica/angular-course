<!-- NOTE: -->

## migrate project to new control flow

ng generate @angular/core:control-flow

ngAfterViewInit() è il momento in cui accedere alle variabili prese dal template (@viewChild - @viewChildren), se provi a modificare una variabile qui ricevi un errore

- vedi nuove sintassi control flow (@if - @for track $count $index $first $even @empty ecc.. - @switch )

- interessante video su viewChildren, che fa vedere come sottoscriversi ai cambiamenti di una lista:
  link: "https://www.udemy.com/course/angular-course/learn/lecture/11930634#notes"

- interessante video su Angular Content Projection (vedi anche contentChild ):
  link: "https://www.udemy.com/course/angular-course/learn/lecture/11937904#notes"
