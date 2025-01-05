import {WelcomeSection} from "./welcome-section";
import {RoleSection} from "./role-section";
import {HistorySection} from "./history-section";
import {Injectable, WritableSignal} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HomeState {
  welcomeSection!: WritableSignal<WelcomeSection>;
  roleSection!: WritableSignal<RoleSection[]>;
  historySection!: WritableSignal<HistorySection>;
}
