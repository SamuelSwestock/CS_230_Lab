import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top_nav_bar.component';
import { BottomNavBarComponent } from './footer/bottom_nav_bar.component';
import { UpperCardBlockComponent } from './upper_card_block/upper_card_block.component';
import { LowerCardBlockComponent } from './lower_card_block/lower_card_block.component';
import { TemplateComponent } from './template/template.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './body/home_layout.component';
import { GuitarsLayoutComponent } from './body/guitars_layout.component';
import { StudioandrecordingLayoutComponent } from './body/studioandrecording_layout.component';
import { DrumsLayoutComponent } from './body/drums_layout.component';
import { BassLayoutComponent } from './body/bass_layout.component';
import { SmallBlogTeaser } from './body/small_blog_teaser.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { EditBlogsComponent } from './body/edit_blogs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    UpperCardBlockComponent,
    LowerCardBlockComponent,
    TemplateComponent,
    HomeLayoutComponent,
    GuitarsLayoutComponent,
    StudioandrecordingLayoutComponent,
    DrumsLayoutComponent,
    BassLayoutComponent,
    SmallBlogTeaser,
    UserInfoComponent,
    EditBlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
