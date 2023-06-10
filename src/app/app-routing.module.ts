import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';
import { LoginComponent } from './login/login.component';


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
    },
    {
        path:'login',
        component: LoginComponent
    }
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }