import { NgModule } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  bootstrap: [ContainerComponent],
  declarations: [ContainerComponent],
})
export class AppModule {}
