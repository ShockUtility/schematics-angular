import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { <%= classify(name) %>Effects } from './store/<%= dasherize(name) %>.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([
      <%= classify(name) %>Effects
    ])
  ],
  providers: [],
})
export class <%= classify(name) %>Module {}
