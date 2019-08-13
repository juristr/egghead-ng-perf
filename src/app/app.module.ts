import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { QuicklinkStrategy, QuicklinkModule } from 'ngx-quicklink';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomPreloader } from './custom-preloader';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    QuicklinkModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'nyan',
          loadChildren: () =>
            import('./nyan/nyan.module').then(m => m.NyanModule)
        },
        {
          path: 'about',
          loadChildren: () =>
            import('./about/about.module').then(m => m.AboutModule)
        }
      ],
      {
        preloadingStrategy: QuicklinkStrategy //PreloadAllModules
      }
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
