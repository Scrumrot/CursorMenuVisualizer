// import { Record } from "immutable";

interface IMenuSchema {
  width: number /** The width of the menu in screen units. I don't recommend going bigger than this as parts of the menu may be hidden for users playing on very low FoVs.	default: 5 */;
  height: number /** The height of the menu in screen units. I don't recommend going bigger than this as parts of the menu may be hidden for users playing on very low FoVs.	default: 2.5 */;
  soundOnClick: boolean /** Determines whether buttons will produce a sound at the player's position when clicked.	default: true */;
  debug: boolean /** Shows click areas for buttons that are currently clickable. Make sure to turn this off when you're done creating the menu, as the click area texts will use a significant amount of the text budget.	default: false */;
  showPrompt: boolean /** When enabled, players not in the menu will see a HUD at the top of their screen telling them to press interact to open the menu.	default: true */;
  showLoading: boolean /** When enabled, the menu will attempt to show a HUD indicating that it is loading. May be misleading for menus that load quickly, or not show up for menus that take several seconds to load. default: true */;
  disableHud: boolean /** When enabled, opening the menu will hide all native HUD elements on the player's screen, and closing it will show them again. default: true*/;
  showServerLoad: boolean /**Creates a simple HUD text on game start displaying server load to the host player in the top right corner. Left this in since it might be quicker than making your own if you're starting work on a game mode. default: false*/;
}

const MenuSchemaDefault: IMenuSchema = {
  width: 5,
  height: 2.5,
  soundOnClick: true,
  debug: false,
  showPrompt: true,
  showLoading: true,
  disableHud: true,
  showServerLoad: false
};
// const MenuSchemaRecord = Record();
