var _Scene_Menu_prototype_createCommandWindow =
  Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function () {
  _Scene_Menu_prototype_createCommandWindow.call(this);

  // �A�C�e���}�ӂ�I�������ꍇ�̎��s���e���`
  this._commandWindow.setHandler("itembook", function () {
    Game_Interpreter.prototype.pluginCommand("ItemBook", ["open"]);
  });
};

var _Window_MenuCommand_prototype_addOriginalCommands =
  Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function () {
  _Window_MenuCommand_prototype_addOriginalCommands.call(this);
  // ���j���[�ɃA�C�e���}�ӂ̍��ڂ�ǉ�
  this.addCommand("TIPS", "itembook", true);
};
