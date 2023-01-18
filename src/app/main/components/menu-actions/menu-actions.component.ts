import { MatDialog } from "@angular/material/dialog";
import { Component } from "@angular/core";
import { MapService } from "@map/map.service";
import { FarmModalComponent } from "./farm-modal/farm-modal.component";
 
@Component({
  selector: "app-menu-actions",
  templateUrl: "./menu-actions.component.html",
  styleUrls: ["./menu-actions.component.scss"],
})
export class MenuActionsComponent {
  constructor(private mapService: MapService, private MatDialog: MatDialog) {}

  openDashboard() {
    this.MatDialog.open( FarmModalComponent, {
      height: "400px",
      width: "600px",
    });

    console.log("Open Dashboard");
    console.log(`idField: ${this.mapService.activeField}`);
  }

  deleteField() {
    console.log("Delete Field");
    console.log(`idField: ${this.mapService.activeField}`);
  }
}
