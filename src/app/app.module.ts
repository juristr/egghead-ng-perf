import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomPreloader } from './custom-preloader';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'nyan',
          loadChildren: () =>
            import('./nyan/nyan.module').then(m => m.NyanModule),
          data: {
            preload: true
          }
        },
        {
          path: 'about',
          loadChildren: () =>
            import('./about/about.module').then(m => m.AboutModule)
        }
      ],
      {
        preloadingStrategy: CustomPreloader //PreloadAllModules
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
