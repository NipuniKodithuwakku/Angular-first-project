import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<div>
    <table>
      <tr>
        <td [attr.colspan]="3">three</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
    </table>
  </div>`,
})
export class AppComponent {}
