import { MatDialogRef } from "@angular/material/dialog";

export class BaseDialog<DialogCompnent> {
    constructor(public dialogRef: MatDialogRef<DialogCompnent>) {
    }

    close(){
        this.dialogRef.close()
    }
}
