declare var require: any;

import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppComponent } from './app.component';

@Injectable()
export class CustomLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
      return of(require(`src/respresso/localization/respresso.strings-${lang}.json`));
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useClass: CustomLoader}
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
