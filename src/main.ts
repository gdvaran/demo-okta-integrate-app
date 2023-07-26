import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


export class App {
}
platformBrowserDynamic().bootstrapModule(AppModule);
