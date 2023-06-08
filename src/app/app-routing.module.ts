import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children : [
            {
                path: 'products',
                component: ProductComponent
            }
        ]
    }
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }