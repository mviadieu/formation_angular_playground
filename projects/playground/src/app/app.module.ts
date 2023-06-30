import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConfirmDirective } from './directives/confirm.directive';
import { ForceLowerDirective } from './directives/force-lower.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { ModelDirective } from './directives/model.directive';
import { NoOpenDirective } from './directives/no-open.directive';
import { SetClassesDirective } from './directives/set-classes.directive';
import { UserProfileComponent } from './components/user-profile.component';

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
