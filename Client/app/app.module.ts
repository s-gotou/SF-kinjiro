import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

import { ApiTranslationLoader } from './shared/services/api-translation-loader.service';

import { routing } from './app.routes';
import { AppService } from './app.service';
import { appReducer } from './app-store';
import { AppComponent } from './app.component';
import { WorkingRecordsComponent } from './working-records/working-records.component';
import { WorkingRecordsDetailsComponent } from './working-records-details/working-records-details.component';

@NgModule({
    declarations: [AppComponent, WorkingRecordsComponent, WorkingRecordsDetailsComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        routing,
        // FormsModule,
        HttpModule,
        // Only module that app module loads
        CoreModule.forRoot(),
        SharedModule.forRoot(),
        HomeModule,
        StoreModule.provideStore(appReducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        TranslateModule.forRoot({ loader: { provide: TranslateLoader, useClass: ApiTranslationLoader } })
    ],
    providers: [
        AppService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
