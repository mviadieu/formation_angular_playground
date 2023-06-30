import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConfirmDirective } from './confirm.directive';
import { ForceLowerDirective } from './force-lower.directive';
import { HighlightDirective } from './highlight.directive';
import { ModelDirective } from './model.directive';
import { NoOpenDirective } from './no-open.directive';
import { SetClassesDirective } from './set-classes.directive';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    NoOpenDirective,
    ConfirmDirective,
    UserProfileComponent,
    ModelDirective,
    SetClassesDirective,
    ForceLowerDirective,
  ], // Il faut déclarer la directive dans ce tableau
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
