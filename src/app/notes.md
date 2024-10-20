<!-- NOTE: -->

## migrate project to new control flow

ng generate @angular/core:control-flow

ngAfterViewInit() è il momento in cui accedere alle variabili prese dal template (@viewChild - @viewChildren), se provi a modificare una variabile qui ricevi un errore

- vedi nuove sintassi control flow (@if - @for track $count $index $first $even @empty ecc.. - @switch )

- interessante video su viewChildren, che fa vedere come sottoscriversi ai cambiamenti di una lista:
  link: "https://www.udemy.com/course/angular-course/learn/lecture/11930634#notes"

- interessante video su Angular Content Projection (vedi anche contentChild ):
  link: "https://www.udemy.com/course/angular-course/learn/lecture/11937904#notes"

- valutare potenzialità direttive e direttive strutturali custom per avere maggiore controllo su style e funzionalità

l'\* in una direttiva strutturale è una shortcut, in realtà crea un ng-template intorno al tag in cui viene usato e applica la direttiva in quel punto:

``

<p *ngIf=true>pippo</p> 
``
è uguale a:

``
<ng-template [ngIf]=true>

  <p>pippo</p>
</ng-template>
``

# concetto view encapsulation per il css,

- :host si riferisce al componente stesso
- ::ng-deep bypassa il view encapsulation
- :host-context(.nome-classe) .nome.classe (cerca se serve)

# @defer

- un blocco @defer crea un nuovo javascript bundle che viene caricato dopo gli altri
- vedi diff tra @placeholder e @loading
- @defer(on timer(10s); prefetch on timer(5s)) >> con questi triggers dico di precaricare il bundle dopo 5s e mostrarlo dopo 10
- @error block sara' mostrato solo in caso di fetch error del bundle e in questo caso solo dopo 10s
- il trigger @defer(on viewport) mostra il contenuto del blocco quando il placeholder entra nel viewport, altrimenti puo' avere un trigger custom tipo:

``

<p #entra>quando entro nel viewport</p>
 @defer(on viewport(entra)){
  <p>carica</p>
 }
``

- vedi - il trigger @defer(on interaction) e on hover
- vedi custom triggers @defer(when customDisplay; prefetch when customPrefetch )
