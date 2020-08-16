import { NgModule } from '@angular/core';
import { HeaderBackComponent } from './header-back/header-back.component';
import { GraphComponent } from './graph/graph.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [HeaderBackComponent, GraphComponent],
    exports: [HeaderBackComponent],
    imports: [
        IonicModule,
        CommonModule,
    ],
    entryComponents: [
        GraphComponent
    ]
})
export class ComponentsModule {}