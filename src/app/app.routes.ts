import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';

export const routes: Routes = [

  // MUESTRA DE VISTAS ANIDADES DONDE layout RENDERIZA NUESTRA VISTA COMPARTIDA
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      }
    ]
  },

  // ESTE NO COMPARTE EL HEADER, QUE FORMA PARTE DE NUESTRO layout

  {
    path: '**',
    component: NotFoundComponent
  }
];
