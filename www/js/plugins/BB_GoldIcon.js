//=============================================================================
// BB_GoldIcon.js
//=============================================================================

/*:
 * @plugindesc お金の単位にアイコンを使用可能にするプラグイン
 * @author ビービー
 *
 * @help お金の単位にアイコンを使用可能にします
 * 制御文字"\G"(通貨単位に置き換え)が使えなくなります。
 *
 * このプラグインにプラグインコマンドはありません。
 *
 *
 * 利用規約：
 * 作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 * についても制限はありません。
 * このプラグインはもうあなたのものです。
 *
 */

(function () {
  var pluginName = "BB_GoldIcon";

  Window_Base.prototype.drawCurrencyValue = function (
    value,
    unit,
    x,
    y,
    width
  ) {
    var unitWidth = Math.min(80, this.textWidth(unit));
    this.resetTextColor();
    this.drawText(value, x, y, width - 36 - 6, "right");
    this.changeTextColor(this.systemColor());
    this.drawTextEx(unit, x + width - 36, y, unitWidth, "right");
  };
})();
