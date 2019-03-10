import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

const myIport = [MatButtonModule, MatIconModule];
@NgModule({
    imports: [...myIport],
    exports: [...myIport]
})
export class MaterialModules {}
