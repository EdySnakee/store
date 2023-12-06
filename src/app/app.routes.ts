import { Routes } from '@angular/router';
import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';

export const routes: Routes = [

  // MUESTRA DE VISTAS ANIDADES DONDE layout RENDERIZA NUESTRA VISTA COMPARTIDA
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        //usamos chunk para fracmentar el empaquetado y hacer que la app solo carge lo que necesita en ese momento
        path: '',
        loadComponent: ()=> import('./domains/products/pages/list/list.component')
      },
      {
        path: 'about',
        loadComponent: ()=> import('./domains/info/pages/about/about.component')
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
