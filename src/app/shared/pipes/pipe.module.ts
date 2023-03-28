import {NgModule} from "@angular/core";
import {BreakLinePipe} from "./text-styling/break-line/break-line.pipe";
import { CapitalizePipe } from './text-styling/capitalize/capitalize.pipe';

@NgModule({
    declarations: [
        BreakLinePipe,
        CapitalizePipe,
    ],
    exports: [
        BreakLinePipe,
        CapitalizePipe,
    ],
})
export class PipeModule {

}