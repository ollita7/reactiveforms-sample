import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.less']
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('');
  constructor() { }

  ngOnInit() {
    this.name.setValue('Bienvenidos a la meetup');
  }

  changeValue(value) {
    this.name.setValue(value);
  }

}
