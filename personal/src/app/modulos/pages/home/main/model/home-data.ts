import {WelcomeSection} from "./welcome-section";
import {RoleSection} from "./role-section";
import {HistorySection} from "./history-section";

export interface HomeData {
  welcomeSection: WelcomeSection;
  roleSection: RoleSection[];
  historySection: HistorySection
}
