import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  SimpleChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Output, EventEmitter
} from '@angular/core';
import {pist} from "../app.component";



@Component({
  selector: 'app-pist',
  templateUrl: './pist.component.html',
  styleUrls: ['./pist.component.css']
})


export class PistComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() post: pist;
  @Output() onRemove = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef: ElementRef;

  removePost() {
    this.onRemove.emit(
        this.post.id
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes);
  }

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    //console.log(this.infoRef.nativeElement)
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('AfterContent Init');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContetCheck');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}