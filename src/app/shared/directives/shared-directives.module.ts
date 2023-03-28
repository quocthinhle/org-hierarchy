import { NgModule } from "@angular/core";
import { BackgroundColorDirective } from "./style-component/background-color.directive";

@NgModule({
    declarations: [
        BackgroundColorDirective
    ],
    exports: [
        BackgroundColorDirective
    ],
})
export class SharedDirectivesModule {

}