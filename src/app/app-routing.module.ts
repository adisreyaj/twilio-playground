import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/dashboard/dashboard.module").then(
        m => m.DashboardModule
      )
  },
  {
    path: "config",
    loadChildren: () =>
      import("./modules/config/config.module").then(m => m.ConfigModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
