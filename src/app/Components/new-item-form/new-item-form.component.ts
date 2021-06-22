import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ItemServiceService } from '../../Services/item-service.service';

@Component({
  selector: 'app-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.scss']
})
export class NewItemFormComponent implements OnInit {
  item;
  addItemForm;
  constructor(
    private itemServiceService: ItemServiceService,private formBuilder: FormBuilder,
  ) {
    this.addItemForm = this.formBuilder.group({
      itemText: '',
    });
    }

  ngOnInit(): void {
  }

  onSubmit(item) {
    this.itemServiceService.addItem(item.itemText);
    this.addItemForm.reset();
  }

}
