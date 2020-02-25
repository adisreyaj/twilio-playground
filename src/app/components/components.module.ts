import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { CallCardComponent } from "./call-card/call-card.component";
import { ConferenceCardComponent } from "./conference-card/conference-card.component";

@NgModule({
  declarations: [HeaderComponent, CallCardComponent, ConferenceCardComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, CallCardComponent, ConferenceCardComponent]
})
export class ComponentsModule {}
