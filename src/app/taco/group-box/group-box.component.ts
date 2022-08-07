import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'group-box',
  templateUrl: './group-box.component.html',
  styleUrls: ['./group-box.component.css']
})
export class GroupBoxComponent implements OnInit {

  @Input()
  public title: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
