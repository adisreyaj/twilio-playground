import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";

import { ConfigRoutingModule } from "./config-routing.module";
import { ConfigComponent } from "./config.component";

@NgModule({
  declarations: [ConfigComponent],
  imports: [CommonModule, FlexLayoutModule, ConfigRoutingModule]
})
export class ConfigModule {}
