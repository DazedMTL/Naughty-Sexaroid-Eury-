var _Scene_Menu_prototype_createCommandWindow =
  Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function () {
  _Scene_Menu_prototype_createCommandWindow.call(this);

  // アイテム図鑑を選択した場合の実行内容を定義
  this._commandWindow.setHandler("itembook", function () {
    Game_Interpreter.prototype.pluginCommand("ItemBook", ["open"]);
  });
};

var _Window_MenuCommand_prototype_addOriginalCommands =
  Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function () {
  _Window_MenuCommand_prototype_addOriginalCommands.call(this);
  // メニューにアイテム図鑑の項目を追加
  this.addCommand("TIPS", "itembook", true);
};
