import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommentsComponent } from "./widget-modules/comments/comments.component";
import { ContainerComponent } from "./widget-modules/container/container.component";
import { CouplestoryComponent } from "./widget-modules/couplestory/couplestory.component";
import { FooterComponent } from "./widget-modules/footer/footer.component";
import { GuestBookComponent } from "./widget-modules/guest-book/guest-book.component";
import { NavBarComponent } from "./widget-modules/navigation/nav-bar/nav-bar.component";
import { WeddingEventsComponent } from "./widget-modules/wedding-events/wedding-events.component";
import { AlbumsComponent } from "./widgets/albums/albums.component";
import { HomeComponent } from "./widgets/home/home.component";

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    CouplestoryComponent,
    WeddingEventsComponent,
    CommentsComponent,
    AlbumsComponent,
    NavBarComponent,
    HomeComponent,
    GuestBookComponent,
    ContainerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
