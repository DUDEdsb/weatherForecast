import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() valueChanged = new EventEmitter<String>()
  constructor() { }

  ngOnInit() {
  }
  emitValue(event){
      this.valueChanged.emit(event.target.value);
  }
}
