import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top_nav_bar.component';
import { BottomNavBarComponent } from './footer/bottom_nav_bar.component';
import { UpperCardBlockComponent } from './upper_card_block/upper_card_block.component';
import { LowerCardBlockComponent } from './lower_card_block/lower_card_block.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    UpperCardBlockComponent,
    LowerCardBlockComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
