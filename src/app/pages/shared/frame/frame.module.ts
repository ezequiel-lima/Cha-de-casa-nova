import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FramePageRoutingModule } from './frame-routing.module';

import { FramePage } from './frame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FramePageRoutingModule,
    ComponentsModule
  ],
  declarations: [FramePage]
})
export class FramePageModule {}
