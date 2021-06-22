import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BacklogComponent } from './Components/backlog/backlog.component';
import { NewItemFormComponent } from './Components/new-item-form/new-item-form.component';
import { MenuBarComponent } from './Components/menu-bar/menu-bar.component';
import { TaskLaneComponent } from './components/task-lane/task-lane.component';
import { TaskLaneItemComponent } from './components/task-lane-item/task-lane-item.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    BacklogComponent,
    NewItemFormComponent,
    MenuBarComponent,
    TaskLaneComponent,
    TaskLaneItemComponent,
    KanbanBoardComponent,
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularDraggableModule,
    RouterModule.forRoot([
      { path: 'backlog', component: BacklogComponent },
      {path: 'board',component: KanbanBoardComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
