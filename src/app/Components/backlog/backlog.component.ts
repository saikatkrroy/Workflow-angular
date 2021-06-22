import { Component, OnInit,Injectable  } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ItemServiceService } from '../../Services/item-service.service';
import {NewItemFormComponent} from '../new-item-form/new-item-form.component'

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  items;
  constructor(
    private itemServiceService: ItemServiceService,
  ) {
    }

    ngOnInit() {
      this.items = this.itemServiceService.getTodoItems();
    }
  title = 'Backlog';
}
