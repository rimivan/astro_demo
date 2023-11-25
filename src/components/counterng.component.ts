import {Component} from "@angular/core";

@Component({
    selector:'app-counter',
    standalone: true,
    template:
        `<h1> Test Angular Component </h1>
        <button (click)="counter = counter + 1"> Angular Button Component {{counter}}</button>`
})
export class CounterngComponent{
    counter = 0;
}
