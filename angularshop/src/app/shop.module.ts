import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router'

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch:'full'},
  {path: 'list', component: ProductListComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductPreviewComponent,
    AppComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class ShopModule { }
