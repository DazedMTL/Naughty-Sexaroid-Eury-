/**
 * Live2D Cubism Core
 * (C) 2019 Live2D Inc. All rights reserved.
 *
 * This file is licensed pursuant to the license agreement below.
 * This file corresponds to the "Redistributable Code" in the agreement.
 * https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_en.html
 */
var Live2DCubismCore;
!(function (Live2DCubismCore) {
  var _csm = (function () {
      function _csm() {}
      return (
        (_csm.getVersion = function () {
          return _em.ccall("csmGetVersion", "number", [], []);
        }),
        (_csm.getLatestMocVersion = function () {
          return _em.ccall("csmGetLatestMocVersion", "number", [], []);
        }),
        (_csm.getMocVersion = function (moc) {
          return _em.ccall("csmGetMocVersion", "number", ["number"], [moc]);
        }),
        (_csm.getSizeofModel = function (moc) {
          return _em.ccall("csmGetSizeofModel", "number", ["number"], [moc]);
        }),
        (_csm.reviveMocInPlace = function (memory, mocSize) {
          return _em.ccall(
            "csmReviveMocInPlace",
            "number",
            ["number", "number"],
            [memory, mocSize]
          );
        }),
        (_csm.initializeModelInPlace = function (moc, memory, modelSize) {
          return _em.ccall(
            "csmInitializeModelInPlace",
            "number",
            ["number", "number", "number"],
            [moc, memory, modelSize]
          );
        }),
        (_csm.getParameterCount = function (model) {
          return _em.ccall(
            "csmGetParameterCount",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getParameterIds = function (model) {
          return _em.ccall("csmGetParameterIds", "number", ["number"], [model]);
        }),
        (_csm.getParameterMinimumValues = function (model) {
          return _em.ccall(
            "csmGetParameterMinimumValues",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getParameterMaximumValues = function (model) {
          return _em.ccall(
            "csmGetParameterMaximumValues",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getParameterDefaultValues = function (model) {
          return _em.ccall(
            "csmGetParameterDefaultValues",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getParameterValues = function (model) {
          return _em.ccall(
            "csmGetParameterValues",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getPartCount = function (model) {
          return _em.ccall("csmGetPartCount", "number", ["number"], [model]);
        }),
        (_csm.getPartIds = function (model) {
          return _em.ccall("csmGetPartIds", "number", ["number"], [model]);
        }),
        (_csm.getPartOpacities = function (model) {
          return _em.ccall(
            "csmGetPartOpacities",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getPartParentPartIndices = function (model) {
          return _em.ccall(
            "csmGetPartParentPartIndices",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getDrawableCount = function (model) {
          return _em.ccall(
            "csmGetDrawableCount",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getDrawableIds = function (model) {
          return _em.ccall("csmGetDrawableIds", "number", ["number"], [model]);
        }),
        (_csm.getDrawableConstantFlags = function (model) {
          return _em.ccall(
            "csmGetDrawableConstantFlags",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getDrawableDynamicFlags = function (model) {
          return _em.ccall(
            "csmGetDrawableDynamicFlags",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getDrawableTextureIndices = function (model) {
          return _em.ccall(
            "csmGetDrawableTextureIndices",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getDrawableDrawOrders = function (model) {
          return _em.ccall(
            "csmGetDrawableDrawOrders",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getDrawableRenderOrders = function (model) {
          return _em.ccall(
            "csmGetDrawableRenderOrders",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getDrawableOpacities = function (model) {
          return _em.ccall(
            "csmGetDrawableOpacities",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getDrawableMaskCounts = function (model) {
          return _em.ccall(
            "csmGetDrawableMaskCounts",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getDrawableMasks = function (model) {
          return _em.ccall(
            "csmGetDrawableMasks",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getDrawableVertexCounts = function (model) {
          return _em.ccall(
            "csmGetDrawableVertexCounts",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getDrawableVertexPositions = function (model) {
          return _em.ccall(
            "csmGetDrawableVertexPositions",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getDrawableVertexUvs = function (model) {
          return _em.ccall(
            "csmGetDrawableVertexUvs",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getDrawableIndexCounts = function (model) {
          return _em.ccall(
            "csmGetDrawableIndexCounts",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.getDrawableIndices = function (model) {
          return _em.ccall(
            "csmGetDrawableIndices",
            "number",
            ["number"],
            [model]
          );
        }),
        (_csm.mallocMoc = function (mocSize) {
          return _em.ccall("csmMallocMoc", "number", ["number"], [mocSize]);
        }),
        (_csm.mallocModelAndInitialize = function (moc) {
          return _em.ccall(
            "csmMallocModelAndInitialize",
            "number",
            ["number"],
            [moc]
          );
        }),
        (_csm.malloc = function (size) {
          return _em.ccall("csmMalloc", "number", ["number"], [size]);
        }),
        (_csm.setLogFunction = function (handler) {
          _em.ccall("csmSetLogFunction", null, ["number"], [handler]);
        }),
        (_csm.updateModel = function (model) {
          _em.ccall("csmUpdateModel", null, ["number"], [model]);
        }),
        (_csm.readCanvasInfo = function (
          model,
          outSizeInPixels,
          outOriginInPixels,
          outPixelsPerUnit
        ) {
          _em.ccall(
            "csmReadCanvasInfo",
            null,
            ["number", "number", "number", "number"],
            [model, outSizeInPixels, outOriginInPixels, outPixelsPerUnit]
          );
        }),
        (_csm.resetDrawableDynamicFlags = function (model) {
          _em.ccall("csmResetDrawableDynamicFlags", null, ["number"], [model]);
        }),
        (_csm.free = function (memory) {
          _em.ccall("csmFree", null, ["number"], [memory]);
        }),
        _csm
      );
    })(),
    Version = (function () {
      function Version() {}
      return (
        (Version.csmGetVersion = function () {
          return _csm.getVersion();
        }),
        (Version.csmGetLatestMocVersion = function () {
          return _csm.getLatestMocVersion();
        }),
        (Version.csmGetMocVersion = function (moc) {
          return _csm.getMocVersion(moc._ptr);
        }),
        Version
      );
    })();
  Live2DCubismCore.Version = Version;
  var Logging = (function () {
    function Logging() {}
    return (
      (Logging.csmSetLogFunction = function (handler) {
        Logging.logFunction = handler;
        var pointer = _em.addFunction(Logging.wrapLogFunction, "vi");
        _csm.setLogFunction(pointer);
      }),
      (Logging.csmGetLogFunction = function () {
        return Logging.logFunction;
      }),
      (Logging.wrapLogFunction = function (messagePtr) {
        var messageStr = _em.UTF8ToString(messagePtr);
        Logging.logFunction(messageStr);
      }),
      Logging
    );
  })();
  Live2DCubismCore.Logging = Logging;
  var Moc = (function () {
    function Moc(mocBytes) {
      var memory = _csm.mallocMoc(mocBytes.byteLength);
      memory &&
        (new Uint8Array(_em.HEAPU8.buffer, memory, mocBytes.byteLength).set(
          new Uint8Array(mocBytes)
        ),
        (this._ptr = _csm.reviveMocInPlace(memory, mocBytes.byteLength)),
        this._ptr || _csm.free(memory));
    }
    return (
      (Moc.fromArrayBuffer = function (buffer) {
        if (!buffer) return null;
        var moc = new Moc(buffer);
        return moc._ptr ? moc : null;
      }),
      (Moc.prototype._release = function () {
        _csm.free(this._ptr), (this._ptr = 0);
      }),
      Moc
    );
  })();
  Live2DCubismCore.Moc = Moc;
  var Model = (function () {
    function Model(moc) {
      (this._ptr = _csm.mallocModelAndInitialize(moc._ptr)),
        this._ptr &&
          ((this.parameters = new Parameters(this._ptr)),
          (this.parts = new Parts(this._ptr)),
          (this.drawables = new Drawables(this._ptr)),
          (this.canvasinfo = new CanvasInfo(this._ptr)));
    }
    return (
      (Model.fromMoc = function (moc) {
        var model = new Model(moc);
        return model._ptr ? model : null;
      }),
      (Model.prototype.update = function () {
        _csm.updateModel(this._ptr);
      }),
      (Model.prototype.release = function () {
        _csm.free(this._ptr), (this._ptr = 0);
      }),
      Model
    );
  })();
  Live2DCubismCore.Model = Model;
  var CanvasInfo = function (modelPtr) {
    if (modelPtr) {
      var _canvasSize_data = new Float32Array(2),
        _canvasSize_nDataBytes =
          _canvasSize_data.length * _canvasSize_data.BYTES_PER_ELEMENT,
        _canvasSize_dataPtr = _csm.malloc(_canvasSize_nDataBytes),
        _canvasSize_dataHeap = new Uint8Array(
          _em.HEAPU8.buffer,
          _canvasSize_dataPtr,
          _canvasSize_nDataBytes
        );
      _canvasSize_dataHeap.set(new Uint8Array(_canvasSize_data.buffer));
      var _canvasOrigin_data = new Float32Array(2),
        _canvasOrigin_nDataBytes =
          _canvasOrigin_data.length * _canvasOrigin_data.BYTES_PER_ELEMENT,
        _canvasOrigin_dataPtr = _csm.malloc(_canvasOrigin_nDataBytes),
        _canvasOrigin_dataHeap = new Uint8Array(
          _em.HEAPU8.buffer,
          _canvasOrigin_dataPtr,
          _canvasOrigin_nDataBytes
        );
      _canvasOrigin_dataHeap.set(new Uint8Array(_canvasOrigin_data.buffer));
      var _canvasPPU_data = new Float32Array(1),
        _canvasPPU_nDataBytes =
          _canvasPPU_data.length * _canvasPPU_data.BYTES_PER_ELEMENT,
        _canvasPPU_dataPtr = _csm.malloc(_canvasPPU_nDataBytes),
        _canvasPPU_dataHeap = new Uint8Array(
          _em.HEAPU8.buffer,
          _canvasPPU_dataPtr,
          _canvasPPU_nDataBytes
        );
      _canvasPPU_dataHeap.set(new Uint8Array(_canvasPPU_data.buffer)),
        _csm.readCanvasInfo(
          modelPtr,
          _canvasSize_dataHeap.byteOffset,
          _canvasOrigin_dataHeap.byteOffset,
          _canvasPPU_dataHeap.byteOffset
        ),
        (_canvasSize_data = new Float32Array(
          _canvasSize_dataHeap.buffer,
          _canvasSize_dataHeap.byteOffset,
          _canvasSize_dataHeap.length
        )),
        (_canvasOrigin_data = new Float32Array(
          _canvasOrigin_dataHeap.buffer,
          _canvasOrigin_dataHeap.byteOffset,
          _canvasOrigin_dataHeap.length
        )),
        (_canvasPPU_data = new Float32Array(
          _canvasPPU_dataHeap.buffer,
          _canvasPPU_dataHeap.byteOffset,
          _canvasPPU_dataHeap.length
        )),
        (this.CanvasWidth = _canvasSize_data[0]),
        (this.CanvasHeight = _canvasSize_data[1]),
        (this.CanvasOriginX = _canvasOrigin_data[0]),
        (this.CanvasOriginY = _canvasOrigin_data[1]),
        (this.PixelsPerUnit = _canvasPPU_data[0]),
        _csm.free(_canvasSize_dataHeap.byteOffset),
        _csm.free(_canvasOrigin_dataHeap.byteOffset),
        _csm.free(_canvasPPU_dataHeap.byteOffset);
    }
  };
  Live2DCubismCore.CanvasInfo = CanvasInfo;
  var Parameters = function (modelPtr) {
    var length = 0;
    (this.count = _csm.getParameterCount(modelPtr)),
      (length = _csm.getParameterCount(modelPtr)),
      (this.ids = new Array(length));
    for (
      var _ids = new Uint32Array(
          _em.HEAPU32.buffer,
          _csm.getParameterIds(modelPtr),
          length
        ),
        i = 0;
      i < _ids.length;
      i++
    )
      this.ids[i] = _em.UTF8ToString(_ids[i]);
    (length = _csm.getParameterCount(modelPtr)),
      (this.minimumValues = new Float32Array(
        _em.HEAPF32.buffer,
        _csm.getParameterMinimumValues(modelPtr),
        length
      )),
      (length = _csm.getParameterCount(modelPtr)),
      (this.maximumValues = new Float32Array(
        _em.HEAPF32.buffer,
        _csm.getParameterMaximumValues(modelPtr),
        length
      )),
      (length = _csm.getParameterCount(modelPtr)),
      (this.defaultValues = new Float32Array(
        _em.HEAPF32.buffer,
        _csm.getParameterDefaultValues(modelPtr),
        length
      )),
      (length = _csm.getParameterCount(modelPtr)),
      (this.values = new Float32Array(
        _em.HEAPF32.buffer,
        _csm.getParameterValues(modelPtr),
        length
      ));
  };
  Live2DCubismCore.Parameters = Parameters;
  var Parts = function (modelPtr) {
    var length = 0;
    (this.count = _csm.getPartCount(modelPtr)),
      (length = _csm.getPartCount(modelPtr)),
      (this.ids = new Array(length));
    for (
      var _ids = new Uint32Array(
          _em.HEAPU32.buffer,
          _csm.getPartIds(modelPtr),
          length
        ),
        i = 0;
      i < _ids.length;
      i++
    )
      this.ids[i] = _em.UTF8ToString(_ids[i]);
    (length = _csm.getPartCount(modelPtr)),
      (this.opacities = new Float32Array(
        _em.HEAPF32.buffer,
        _csm.getPartOpacities(modelPtr),
        length
      )),
      (length = _csm.getPartCount(modelPtr)),
      (this.parentIndices = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getPartParentPartIndices(modelPtr),
        length
      ));
  };
  Live2DCubismCore.Parts = Parts;
  var Drawables = (function () {
    function Drawables(modelPtr) {
      this._modelPtr = modelPtr;
      var length = 0,
        length2 = null;
      (this.count = _csm.getDrawableCount(modelPtr)),
        (length = _csm.getDrawableCount(modelPtr)),
        (this.ids = new Array(length));
      for (
        var _ids = new Uint32Array(
            _em.HEAPU32.buffer,
            _csm.getDrawableIds(modelPtr),
            length
          ),
          i = 0;
        i < _ids.length;
        i++
      )
        this.ids[i] = _em.UTF8ToString(_ids[i]);
      (length = _csm.getDrawableCount(modelPtr)),
        (this.constantFlags = new Uint8Array(
          _em.HEAPU8.buffer,
          _csm.getDrawableConstantFlags(modelPtr),
          length
        )),
        (length = _csm.getDrawableCount(modelPtr)),
        (this.dynamicFlags = new Uint8Array(
          _em.HEAPU8.buffer,
          _csm.getDrawableDynamicFlags(modelPtr),
          length
        )),
        (length = _csm.getDrawableCount(modelPtr)),
        (this.textureIndices = new Int32Array(
          _em.HEAP32.buffer,
          _csm.getDrawableTextureIndices(modelPtr),
          length
        )),
        (length = _csm.getDrawableCount(modelPtr)),
        (this.drawOrders = new Int32Array(
          _em.HEAP32.buffer,
          _csm.getDrawableDrawOrders(modelPtr),
          length
        )),
        (length = _csm.getDrawableCount(modelPtr)),
        (this.renderOrders = new Int32Array(
          _em.HEAP32.buffer,
          _csm.getDrawableRenderOrders(modelPtr),
          length
        )),
        (length = _csm.getDrawableCount(modelPtr)),
        (this.opacities = new Float32Array(
          _em.HEAPF32.buffer,
          _csm.getDrawableOpacities(modelPtr),
          length
        )),
        (length = _csm.getDrawableCount(modelPtr)),
        (this.maskCounts = new Int32Array(
          _em.HEAP32.buffer,
          _csm.getDrawableMaskCounts(modelPtr),
          length
        )),
        (length = _csm.getDrawableCount(modelPtr)),
        (this.vertexCounts = new Int32Array(
          _em.HEAP32.buffer,
          _csm.getDrawableVertexCounts(modelPtr),
          length
        )),
        (length = _csm.getDrawableCount(modelPtr)),
        (this.indexCounts = new Int32Array(
          _em.HEAP32.buffer,
          _csm.getDrawableIndexCounts(modelPtr),
          length
        )),
        (length = _csm.getDrawableCount(modelPtr)),
        (length2 = new Int32Array(
          _em.HEAP32.buffer,
          _csm.getDrawableMaskCounts(modelPtr),
          length
        )),
        (this.masks = new Array(length));
      var _masks = new Uint32Array(
        _em.HEAPU32.buffer,
        _csm.getDrawableMasks(modelPtr),
        length
      );
      for (i = 0; i < _masks.length; i++)
        this.masks[i] = new Int32Array(
          _em.HEAP32.buffer,
          _masks[i],
          length2[i]
        );
      (length = _csm.getDrawableCount(modelPtr)),
        (length2 = new Int32Array(
          _em.HEAP32.buffer,
          _csm.getDrawableVertexCounts(modelPtr),
          length
        )),
        (this.vertexPositions = new Array(length));
      var _vertexPositions = new Uint32Array(
        _em.HEAPU32.buffer,
        _csm.getDrawableVertexPositions(modelPtr),
        length
      );
      for (i = 0; i < _vertexPositions.length; i++)
        this.vertexPositions[i] = new Float32Array(
          _em.HEAPF32.buffer,
          _vertexPositions[i],
          2 * length2[i]
        );
      (length = _csm.getDrawableCount(modelPtr)),
        (length2 = new Int32Array(
          _em.HEAP32.buffer,
          _csm.getDrawableVertexCounts(modelPtr),
          length
        )),
        (this.vertexUvs = new Array(length));
      var _vertexUvs = new Uint32Array(
        _em.HEAPU32.buffer,
        _csm.getDrawableVertexUvs(modelPtr),
        length
      );
      for (i = 0; i < _vertexUvs.length; i++)
        this.vertexUvs[i] = new Float32Array(
          _em.HEAPF32.buffer,
          _vertexUvs[i],
          2 * length2[i]
        );
      (length = _csm.getDrawableCount(modelPtr)),
        (length2 = new Int32Array(
          _em.HEAP32.buffer,
          _csm.getDrawableIndexCounts(modelPtr),
          length
        )),
        (this.indices = new Array(length));
      var _indices = new Uint32Array(
        _em.HEAPU32.buffer,
        _csm.getDrawableIndices(modelPtr),
        length
      );
      for (i = 0; i < _indices.length; i++)
        this.indices[i] = new Uint16Array(
          _em.HEAPU16.buffer,
          _indices[i],
          length2[i]
        );
    }
    return (
      (Drawables.prototype.resetDynamicFlags = function () {
        _csm.resetDrawableDynamicFlags(this._modelPtr);
      }),
      Drawables
    );
  })();
  Live2DCubismCore.Drawables = Drawables;
  var Utils = (function () {
    function Utils() {}
    return (
      (Utils.hasBlendAdditiveBit = function (bitfield) {
        return 1 == (1 & bitfield);
      }),
      (Utils.hasBlendMultiplicativeBit = function (bitfield) {
        return 2 == (2 & bitfield);
      }),
      (Utils.hasIsDoubleSidedBit = function (bitfield) {
        return 4 == (4 & bitfield);
      }),
      (Utils.hasIsInvertedMaskBit = function (bitfield) {
        return 8 == (8 & bitfield);
      }),
      (Utils.hasIsVisibleBit = function (bitfield) {
        return 1 == (1 & bitfield);
      }),
      (Utils.hasVisibilityDidChangeBit = function (bitfield) {
        return 2 == (2 & bitfield);
      }),
      (Utils.hasOpacityDidChangeBit = function (bitfield) {
        return 4 == (4 & bitfield);
      }),
      (Utils.hasDrawOrderDidChangeBit = function (bitfield) {
        return 8 == (8 & bitfield);
      }),
      (Utils.hasRenderOrderDidChangeBit = function (bitfield) {
        return 16 == (16 & bitfield);
      }),
      (Utils.hasVertexPositionsDidChangeBit = function (bitfield) {
        return 32 == (32 & bitfield);
      }),
      Utils
    );
  })();
  Live2DCubismCore.Utils = Utils;
  var _scriptDir,
    _em_module =
      ((_scriptDir =
        "undefined" != typeof document && document.currentScript
          ? document.currentScript.src
          : void 0),
      "undefined" != typeof __filename &&
        (_scriptDir = _scriptDir || __filename),
      function (_em_module) {
        var b;
        (_em_module = _em_module || {}),
          (b = b || (void 0 !== _em_module ? _em_module : {}));
        var n,
          l = {};
        for (n in b) b.hasOwnProperty(n) && (l[n] = b[n]);
        var t,
          p,
          q,
          r = !1;
        (p = "object" == typeof window),
          (q = "function" == typeof importScripts),
          (r =
            "object" == typeof process &&
            "object" == typeof process.versions &&
            "string" == typeof process.versions.node &&
            !p &&
            !q),
          (t = !p && !r && !q);
        var v,
          w,
          x,
          y,
          u = "";
        r
          ? ((u = __dirname + "/"),
            (v = function (a, c) {
              var d = z(a);
              return d
                ? c
                  ? d
                  : d.toString()
                : ((x = x || require("fs")),
                  (a = (y = y || require("path")).normalize(a)),
                  x.readFileSync(a, c ? null : "utf8"));
            }),
            (w = function (a) {
              return (
                (a = v(a, !0)).buffer || (a = new Uint8Array(a)),
                assert(a.buffer),
                a
              );
            }),
            1 < process.argv.length && process.argv[1].replace(/\\/g, "/"),
            process.argv.slice(2),
            process.on("uncaughtException", function (a) {
              throw a;
            }),
            process.on("unhandledRejection", B),
            (b.inspect = function () {
              return "[Emscripten Module object]";
            }))
          : t
          ? ("undefined" != typeof read &&
              (v = function (a) {
                var c = z(a);
                return c ? C(c) : read(a);
              }),
            (w = function (a) {
              var c;
              return (c = z(a))
                ? c
                : "function" == typeof readbuffer
                ? new Uint8Array(readbuffer(a))
                : (assert("object" == typeof (c = read(a, "binary"))), c);
            }),
            "undefined" != typeof print &&
              ("undefined" == typeof console && (console = {}),
              (console.log = print),
              (console.warn = console.error =
                "undefined" != typeof printErr ? printErr : print)))
          : (p || q) &&
            (q
              ? (u = self.location.href)
              : document.currentScript && (u = document.currentScript.src),
            _scriptDir && (u = _scriptDir),
            (u =
              0 !== u.indexOf("blob:")
                ? u.substr(0, u.lastIndexOf("/") + 1)
                : ""),
            (v = function (a) {
              try {
                var c = new XMLHttpRequest();
                return c.open("GET", a, !1), c.send(null), c.responseText;
              } catch (d) {
                if ((a = z(a))) return C(a);
                throw d;
              }
            }),
            q &&
              (w = function (a) {
                try {
                  var c = new XMLHttpRequest();
                  return (
                    c.open("GET", a, !1),
                    (c.responseType = "arraybuffer"),
                    c.send(null),
                    new Uint8Array(c.response)
                  );
                } catch (d) {
                  if ((a = z(a))) return a;
                  throw d;
                }
              }));
        var F,
          D = b.print || console.log.bind(console),
          E = b.printErr || console.warn.bind(console);
        for (n in l) l.hasOwnProperty(n) && (b[n] = l[n]);
        function da() {
          return {
            exports: (function (asmLibraryArg, wasmMemory, wasmTable) {
              var scratchBuffer = new ArrayBuffer(8),
                b = new Int32Array(scratchBuffer),
                c = new Float32Array(scratchBuffer),
                d = new Float64Array(scratchBuffer);
              function e(index) {
                return b[index];
              }
              function f(index, value) {
                b[index] = value;
              }
              function g() {
                return d[0];
              }
              function h(value) {
                d[0] = value;
              }
              function j(value) {
                c[0] = value;
              }
              function k() {
                return c[0];
              }
              var mem,
                U,
                global,
                env,
                buffer,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v,
                w,
                x,
                y,
                z,
                A,
                C,
                H,
                I,
                J,
                K,
                L,
                M,
                T =
                  ((mem = wasmMemory.buffer),
                  (U = new Uint8Array(mem)),
                  function (offset, s) {
                    var V, W;
                    if ("undefined" == typeof Buffer)
                      for (V = atob(s), W = 0; W < V.length; W++)
                        U[offset + W] = V.charCodeAt(W);
                    else
                      for (
                        V = Buffer.from(s, "base64"), W = 0;
                        W < V.length;
                        W++
                      )
                        U[offset + W] = V[W];
                  });
              return (
                T(
                  1024,
                  "CgBbQ1NNXSBbRV1Jbml0aWFsaXplRGVmb3JtZXJzKCk6IFVua25vd24gRGVmb3JtZXIgVHlwZS4KAE1PQzMAW0NTTV0gW0VdJXM6ICVzCgBbQ1NNXSBbRV1XYXJwRGVmb3JtZXI6OlRyYW5zZm9ybVRhcmdldCgpIGVycm9yLiBbJWRdIHAwMT0oJS40ZiAsICUuNGYpCgAlcwoAICAAW0NTTV0gW0VdY3NtUmV2aXZlTW9jSW5QbGFjZSBpcyBmYWlsZWQuIENvcnJ1cHRlZCAgbW9jMyBmaWxlLgoAImFkZHJlc3MiIGlzIG51bGwuAFtDU01dIFtXXVJvdGF0aW9uRGVmb3JtZXI6IE5vdCBmb3VuZCB0cmFuc2Zvcm1lZCBEaXJlY3Rpb24uCgAlMDJYIABbQ1NNXSBbRV1jc21SZXZpdmVNb2NJblBsYWNlIGlzIGZhaWxlZC4gVGhlIENvcmUgdW5zdXBwb3J0IGxhdGVyIHRoYW4gbW9jMyB2ZXI6WyVkXS4gVGhpcyBtb2MzIHZlciBpcyBbJWRdLgoAImFkZHJlc3MiIGFsaWdubWVudCBpcyBpbnZhbGlkLgBbQ1NNXSBbRV1VcGRhdGVEZWZvcm1lckhpZXJhcmNoeSgpOiBVbmtub3duIERlZm9ybWVyIFR5cGUuCgBbQ1NNXSBbRV1jc21HZXRNb2NWZXJzaW9uIGlzIGZhaWxlZC4gQ29ycnVwdGVkIG1vYzMgZmlsZS4KACJzaXplIiBpcyBpbnZhbGlkLgBMaXZlMkQgQ3ViaXNtIFNESyBDb3JlIFZlcnNpb24gJWQuJWQuJWQAIm1vZGVsIiBpcyBpbnZhbGlkLgBjc21HZXRNb2NWZXJzaW9uAGNzbVJldml2ZU1vY0luUGxhY2UAY3NtUmVhZENhbnZhc0luZm8AIm91dFNpemVJblBpeGVscyIgaXMgbnVsbC4AIm91dE9yaWdpbkluUGl4ZWxzIiBpcyBudWxsLgAib3V0UGl4ZWxzUGVyVW5pdCIgaXMgbnVsbC4AY3NtR2V0U2l6ZW9mTW9kZWwAIm1vYyIgaXMgaW52YWxpZC4AY3NtSW5pdGlhbGl6ZU1vZGVsSW5QbGFjZQAic2l6ZSIgaXMgaW52YWxpZABjc21VcGRhdGVNb2RlbABjc21HZXRQYXJhbWV0ZXJDb3VudABjc21HZXRQYXJhbWV0ZXJJZHMAY3NtR2V0UGFyYW1ldGVyTWluaW11bVZhbHVlcwBjc21HZXRQYXJhbWV0ZXJNYXhpbXVtVmFsdWVzAGNzbUdldFBhcmFtZXRlckRlZmF1bHRWYWx1ZXMAY3NtR2V0UGFyYW1ldGVyVmFsdWVzAGNzbUdldFBhcnRDb3VudABjc21HZXRQYXJ0SWRzAGNzbUdldFBhcnRPcGFjaXRpZXMAY3NtR2V0UGFydFBhcmVudFBhcnRJbmRpY2VzAGNzbUdldERyYXdhYmxlQ291bnQAY3NtR2V0RHJhd2FibGVJZHMAY3NtR2V0RHJhd2FibGVDb25zdGFudEZsYWdzAGNzbUdldERyYXdhYmxlRHluYW1pY0ZsYWdzAGNzbUdldERyYXdhYmxlVGV4dHVyZUluZGljZXMAY3NtR2V0RHJhd2FibGVEcmF3T3JkZXJzAGNzbUdldERyYXdhYmxlUmVuZGVyT3JkZXJzAGNzbUdldERyYXdhYmxlT3BhY2l0aWVzAGNzbUdldERyYXdhYmxlTWFza0NvdW50cwBjc21HZXREcmF3YWJsZU1hc2tzAGNzbUdldERyYXdhYmxlVmVydGV4Q291bnRzAGNzbUdldERyYXdhYmxlVmVydGV4UG9zaXRpb25zAGNzbUdldERyYXdhYmxlVmVydGV4VXZzAGNzbUdldERyYXdhYmxlSW5kZXhDb3VudHMAY3NtR2V0RHJhd2FibGVJbmRpY2VzAGNzbVJlc2V0RHJhd2FibGVEeW5hbWljRmxhZ3M="
                ),
                T(2572, "Cw=="),
                T(2611, "//////8="),
                T(
                  2680,
                  "GBgAAC0rICAgMFgweAAobnVsbCkAAAAAEQAKABEREQAAAAAFAAAAAAAACQAAAAAL"
                ),
                T(2736, "EQAPChEREQMKBwABEwkLCwAACQYLAAALAAYRAAAAERER"),
                T(2785, "Cw=="),
                T(2794, "EQAKChEREQAKAAACAAkLAAAACQALAAAL"),
                T(2843, "DA=="),
                T(2855, "DAAAAAAMAAAAAAkMAAAAAAAMAAAM"),
                T(2901, "Dg=="),
                T(2913, "DQAAAAQNAAAAAAkOAAAAAAAOAAAO"),
                T(2959, "EA=="),
                T(2971, "DwAAAAAPAAAAAAkQAAAAAAAQAAAQAAASAAAAEhIS"),
                T(3026, "EgAAABISEgAAAAAAAAk="),
                T(3075, "Cw=="),
                T(3087, "CgAAAAAKAAAAAAkLAAAAAAALAAAL"),
                T(3133, "DA=="),
                T(
                  3145,
                  "DAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVGLTBYKzBYIDBYLTB4KzB4IDB4AGluZgBJTkYAbmFuAE5BTgAu"
                ),
                T(
                  3232,
                  "AwAAAAQAAAAEAAAABgAAAIP5ogBETm4A/CkVANFXJwDdNPUAYtvAADyZlQBBkEMAY1H+ALveqwC3YcUAOm4kANJNQgBJBuAACeouAByS0QDrHf4AKbEcAOg+pwD1NYIARLsuAJzphAC0JnAAQX5fANaROQBTgzkAnPQ5AItfhAAo+b0A+B87AN7/lwAPmAUAES/vAApaiwBtH20Az342AAnLJwBGT7cAnmY/AC3qXwC6J3UA5evHAD178QD3OQcAklKKAPtr6gAfsV8ACF2NADADVgB7/EYA8KtrACC8zwA29JoA46kdAF5hkQAIG+YAhZllAKAUXwCNQGgAgNj/ACdzTQAGBjEAylYVAMmocwB74mAAa4zAABnERwDNZ8MACejcAFmDKgCLdsQAphyWAESv3QAZV9EApT4FAAUH/wAzfj8AwjLoAJhP3gC7fTIAJj3DAB5r7wCf+F4ANR86AH/yygDxhx0AfJAhAGokfADVbvoAMC13ABU7QwC1FMYAwxmdAK3EwgAsTUEADABdAIZ9RgDjcS0Am8aaADNiAAC00nwAtKeXADdV1QDXPvYAoxAYAE12/ABknSoAcNerAGN8+AB6sFcAFxXnAMBJVgA71tkAp4Q4ACQjywDWincAWlQjAAAfuQDxChsAGc7fAJ8x/wBmHmoAmVdhAKz7RwB+f9gAImW3ADLoiQDmv2AA78TNAGw2CQBdP9QAFt7XAFg73gDem5IA0iIoACiG6ADiWE0AxsoyAAjjFgDgfcsAF8BQAPMdpwAY4FsALhM0AIMSYgCDSAEA9Y5bAK2wfwAe6fIASEpDABBn0wCq3dgArl9CAGphzgAKKKQA05m0AAam8gBcd38Ao8KDAGE8iACKc3gAr4xaAG/XvQAtpmMA9L/LAI2B7wAmwWcAVcpFAMrZNgAoqNIAwmGNABLJdwAEJhQAEkabAMRZxADIxUQATbKRAAAX8wDUQ60AKUnlAP3VEAAAvvwAHpTMAHDO7gATPvUA7PGAALPnwwDH+CgAkwWUAMFxPgAuCbMAC0XzAIgSnACrIHsALrWfAEeSwgB7Mi8ADFVtAHKnkABr5x8AMcuWAHkWSgBBeeIA9N+JAOiUlwDi5oQAmTGXAIjtawBfXzYAu/0OAEiatABnpGwAcXJCAI1dMgCfFbgAvOUJAI0xJQD3dDkAMAUcAA0MAQBLCGgALO5YAEeqkAB05wIAvdYkAPd9pgBuSHIAnxbvAI6UpgC0kfYA0VNRAM8K8gAgmDMA9Ut+ALJjaADdPl8AQF0DAIWJfwBVUikAN2TAAG3YEAAySDIAW0x1AE5x1ABFVG4ACwnBACr1aQAUZtUAJwedAF0EUAC0O9sA6nbFAIf5FwBJa30AHSe6AJZpKQDGzKwArRRUAJDiagCI2YkALHJQAASkvgB3B5QA8zBwAAD8JwDqcagAZsJJAGTgPQCX3YMAoz+XAEOU/QANhowAMUHeAJI5nQDdcIwAF7fnAAjfOwAVNysAXICgAFqAkwAQEZIAD+jYAGyArwDb/0sAOJAPAFkYdgBipRUAYcu7AMeJuQAQQL0A0vIEAEl1JwDrtvYA2yK7AAoUqgCJJi8AZIN2AAk7MwAOlBoAUTqqAB2jwgCv7a4AXCYSAG3CTQAtepwAwFaXAAM/gwAJ8PYAK0CMAG0xmQA5tAcADCAVANjDWwD1ksQAxq1LAE7KpQCnN80A5qk2AKuSlADdQmgAGWPeAHaM7wBoi1IA/Ns3AK6hqwDfFTEAAK6hAAz72gBkTWYA7QW3ACllMABXVr8AR/86AGr5uQB1vvMAKJPfAKuAMABmjPYABMsVAPoiBgDZ5B0APbOkAFcbjwA2zQkATkLpABO+pAAzI7UA8KoaAE9lqADSwaUACz8PAFt4zQAj+XYAe4sEAIkXcgDGplMAb27iAO/rAACbSlgAxNq3AKpmugB2z88A0QIdALHxLQCMmcEAw613AIZI2gD3XaAAxoD0AKzwLwDd7JoAP1y8ANDebQCQxx8AKtu2AKMlOgAAr5oArVOTALZXBAApLbQAS4B+ANoHpwB2qg4Ae1mhABYSKgDcty0A+uX9AInb/gCJvv0A5HZsAAap/AA+gHAAhW4VAP2H/wAoPgcAYWczACoYhgBNveoAs+evAI9tbgCVZzkAMb9bAITXSAAw3xYAxy1DACVhNQDJcM4AMMu4AL9s/QCkAKIABWzkAFrdoAAhb0cAYhLSALlchABwYUkAa1bgAJlSAQBQVTcAHtW3ADPxxAATbl8AXTDkAIUuqQAdssMAoTI2AAi3pADqsdQAFvchAI9p5AAn/3cADAOAAI1ALQBPzaAAIKWZALOi0wAvXQoAtPlCABHaywB9vtAAm9vBAKsXvQDKooEACGpcAC5VFwAnAFUAfxTwAOEHhgAUC2QAlkGNAIe+3gDa/SoAayW2AHuJNAAF8/4Aub+eAGhqTwBKKqgAT8RaAC34vADXWpgA9MeVAA1NjQAgOqYApFdfABQ/sQCAOJUAzCABAHHdhgDJ3rYAv2D1AE1lEQABB2sAjLCsALLA0ABRVUgAHvsOAJVywwCjBjsAwEA1AAbcewDgRcwATin6ANbKyADo80EAfGTeAJtk2ADZvjEApJfDAHdY1ABp48UA8NoTALo6PABGGEYAVXVfANK99QBuksYArC5dAA5E7QAcPkIAYcSHACn96QDn1vMAInzKAG+RNQAI4MUA/9eNAG5q4gCw/cYAkwjBAHxddABrrbIAzW6dAD5yewDGEWoA98+pAClz3wC1yboAtwBRAOKyDQB0uiQA5X1gAHTYigANFSwAgRgMAH5mlAABKRYAn3p2AP39vgBWRe8A2X42AOzZEwCLurkAxJf8ADGoJwDxbsMAlMU2ANioVgC0qLUAz8wOABKJLQBvVzQALFaJAJnO4wDWILkAa16qAD4qnAARX8wA/QtKAOH0+wCOO20A4oYsAOnUhAD8tKkA7+7RAC41yQAvOWEAOCFEABvZyACB/AoA+0pqAC8c2ABTtIQATpmMAFQizAAqVdwAwMbWAAsZlgAacLgAaZVkACZaYAA/Uu4AfxEPAPS1EQD8y/UANLwtADS87gDoXcwA3V5gAGeOmwCSM+8AyRe4AGFYmwDhV7wAUYPGANg+EADdcUgALRzdAK8YoQAhLEYAWfPXANl6mACeVMAAT4b6AFYG/ADlea4AiSI2ADitIgBnk9wAVeiqAIImOADK55sAUQ2kAJkzsQCp1w4AaQVIAGWy8AB/iKcAiEyXAPnRNgAhkrMAe4JKAJjPIQBAn9wA3EdVAOF0OgBn60IA/p3fAF7UXwB7Z6QAuqx6AFX2ogAriCMAQbpVAFluCAAhKoYAOUeDAInj5gDlntQASftAAP9W6QAcD8oAxVmKAJT6KwDTwcUAD8XPANtargBHxYYAhUNiACGGOwAseZQAEGGHACpMewCALBoAQ78SAIgmkAB4PIkAqMTkAOXbewDEOsIAJvTqAPdnigANkr8AZaMrAD2TsQC9fAsApFHcACfdYwBp4d0AmpQZAKgplQBozigACe20AESfIABOmMoAcIJjAH58IwAPuTIAp/WOABRW5wAh8QgAtZ0qAG9+TQClGVEAtfmrAILf1gCW3WEAFjYCAMQ6nwCDoqEAcu1tADmNegCCuKkAazJcAEYnWwAANO0A0gB3APz0VQABWU0A4HGA"
                ),
                T(
                  6019,
                  "QPsh+T8AAAAALUR0PgAAAICYRvg8AAAAYFHMeDsAAACAgxvwOQAAAEAgJXo4AAAAgCKC4zYAAAAAHfNpNThj7T7aD0k/Xph7P9oPyT9pN6wxaCEiM7QPFDNoIaIz2w9JP9sPSb/kyxZA5MsWwAAAAAAAAACA2w9JQNsPScAAAIA/AADAPwAAAADcz9E1AAAAAADAFT8="
                ),
                T(6168, "BQ=="),
                T(6180, "DA=="),
                T(6204, "DQAAAA4AAADIGQAAAAQ="),
                T(6228, "AQ=="),
                T(6243, "Cv////8="),
                T(6500, "9B0="),
                (global = {
                  Int8Array: Int8Array,
                  Int16Array: Int16Array,
                  Int32Array: Int32Array,
                  Uint8Array: Uint8Array,
                  Uint16Array: Uint16Array,
                  Uint32Array: Uint32Array,
                  Float32Array: Float32Array,
                  Float64Array: Float64Array,
                  NaN: NaN,
                  Infinity: 1 / 0,
                  Math: Math,
                }),
                (env = asmLibraryArg),
                (buffer = wasmMemory.buffer),
                (m = env.memory),
                (n = wasmTable),
                (o = new global.Int8Array(buffer)),
                (p = new global.Int16Array(buffer)),
                (q = new global.Int32Array(buffer)),
                (r = new global.Uint8Array(buffer)),
                (s = new global.Uint16Array(buffer)),
                (t = new global.Uint32Array(buffer)),
                (u = new global.Float32Array(buffer)),
                (v = new global.Float64Array(buffer)),
                (w = global.Math.imul),
                (x = global.Math.fround),
                (y = global.Math.abs),
                (z = global.Math.clz32),
                (A = global.Math.min),
                global.Math.max,
                (C = global.Math.floor),
                global.Math.ceil,
                global.Math.sqrt,
                env.abort,
                global.NaN,
                (H = global.Infinity),
                (I = env.emscripten_memcpy_big),
                (J = env.emscripten_resize_heap),
                (K = env.fd_write),
                (L = 5251088),
                (M = 0),
                (n[1] = function (a, bf, cf, df) {
                  (a |= 0), (bf |= 0), (cf |= 0), (df |= 0);
                  var Gf,
                    ef = 0,
                    ff = x(0),
                    gf = x(0),
                    hf = 0,
                    jf = x(0),
                    kf = x(0),
                    lf = x(0),
                    mf = 0,
                    nf = x(0),
                    of = x(0),
                    pf = x(0),
                    qf = x(0),
                    rf = x(0),
                    sf = x(0),
                    tf = x(0),
                    uf = x(0),
                    vf = x(0),
                    wf = x(0),
                    xf = x(0),
                    yf = x(0),
                    zf = x(0),
                    Af = x(0),
                    Bf = 0,
                    Cf = 0,
                    Df = x(0),
                    Ef = x(0),
                    Ff = 0,
                    Hf = 0,
                    If = x(0),
                    Jf = x(0),
                    Kf = 0,
                    Lf = 0,
                    Mf = 0,
                    Nf = 0,
                    Of = 0,
                    Pf = 0,
                    Qf = 0,
                    Rf = 0,
                    Sf = 0,
                    Tf = x(0),
                    Uf = x(0),
                    Vf = x(0),
                    Wf = x(0),
                    Xf = x(0),
                    Yf = x(0),
                    Zf = x(0),
                    _f = 0,
                    $f = 0;
                  if (((L = Gf = (L - 32) | 0), 1 <= (0 | df)))
                    for (
                      Of = ((Bf = q[(a + 4) >> 2]) + -1) | 0,
                        Pf = ((Hf = q[a >> 2]) + -1) | 0,
                        Qf = Lf = ((mf = q[(a + 20) >> 2]) + (Bf << 3)) | 0,
                        Rf = Mf =
                          (((Kf = w(Hf, (Cf = (Bf + 1) | 0))) << 3) + mf) | 0,
                        Sf = Nf = (((Bf + Kf) << 3) + mf) | 0,
                        If = x(0 | Hf),
                        Jf = x(0 | Bf),
                        _f = q[(a + 8) >> 2],
                        a = 0;
                      ;

                    ) {
                      (lf = u[(4 + (ef = ((Ff = a << 3) + bf) | 0)) >> 2]),
                        (gf = x(lf * If)),
                        (nf = u[ef >> 2]),
                        (ff = x(nf * Jf)),
                        (ef = lf >= x(1));
                      a: if (
                        (lf < x(0)) ^ 1 &&
                        !(ef | (nf >= x(1)) | (nf < x(0)))
                      )
                        (ef =
                          x(y((sf = gf))) < x(2147483648) ? ~~gf : -2147483648),
                          (kf = x(sf - x(0 | ef))),
                          (hf =
                            x(y((gf = ff))) < x(2147483648)
                              ? ~~ff
                              : -2147483648),
                          (jf = x(gf - x(0 | hf))),
                          (ef = (hf + w(ef, Cf)) | 0),
                          (gf = _f
                            ? ((ff = x(x(1) - kf)),
                              (gf = x(x(1) - jf)),
                              (hf = ((ef << 3) + mf) | 0),
                              (ef = (((ef + Cf) << 3) + mf) | 0),
                              (u[(cf + Ff) >> 2] =
                                x(
                                  x(
                                    x(ff * x(gf * u[hf >> 2])) +
                                      x(ff * x(jf * u[(hf + 8) >> 2]))
                                  ) + x(kf * x(gf * u[ef >> 2]))
                                ) + x(kf * x(jf * u[(ef + 8) >> 2]))),
                              (ff = x(
                                x(
                                  x(ff * x(gf * u[(hf + 4) >> 2])) +
                                    x(ff * x(jf * u[(hf + 12) >> 2]))
                                ) + x(kf * x(gf * u[(ef + 4) >> 2]))
                              )),
                              x(kf * x(jf * u[(ef + 12) >> 2])))
                            : x(jf + kf) <= x(1)
                            ? ((ff = x(x(x(1) - jf) - kf)),
                              (hf = ((ef << 3) + mf) | 0),
                              (ef = (((ef + Cf) << 3) + mf) | 0),
                              (u[(cf + Ff) >> 2] =
                                x(
                                  x(ff * u[hf >> 2]) + x(jf * u[(hf + 8) >> 2])
                                ) + x(kf * u[ef >> 2])),
                              (ff = x(
                                x(ff * u[(hf + 4) >> 2]) +
                                  x(jf * u[(hf + 12) >> 2])
                              )),
                              x(kf * u[(ef + 4) >> 2]))
                            : ((ff = x(x(jf + x(-1)) + kf)),
                              (hf = (((ef + Cf) << 3) + mf) | 0),
                              (gf = x(x(1) - jf)),
                              (lf = x(x(1) - kf)),
                              (ef = ((ef << 3) + mf) | 0),
                              (u[(cf + Ff) >> 2] =
                                x(
                                  x(ff * u[(hf + 8) >> 2]) + x(gf * u[hf >> 2])
                                ) + x(lf * u[(ef + 8) >> 2])),
                              (ff = x(
                                x(ff * u[(hf + 12) >> 2]) +
                                  x(gf * u[(hf + 4) >> 2])
                              )),
                              x(lf * u[(ef + 12) >> 2])));
                      else {
                        if (
                          ($f ||
                            ((sf = u[(Sf + 4) >> 2]),
                            (Tf = u[(mf + 4) >> 2]),
                            (of = x(sf - Tf)),
                            (Uf = u[(Qf + 4) >> 2]),
                            (Vf = u[(Rf + 4) >> 2]),
                            (pf = x(Uf - Vf)),
                            (tf = x(x(of - pf) * x(0.5))),
                            (Wf = u[Nf >> 2]),
                            (Xf = u[mf >> 2]),
                            (qf = x(Wf - Xf)),
                            (Yf = u[Lf >> 2]),
                            (Zf = u[Mf >> 2]),
                            (rf = x(Yf - Zf)),
                            (uf = x(x(qf - rf) * x(0.5))),
                            (pf = x(x(pf + of) * x(0.5))),
                            (rf = x(x(rf + qf) * x(0.5))),
                            ($f = 1),
                            (of = x(
                              x(x(x(x(Tf + Uf) + Vf) + sf) * x(0.25)) -
                                x(of * x(0.5))
                            )),
                            (qf = x(
                              x(x(x(x(Xf + Yf) + Zf) + Wf) * x(0.25)) -
                                x(qf * x(0.5))
                            ))),
                          !(
                            ((lf < x(3)) ^ 1) |
                            ((nf > x(-2)) ^ 1) |
                            (((nf < x(3)) ^ 1) | ((lf > x(-2)) ^ 1))
                          ))
                        ) {
                          b: if (nf <= x(0)) {
                            if (lf <= x(0)) {
                              (kf = x(x(lf + x(2)) * x(0.5))),
                                (jf = x(x(nf + x(2)) * x(0.5))),
                                (ff = x(tf + tf)),
                                (Df = x(of - ff)),
                                (gf = x(uf + uf)),
                                (Ef = x(qf - gf)),
                                (zf = x(of - x(pf + pf))),
                                (vf = x(zf - ff)),
                                (Af = x(qf - x(rf + rf))),
                                (wf = x(Af - gf)),
                                (xf = u[(mf + 4) >> 2]),
                                (yf = u[mf >> 2]);
                              break b;
                            }
                            if (ef) {
                              (ff = x(tf * x(3))),
                                (gf = x(of - x(pf + pf))),
                                (zf = x(ff + gf)),
                                (vf = x(uf * x(3))),
                                (wf = x(qf - x(rf + rf))),
                                (Af = x(vf + wf)),
                                (kf = x(x(lf + x(-1)) * x(0.5))),
                                (jf = x(x(nf + x(2)) * x(0.5))),
                                (xf = x(ff + of)),
                                (yf = x(vf + qf)),
                                (vf = x(tf + gf)),
                                (wf = x(uf + wf)),
                                (Df = u[(Rf + 4) >> 2]),
                                (Ef = u[Mf >> 2]);
                              break b;
                            }
                            (ff = x(of - x(pf + pf))),
                              (ef = Pf),
                              (hf =
                                x(y(gf)) < x(2147483648) ? ~~gf : -2147483648),
                              (kf = x(
                                0 | (ef = (0 | hf) == (0 | Hf) ? ef : hf)
                              )),
                              (jf = x(kf / If)),
                              (vf = x(x(jf * tf) + ff)),
                              (sf = x(jf * uf)),
                              (jf = x(qf - x(rf + rf))),
                              (wf = x(sf + jf)),
                              (lf = x(x(0 | (hf = (ef + 1) | 0)) / If)),
                              (zf = x(x(lf * tf) + ff)),
                              (Af = x(x(lf * uf) + jf)),
                              (jf = x(x(nf + x(2)) * x(0.5))),
                              (kf = x(gf - kf)),
                              (ef = ((w(ef, Cf) << 3) + mf) | 0),
                              (Df = u[(ef + 4) >> 2]),
                              (Ef = u[ef >> 2]),
                              (ef = ((w(hf, Cf) << 3) + mf) | 0),
                              (xf = u[(ef + 4) >> 2]),
                              (yf = u[ef >> 2]);
                          } else if (nf >= x(1)) {
                            if (lf <= x(0)) {
                              (kf = x(x(lf + x(2)) * x(0.5))),
                                (jf = x(x(nf + x(-1)) * x(0.5))),
                                (ff = x(tf + tf)),
                                (vf = x(x(pf + of) - ff)),
                                (gf = x(uf + uf)),
                                (wf = x(x(rf + qf) - gf)),
                                (xf = x(x(pf * x(3)) + of)),
                                (Df = x(xf - ff)),
                                (yf = x(x(rf * x(3)) + qf)),
                                (Ef = x(yf - gf)),
                                (zf = u[(Qf + 4) >> 2]),
                                (Af = u[Lf >> 2]);
                              break b;
                            }
                            if (ef) {
                              (ff = x(tf * x(3))),
                                (zf = x(ff + x(pf + of))),
                                (gf = x(uf * x(3))),
                                (Af = x(gf + x(rf + qf))),
                                (sf = ff),
                                (ff = x(x(pf * x(3)) + of)),
                                (xf = x(sf + ff)),
                                (sf = gf),
                                (gf = x(x(rf * x(3)) + qf)),
                                (yf = x(sf + gf)),
                                (kf = x(x(lf + x(-1)) * x(0.5))),
                                (jf = x(x(nf + x(-1)) * x(0.5))),
                                (Df = x(tf + ff)),
                                (Ef = x(uf + gf)),
                                (vf = u[(Sf + 4) >> 2]),
                                (wf = u[Nf >> 2]);
                              break b;
                            }
                            (ff = x(x(pf * x(3)) + of)),
                              (ef = Pf),
                              (hf =
                                x(y(gf)) < x(2147483648) ? ~~gf : -2147483648),
                              (kf = x(
                                0 | (ef = (0 | hf) == (0 | Hf) ? ef : hf)
                              )),
                              (jf = x(kf / If)),
                              (Df = x(x(jf * tf) + ff)),
                              (sf = x(jf * uf)),
                              (jf = x(x(rf * x(3)) + qf)),
                              (Ef = x(sf + jf)),
                              (lf = x(x(0 | (hf = (ef + 1) | 0)) / If)),
                              (xf = x(x(lf * tf) + ff)),
                              (yf = x(x(lf * uf) + jf)),
                              (jf = x(x(nf + x(-1)) * x(0.5))),
                              (kf = x(gf - kf)),
                              (ef = (((w(ef, Cf) + Bf) << 3) + mf) | 0),
                              (vf = u[(ef + 4) >> 2]),
                              (wf = u[ef >> 2]),
                              (ef = (((w(hf, Cf) + Bf) << 3) + mf) | 0),
                              (zf = u[(ef + 4) >> 2]),
                              (Af = u[ef >> 2]);
                          } else
                            lf <= x(0)
                              ? ((kf = x(x(lf + x(2)) * x(0.5))),
                                (ef = Of),
                                (hf =
                                  x(y((gf = ff))) < x(2147483648)
                                    ? ~~ff
                                    : -2147483648),
                                (ff = x(
                                  0 | (ef = (0 | hf) == (0 | Bf) ? ef : hf)
                                )),
                                (jf = x(gf - ff)),
                                (ff = x(ff / Jf)),
                                (gf = x(tf + tf)),
                                (vf = x(x(x(ff * pf) + of) - gf)),
                                (sf = x(x(ff * rf) + qf)),
                                (ff = x(uf + uf)),
                                (wf = x(sf - ff)),
                                (lf = x(x(0 | (hf = (ef + 1) | 0)) / Jf)),
                                (Df = x(x(x(lf * pf) + of) - gf)),
                                (Ef = x(x(x(lf * rf) + qf) - ff)),
                                (zf =
                                  u[(4 + (ef = ((ef << 3) + mf) | 0)) >> 2]),
                                (Af = u[ef >> 2]),
                                (xf =
                                  u[(4 + (ef = ((hf << 3) + mf) | 0)) >> 2]),
                                (yf = u[ef >> 2]))
                              : ef
                              ? ((sf = gf = x(tf * x(3))),
                                (ef = Of),
                                (hf =
                                  x(y(ff)) < x(2147483648)
                                    ? ~~ff
                                    : -2147483648),
                                (jf = x(
                                  0 | (ef = (0 | hf) == (0 | Bf) ? ef : hf)
                                )),
                                (kf = x(jf / Jf)),
                                (zf = x(sf + x(x(kf * pf) + of))),
                                (nf = x(uf * x(3))),
                                (Af = x(nf + x(x(kf * rf) + qf))),
                                (sf = gf),
                                (gf = x(x(0 | (hf = (ef + 1) | 0)) / Jf)),
                                (xf = x(sf + x(x(gf * pf) + of))),
                                (yf = x(nf + x(x(gf * rf) + qf))),
                                (kf = x(x(lf + x(-1)) * x(0.5))),
                                (jf = x(ff - jf)),
                                (vf =
                                  u[
                                    (4 + (ef = (((ef + Kf) << 3) + mf) | 0)) >>
                                      2
                                  ]),
                                (wf = u[ef >> 2]),
                                (Df =
                                  u[
                                    (4 + (ef = (((hf + Kf) << 3) + mf) | 0)) >>
                                      2
                                  ]),
                                (Ef = u[ef >> 2]))
                              : ((v[(16 + Gf) >> 3] = lf),
                                (q[Gf >> 2] = a),
                                (v[(8 + Gf) >> 3] = nf),
                                Y(4, 1104, Gf));
                          if (x(jf + kf) <= x(1)) {
                            (u[(cf + Ff) >> 2] =
                              x(wf + x(x(Ef - wf) * jf)) + x(x(Af - wf) * kf)),
                              (ff = x(vf + x(x(Df - vf) * jf))),
                              (gf = x(x(zf - vf) * kf));
                            break a;
                          }
                          (ff = x(x(1) - jf)),
                            (gf = x(x(1) - kf)),
                            (u[(cf + Ff) >> 2] =
                              x(yf + x(x(Af - yf) * ff)) + x(x(Ef - yf) * gf)),
                            (ff = x(xf + x(x(zf - xf) * ff))),
                            (gf = x(x(Df - xf) * gf));
                          break a;
                        }
                        (u[(cf + Ff) >> 2] = x(lf * uf) + x(x(nf * rf) + qf)),
                          (ff = x(lf * tf)),
                          (gf = x(x(nf * pf) + of));
                      }
                      if (
                        ((u[(4 + ((cf + Ff) | 0)) >> 2] = ff + gf),
                        (0 | df) == (0 | (a = (a + 1) | 0)))
                      )
                        break;
                    }
                  L = (32 + Gf) | 0;
                }),
                (n[2] = function (a, qe, re) {
                  (a |= 0), (qe |= 0);
                  var Ge,
                    He,
                    Ie,
                    Fe = 0;
                  if (
                    ((He = q[(140 + (re |= 0)) >> 2]),
                    (Ie = q[(re + 136) >> 2]),
                    (Ge = q[(a + 24) >> 2]),
                    -1 == (0 | (Fe = q[(a + 4) >> 2])))
                  )
                    return (
                      (q[((a = qe << 2) + Ie) >> 2] = q[(Ge + 16) >> 2]),
                      void (q[(a + He) >> 2] = 1065353216)
                    );
                  (re = (q[(re + 4) >> 2] + (Fe << 5)) | 0),
                    (Fe = q[(Ge + 20) >> 2]),
                    n[q[(re + 20) >> 2]](
                      q[(re + 24) >> 2],
                      Fe,
                      Fe,
                      q[(Ge + 12) >> 2]
                    ),
                    (qe <<= 2),
                    (a = q[(a + 4) >> 2] << 2),
                    (u[(qe + Ie) >> 2] = u[(Ge + 16) >> 2] * u[(a + Ie) >> 2]),
                    (q[(qe + He) >> 2] = q[(a + He) >> 2]);
                }),
                (n[3] = function (a, qe, re, Je) {
                  (a |= 0), (qe |= 0), (re |= 0), (Je |= 0);
                  var Se,
                    Ke = x(0),
                    Le = x(0),
                    Me = x(0),
                    Ne = x(0),
                    Oe = 0,
                    Pe = x(0),
                    Qe = 0,
                    Re = x(0),
                    Te = x(0),
                    Ue = x(0);
                  if (
                    ((Oe = q[(a + 28) >> 2]),
                    (Le = (function (a) {
                      var Rb,
                        Pb = x(0),
                        Qb = 0,
                        Sb = 0,
                        Tb = 0;
                      (L = Rb = (L - 16) | 0), j(a);
                      a: if (
                        (Qb = 2147483647 & (Sb = e(0))) >>> 0 <=
                        1061752794
                      ) {
                        if (((Pb = x(1)), Qb >>> 0 < 964689920)) break a;
                        Pb = aa(+a);
                      } else if (Qb >>> 0 <= 1081824209) {
                        if (((Tb = +a), 1075235812 <= Qb >>> 0)) {
                          Pb = x(
                            -aa(
                              ((0 | Sb) < 0
                                ? 3.141592653589793
                                : -3.141592653589793) + Tb
                            )
                          );
                          break a;
                        }
                        if ((0 | Sb) <= -1) {
                          Pb = $(Tb + 1.5707963267948966);
                          break a;
                        }
                        Pb = $(1.5707963267948966 - Tb);
                      } else if (Qb >>> 0 <= 1088565717) {
                        if (1085271520 <= Qb >>> 0) {
                          Pb = aa(
                            +a +
                              ((0 | Sb) < 0
                                ? 6.283185307179586
                                : -6.283185307179586)
                          );
                          break a;
                        }
                        if ((0 | Sb) <= -1) {
                          Pb = $(-4.71238898038469 - a);
                          break a;
                        }
                        Pb = $(a - 4.71238898038469);
                      } else if (((Pb = x(a - a)), !(2139095040 <= Qb >>> 0)))
                        if ((Qb = 3 & la(a, (8 + Rb) | 0)) >>> 0 <= 2) {
                          switch ((Qb - 1) | 0) {
                            default:
                              Pb = aa(v[(8 + Rb) >> 3]);
                              break a;
                            case 0:
                              Pb = $(-v[(8 + Rb) >> 3]);
                              break a;
                            case 1:
                          }
                          Pb = x(-aa(v[(8 + Rb) >> 3]));
                        } else Pb = $(v[(8 + Rb) >> 3]);
                      return (L = (16 + Rb) | 0), Pb;
                    })(
                      (Ke = x(
                        x(
                          x(u[a >> 2] + u[(a + 20) >> 2]) *
                            x(3.1415927410125732)
                        ) / x(180)
                      ))
                    )),
                    (Me = u[(a + 8) >> 2]),
                    (Se = q[(a + 24) >> 2]),
                    (Ke = (function (a) {
                      var Mb,
                        Fb = 0,
                        Nb = 0,
                        Ob = 0;
                      (L = Mb = (L - 16) | 0), j(a);
                      a: if (
                        (Fb = 2147483647 & (Ob = e(0))) >>> 0 <=
                        1061752794
                      ) {
                        if (Fb >>> 0 < 964689920) break a;
                        a = $(+a);
                      } else if (Fb >>> 0 <= 1081824209) {
                        if (((Nb = +a), Fb >>> 0 <= 1075235811)) {
                          if ((0 | Ob) <= -1) {
                            a = x(-aa(Nb + 1.5707963267948966));
                            break a;
                          }
                          a = aa(Nb + -1.5707963267948966);
                          break a;
                        }
                        a = $(
                          -(
                            ((0 | Ob) < 0
                              ? 3.141592653589793
                              : -3.141592653589793) + Nb
                          )
                        );
                      } else if (Fb >>> 0 <= 1088565717) {
                        if (((Nb = +a), Fb >>> 0 <= 1085271519)) {
                          if ((0 | Ob) <= -1) {
                            a = aa(Nb + 4.71238898038469);
                            break a;
                          }
                          a = x(-aa(Nb + -4.71238898038469));
                          break a;
                        }
                        a = $(
                          ((0 | Ob) < 0
                            ? 6.283185307179586
                            : -6.283185307179586) + Nb
                        );
                      } else if (2139095040 <= Fb >>> 0) a = x(a - a);
                      else if ((Fb = 3 & la(a, (8 + Mb) | 0)) >>> 0 <= 2) {
                        switch ((Fb - 1) | 0) {
                          default:
                            a = $(v[(8 + Mb) >> 3]);
                            break a;
                          case 0:
                            a = aa(v[(8 + Mb) >> 3]);
                            break a;
                          case 1:
                        }
                        a = $(-v[(8 + Mb) >> 3]);
                      } else a = x(-aa(v[(8 + Mb) >> 3]));
                      return (L = (16 + Mb) | 0), a;
                    })(Ke)),
                    0 < (0 | Je))
                  )
                    for (
                      Le = x(Me * Le),
                        Pe = x(Oe ? -1 : 1),
                        Te = x(Le * Pe),
                        Ne = x(Se ? -1 : 1),
                        Ue = x(Ne * x(Me * Ke)),
                        Le = x(Ne * Le),
                        Me = x(x(Me * x(-Ke)) * Pe),
                        Ke = u[(a + 16) >> 2],
                        Pe = u[(a + 12) >> 2];
                      (Oe = ((a = Qe << 3) + re) | 0),
                        (Ne = u[(a = (a + qe) | 0) >> 2]),
                        (Re = u[(a + 4) >> 2]),
                        (u[(Oe + 4) >> 2] = Ke + x(x(Ue * Ne) + x(Te * Re))),
                        (u[Oe >> 2] = Pe + x(x(Le * Ne) + x(Me * Re))),
                        (0 | (Qe = (Qe + 1) | 0)) != (0 | Je);

                    );
                }),
                (n[4] = function (a, qe, re) {
                  (a |= 0), (qe |= 0), (re |= 0);
                  var se,
                    te,
                    ze,
                    Ae,
                    Be,
                    ue = 0,
                    ve = x(0),
                    we = x(0),
                    xe = 0,
                    ye = x(0),
                    Ce = x(0),
                    De = x(0),
                    Ee = x(0);
                  if (
                    ((L = se = (L + -64) | 0),
                    (ze = q[(re + 140) >> 2]),
                    (Ae = q[(re + 136) >> 2]),
                    (te = q[(a + 24) >> 2]),
                    -1 != (0 | (Be = q[(a + 4) >> 2])))
                  ) {
                    (ue = q[(re + 4) >> 2]),
                      (xe = q[(te + 12) >> 2]),
                      (q[(24 + se) >> 2] = xe),
                      (re = q[(te + 16) >> 2]),
                      (q[(28 + se) >> 2] = re),
                      (q[(16 + se) >> 2] = 0),
                      (Ce =
                        1 == q[(8 + (ue = (ue + (Be << 5)) | 0)) >> 2]
                          ? x(-10)
                          : x(-0.10000000149011612)),
                      (u[(20 + se) >> 2] = Ce),
                      (q[(60 + se) >> 2] = re),
                      (q[(56 + se) >> 2] = xe),
                      n[q[(ue + 20) >> 2]](
                        q[(ue + 24) >> 2],
                        (56 + se) | 0,
                        (48 + se) | 0,
                        1
                      ),
                      (ye = x(1)),
                      (xe = 9);
                    b: {
                      for (;;) {
                        if (
                          ((re = xe),
                          (De = x(ye * x(0))),
                          (u[(32 + se) >> 2] = De + u[(56 + se) >> 2]),
                          (Ee = x(Ce * ye)),
                          (u[(36 + se) >> 2] = Ee + u[(60 + se) >> 2]),
                          n[q[(ue + 20) >> 2]](
                            q[(ue + 24) >> 2],
                            (32 + se) | 0,
                            (40 + se) | 0,
                            1
                          ),
                          (we = x(u[(44 + se) >> 2] - u[(52 + se) >> 2])),
                          (u[(44 + se) >> 2] = we),
                          (ve = x(u[(40 + se) >> 2] - u[(48 + se) >> 2])),
                          (u[(40 + se) >> 2] = ve),
                          we != x(0) || ve != x(0))
                        ) {
                          (re = q[(44 + se) >> 2]),
                            (q[(8 + se) >> 2] = q[(40 + se) >> 2]),
                            (q[(12 + se) >> 2] = re);
                          break b;
                        }
                        if (
                          ((u[(32 + se) >> 2] = u[(56 + se) >> 2] - De),
                          (u[(36 + se) >> 2] = u[(60 + se) >> 2] - Ee),
                          n[q[(ue + 20) >> 2]](
                            q[(ue + 24) >> 2],
                            (32 + se) | 0,
                            (40 + se) | 0,
                            1
                          ),
                          (we = x(u[(40 + se) >> 2] - u[(48 + se) >> 2])),
                          (u[(40 + se) >> 2] = we),
                          (ve = x(u[(44 + se) >> 2] - u[(52 + se) >> 2])),
                          (u[(44 + se) >> 2] = ve) != x(0) || we != x(0))
                        ) {
                          (u[(12 + se) >> 2] = -ve), (u[(8 + se) >> 2] = -we);
                          break b;
                        }
                        if (
                          ((xe = (re + -1) | 0),
                          (ye = x(ye * x(0.10000000149011612))),
                          !re)
                        )
                          break;
                      }
                      Y(3, 1265, 0);
                    }
                    (ve = (function (a, dh) {
                      var eh = x(0);
                      if (
                        (eh = x(
                          Aa(u[(4 + a) >> 2], u[a >> 2]) -
                            Aa(u[(4 + dh) >> 2], u[dh >> 2])
                        )) < x(-3.1415927410125732)
                      )
                        for (
                          ;
                          (eh = x(eh + x(6.2831854820251465))) <
                          x(-3.1415927410125732);

                        );
                      if (eh > x(3.1415927410125732))
                        for (
                          ;
                          (eh = x(eh + x(-6.2831854820251465))) >
                          x(3.1415927410125732);

                        );
                      return eh;
                    })((16 + se) | 0, (8 + se) | 0)),
                      n[q[(ue + 20) >> 2]](
                        q[(ue + 24) >> 2],
                        (24 + se) | 0,
                        (24 + se) | 0,
                        1
                      ),
                      (q[(te + 12) >> 2] = q[(24 + se) >> 2]),
                      (q[(te + 16) >> 2] = q[(28 + se) >> 2]),
                      (u[(te + 20) >> 2] =
                        u[(te + 20) >> 2] +
                        x(x(ve * x(-180)) / x(3.1415927410125732))),
                      (qe <<= 2),
                      (a = q[(a + 4) >> 2] << 2),
                      (u[(qe + Ae) >> 2] = u[(te + 4) >> 2] * u[(a + Ae) >> 2]),
                      (ve = x(u[(te + 8) >> 2] * u[(a + ze) >> 2])),
                      (u[(qe + ze) >> 2] = ve),
                      (u[(te + 8) >> 2] = ve);
                  } else
                    (q[((a = qe << 2) + Ae) >> 2] = q[(te + 4) >> 2]),
                      (q[(a + ze) >> 2] = q[(te + 8) >> 2]);
                  L = (64 + se) | 0;
                }),
                (n[5] = function (a) {
                  a |= 0;
                  var hg,
                    lg,
                    bf = 0,
                    cf = 0,
                    df = 0,
                    ag = 0,
                    bg = 0,
                    cg = x(0),
                    dg = 0,
                    eg = 0,
                    fg = 0,
                    gg = 0,
                    ig = 0,
                    jg = 0,
                    kg = 0,
                    mg = 0,
                    ng = 0,
                    og = 0,
                    pg = 0;
                  if (
                    ((fg = q[(a + 248) >> 2]),
                    (lg = q[(a + 204) >> 2]),
                    (hg = q[(a + 200) >> 2]),
                    !((0 | (bg = q[(a + 220) >> 2])) < 1))
                  ) {
                    for (
                      dg = q[(a + 236) >> 2],
                        ag = q[(a + 216) >> 2],
                        df = q[(a + 224) >> 2];
                      (u[((cf = bf << 2) + dg) >> 2] =
                        u[(cf + df) >> 2] * u[(cf + ag) >> 2]),
                        (0 | bg) != (0 | (bf = (bf + 1) | 0));

                    );
                    if (!((0 | bg) < 1))
                      for (
                        dg = q[(a + 240) >> 2],
                          ag = q[(a + 216) >> 2],
                          df = q[(a + 228) >> 2],
                          bf = 0;
                        (u[((cf = bf << 2) + dg) >> 2] =
                          u[(cf + df) >> 2] * u[(cf + ag) >> 2]),
                          (0 | bg) != (0 | (bf = (bf + 1) | 0));

                      );
                  }
                  if (1 <= (0 | hg))
                    for (mg = q[(a + 208) >> 2], bg = dg = 0; ; ) {
                      if (q[fg >> 2]) {
                        gg =
                          ((df = q[((cf = dg << 2) + q[(a + 212) >> 2]) >> 2]) +
                            bg) |
                          0;
                        c: {
                          if ((0 | df) <= 0)
                            q[(cf + q[(a + 276) >> 2]) >> 2] = 0;
                          else {
                            for (
                              ag = q[(a + 236) >> 2], cg = x(0), bf = bg;
                              (cg = x(cg + u[(ag + (bf << 2)) >> 2])),
                                (0 | (bf = (bf + 1) | 0)) < (0 | gg);

                            );
                            if (
                              ((u[(cf + q[(a + 276) >> 2]) >> 2] = cg),
                              !((0 | df) < 1))
                            ) {
                              for (
                                ag = q[(a + 240) >> 2], cg = x(0), bf = bg;
                                (cg = x(cg + u[(ag + (bf << 2)) >> 2])),
                                  (0 | (bf = (bf + 1) | 0)) < (0 | gg);

                              );
                              break c;
                            }
                          }
                          cg = x(0);
                        }
                        if (
                          ((bf = (cf + q[(a + 268) >> 2]) | 0),
                          (cg = x(cg + x(0.0010000000474974513))),
                          (ag = x(y(cg)) < x(2147483648) ? ~~cg : -2147483648),
                          (q[bf >> 2] = ag),
                          (ag =
                            (bf = q[(12 + (((dg << 4) + lg) | 0)) >> 2]) << 1),
                          (ig = q[(cf + q[(a + 272) >> 2]) >> 2]),
                          (bf = (0 | bf) < 1) ||
                            ba(ig, 0, (1 < (0 | ag) ? ag : 1) << 2),
                          !(bf | ((0 | df) < 1)))
                        )
                          for (
                            jg = q[(a + 244) >> 2],
                              ng = q[(a + 216) >> 2],
                              og = q[(a + 232) >> 2],
                              cf = bg;
                            ;

                          ) {
                            for (
                              eg = ((bf = cf << 2) + ng) | 0,
                                pg = q[(bf + og) >> 2],
                                df = bf = 0;
                              (u[(jg + (kg = df << 2)) >> 2] =
                                u[(pg + kg) >> 2] * u[eg >> 2]),
                                (0 | (df = (df + 1) | 0)) < (0 | ag);

                            );
                            for (
                              ;
                              (u[(eg = ((df = bf << 2) + ig) | 0) >> 2] =
                                u[(df + jg) >> 2] + u[eg >> 2]),
                                (0 | (bf = (bf + 1) | 0)) < (0 | ag);

                            );
                            if (!((0 | (cf = (cf + 1) | 0)) < (0 | gg))) break;
                          }
                      }
                      if (
                        ((fg = (fg + 4) | 0),
                        (bg = (q[((dg << 2) + mg) >> 2] + bg) | 0),
                        (0 | hg) == (0 | (dg = (dg + 1) | 0)))
                      )
                        break;
                    }
                }),
                (n[6] = function (a) {
                  a |= 0;
                  var Lg,
                    Pg,
                    Cg = 0,
                    Dg = 0,
                    Eg = 0,
                    Fg = 0,
                    Gg = 0,
                    Hg = 0,
                    Ig = x(0),
                    Jg = 0,
                    Kg = 0,
                    Mg = 0,
                    Ng = 0,
                    Og = 0,
                    Qg = 0,
                    Rg = 0,
                    Sg = 0,
                    Tg = 0,
                    Ug = 0;
                  if (
                    ((Kg = q[(a + 172) >> 2]),
                    (Lg = q[(a - -64) >> 2]),
                    (Pg = q[(a + 68) >> 2]),
                    1 <= (0 | (Eg = q[(a + 92) >> 2])))
                  )
                    for (
                      Gg = q[(a + 104) >> 2],
                        Hg = q[(a + 88) >> 2],
                        Dg = q[(a + 96) >> 2];
                      (u[((Fg = Cg << 2) + Gg) >> 2] =
                        u[(Dg + Fg) >> 2] * u[(Hg + Fg) >> 2]),
                        (0 | Eg) != (0 | (Cg = (Cg + 1) | 0));

                    );
                  if (1 <= (0 | Lg))
                    for (Qg = q[(a + 80) >> 2], Fg = Gg = 0; ; ) {
                      if (q[Kg >> 2]) {
                        if (
                          ((Mg =
                            ((Cg = q[(q[(a + 84) >> 2] + (Gg << 2)) >> 2]) +
                              Fg) |
                            0),
                          (Eg = (0 | Cg) < 1))
                        )
                          Ig = x(0);
                        else
                          for (
                            Hg = q[(a + 104) >> 2], Ig = x(0), Cg = Fg;
                            (Ig = x(Ig + u[(Hg + (Cg << 2)) >> 2])),
                              (0 | (Cg = (Cg + 1) | 0)) < (0 | Mg);

                          );
                        if (
                          ((Cg = (w(Gg, 24) + Pg) | 0),
                          (u[(Cg + 16) >> 2] = Ig),
                          (Hg = (Dg = q[(Cg + 12) >> 2]) << 1),
                          (Dg = (0 | Dg) < 1) ||
                            ba(
                              q[(Cg + 20) >> 2],
                              0,
                              (1 < (0 | Hg) ? Hg : 1) << 2
                            ),
                          !(Dg | Eg))
                        )
                          for (
                            Rg = q[(Cg + 20) >> 2],
                              Ng = q[(a + 108) >> 2],
                              Sg = q[(a + 88) >> 2],
                              Tg = q[(a + 100) >> 2],
                              Eg = Fg;
                            ;

                          ) {
                            for (
                              Jg = ((Cg = Eg << 2) + Sg) | 0,
                                Ug = q[(Cg + Tg) >> 2],
                                Dg = Cg = 0;
                              (u[((Og = Dg << 2) + Ng) >> 2] =
                                u[(Ug + Og) >> 2] * u[Jg >> 2]),
                                (0 | (Dg = (Dg + 1) | 0)) < (0 | Hg);

                            );
                            for (
                              ;
                              (u[(Jg = ((Dg = Cg << 2) + Rg) | 0) >> 2] =
                                u[(Dg + Ng) >> 2] + u[Jg >> 2]),
                                (0 | (Cg = (Cg + 1) | 0)) < (0 | Hg);

                            );
                            if (!((0 | (Eg = (Eg + 1) | 0)) < (0 | Mg))) break;
                          }
                      }
                      if (
                        ((Kg = (Kg + 4) | 0),
                        (Fg = (q[((Gg << 2) + Qg) >> 2] + Fg) | 0),
                        (0 | Lg) == (0 | (Gg = (Gg + 1) | 0)))
                      )
                        break;
                    }
                }),
                (n[7] = function (a) {
                  a |= 0;
                  var ch,
                    Vg = 0,
                    Wg = x(0),
                    Xg = 0,
                    Yg = 0,
                    Zg = 0,
                    _g = 0,
                    $g = 0,
                    ah = 0,
                    bh = 0;
                  if (
                    (($g = q[(a + 36) >> 2]),
                    (ch = q[(a + 4) >> 2]),
                    1 <= (0 | (Yg = q[(a + 24) >> 2])))
                  )
                    for (
                      ah = q[(a + 32) >> 2],
                        bh = q[(a + 20) >> 2],
                        Xg = q[(a + 28) >> 2];
                      (u[((Zg = Vg << 2) + ah) >> 2] =
                        u[(Xg + Zg) >> 2] * u[(Zg + bh) >> 2]),
                        (0 | Yg) != (0 | (Vg = (Vg + 1) | 0));

                    );
                  if (1 <= (0 | ch))
                    for (Zg = q[(a + 12) >> 2], Xg = 0; ; ) {
                      if (q[$g >> 2]) {
                        if (
                          (0 |
                            (Vg =
                              q[((Yg = _g << 2) + q[(a + 16) >> 2]) >> 2])) <
                          1
                        )
                          Wg = x(0);
                        else
                          for (
                            ah = (Vg + Xg) | 0,
                              bh = q[(a + 32) >> 2],
                              Wg = x(0),
                              Vg = Xg;
                            (Wg = x(Wg + u[(bh + (Vg << 2)) >> 2])),
                              (0 | (Vg = (Vg + 1) | 0)) < (0 | ah);

                          );
                        (Vg = (Yg + q[(a + 44) >> 2]) | 0),
                          (Wg = x(Wg + x(0.0010000000474974513))),
                          x(y(Wg)) < x(2147483648)
                            ? (q[Vg >> 2] = ~~Wg)
                            : (q[Vg >> 2] = -2147483648);
                      }
                      if (
                        (($g = ($g + 4) | 0),
                        (Xg = (q[(Zg + (_g << 2)) >> 2] + Xg) | 0),
                        (0 | ch) == (0 | (_g = (_g + 1) | 0)))
                      )
                        break;
                    }
                }),
                (n[8] = function (a) {
                  a |= 0;
                  var yg,
                    Bg,
                    qg = 0,
                    rg = 0,
                    sg = x(0),
                    tg = 0,
                    ug = 0,
                    vg = 0,
                    wg = 0,
                    xg = 0,
                    zg = 0,
                    Ag = 0;
                  if (
                    ((Ag = q[(a + 176) >> 2]),
                    (Bg = q[(a + 72) >> 2]),
                    (yg = q[(a + 76) >> 2]),
                    !((0 | (vg = q[(a + 124) >> 2])) < 1))
                  ) {
                    for (
                      wg = q[(a + 148) >> 2],
                        tg = q[(a + 120) >> 2],
                        ug = q[(a + 128) >> 2];
                      (u[((rg = qg << 2) + wg) >> 2] =
                        u[(rg + ug) >> 2] * u[(rg + tg) >> 2]),
                        (0 | vg) != (0 | (qg = (qg + 1) | 0));

                    );
                    if (!((0 | vg) < 1)) {
                      for (
                        wg = q[(a + 152) >> 2],
                          tg = q[(a + 120) >> 2],
                          ug = q[(a + 132) >> 2],
                          qg = 0;
                        (u[((rg = qg << 2) + wg) >> 2] =
                          u[(rg + ug) >> 2] * u[(rg + tg) >> 2]),
                          (0 | vg) != (0 | (qg = (qg + 1) | 0));

                      );
                      if (!((0 | vg) < 1)) {
                        for (
                          wg = q[(a + 156) >> 2],
                            tg = q[(a + 120) >> 2],
                            ug = q[(a + 136) >> 2],
                            qg = 0;
                          (u[((rg = qg << 2) + wg) >> 2] =
                            u[(rg + ug) >> 2] * u[(rg + tg) >> 2]),
                            (0 | vg) != (0 | (qg = (qg + 1) | 0));

                        );
                        if (!((0 | vg) < 1)) {
                          for (
                            wg = q[(a + 160) >> 2],
                              tg = q[(a + 120) >> 2],
                              ug = q[(a + 140) >> 2],
                              qg = 0;
                            (u[((rg = qg << 2) + wg) >> 2] =
                              u[(rg + ug) >> 2] * u[(rg + tg) >> 2]),
                              (0 | vg) != (0 | (qg = (qg + 1) | 0));

                          );
                          if (!((0 | vg) < 1))
                            for (
                              wg = q[(a + 164) >> 2],
                                tg = q[(a + 120) >> 2],
                                ug = q[(a + 144) >> 2],
                                qg = 0;
                              (u[((rg = qg << 2) + wg) >> 2] =
                                u[(rg + ug) >> 2] * u[(rg + tg) >> 2]),
                                (0 | vg) != (0 | (qg = (qg + 1) | 0));

                            );
                        }
                      }
                    }
                  }
                  if (1 <= (0 | Bg))
                    for (wg = q[(a + 112) >> 2], ug = 0; ; ) {
                      if (q[Ag >> 2]) {
                        b: {
                          c: {
                            d: {
                              e: {
                                if (
                                  (0 |
                                    (rg =
                                      q[
                                        (q[(a + 116) >> 2] + (xg << 2)) >> 2
                                      ])) <=
                                  0
                                )
                                  q[(4 + (((xg << 5) + yg) | 0)) >> 2] = 0;
                                else {
                                  for (
                                    zg = (rg + ug) | 0,
                                      tg = q[(a + 148) >> 2],
                                      sg = x(0),
                                      qg = ug;
                                    (sg = x(sg + u[(tg + (qg << 2)) >> 2])),
                                      (0 | (qg = (qg + 1) | 0)) < (0 | zg);

                                  );
                                  if (
                                    ((u[
                                      (4 + (vg = ((xg << 5) + yg) | 0)) >> 2
                                    ] = sg),
                                    !(rg = (0 | rg) < 1))
                                  ) {
                                    for (
                                      tg = q[(a + 152) >> 2],
                                        sg = x(0),
                                        qg = ug;
                                      (sg = x(sg + u[(tg + (qg << 2)) >> 2])),
                                        (0 | (qg = (qg + 1) | 0)) < (0 | zg);

                                    );
                                    if (((u[(vg + 20) >> 2] = sg), rg)) break e;
                                    for (
                                      tg = q[(a + 156) >> 2],
                                        sg = x(0),
                                        qg = ug;
                                      (sg = x(sg + u[(tg + (qg << 2)) >> 2])),
                                        (0 | (qg = (qg + 1) | 0)) < (0 | zg);

                                    );
                                    if (((u[(vg + 12) >> 2] = sg), rg)) break d;
                                    for (
                                      tg = q[(a + 160) >> 2],
                                        sg = x(0),
                                        qg = ug;
                                      (sg = x(sg + u[(tg + (qg << 2)) >> 2])),
                                        (0 | (qg = (qg + 1) | 0)) < (0 | zg);

                                    );
                                    if (((u[(vg + 16) >> 2] = sg), rg)) break c;
                                    for (
                                      tg = q[(a + 164) >> 2],
                                        sg = x(0),
                                        qg = ug;
                                      (sg = x(sg + u[(tg + (qg << 2)) >> 2])),
                                        (0 | (qg = (qg + 1) | 0)) < (0 | zg);

                                    );
                                    break b;
                                  }
                                }
                                q[(20 + (((xg << 5) + yg) | 0)) >> 2] = 0;
                              }
                              q[(12 + (((xg << 5) + yg) | 0)) >> 2] = 0;
                            }
                            q[(16 + (((xg << 5) + yg) | 0)) >> 2] = 0;
                          }
                          sg = x(0);
                        }
                        u[(8 + (((xg << 5) + yg) | 0)) >> 2] = sg;
                      }
                      if (
                        ((Ag = (Ag + 4) | 0),
                        (ug = (q[(wg + (xg << 2)) >> 2] + ug) | 0),
                        (0 | Bg) == (0 | (xg = (xg + 1) | 0)))
                      )
                        break;
                    }
                }),
                (n[9] = function (a) {
                  a |= 0;
                  var ae,
                    Ud = 0,
                    Vd = 0,
                    Wd = 0,
                    Xd = 0,
                    Yd = 0,
                    Zd = x(0),
                    _d = 0,
                    $d = 0,
                    be = 0,
                    ce = 0;
                  if (
                    ((ae = q[(a + 340) >> 2]),
                    1 <= (0 | (Wd = q[(a + 360) >> 2])))
                  )
                    for (
                      _d = q[(a + 368) >> 2],
                        $d = q[(a + 356) >> 2],
                        Vd = q[(a + 364) >> 2];
                      (u[((Xd = Ud << 2) + _d) >> 2] =
                        u[(Vd + Xd) >> 2] * u[(Xd + $d) >> 2]),
                        (0 | Wd) != (0 | (Ud = (Ud + 1) | 0));

                    );
                  if (1 <= (0 | ae))
                    for (
                      be = q[(a + 348) >> 2],
                        ce = q[(a + 344) >> 2],
                        Xd = q[(a + 352) >> 2],
                        Vd = 0;
                      ;

                    ) {
                      if ((0 | (Ud = q[((Wd = Yd << 2) + Xd) >> 2])) < 1)
                        Zd = x(0);
                      else
                        for (
                          _d = (Ud + Vd) | 0,
                            $d = q[(a + 368) >> 2],
                            Zd = x(0),
                            Ud = Vd;
                          (Zd = x(Zd + u[($d + (Ud << 2)) >> 2])),
                            (0 | (Ud = (Ud + 1) | 0)) < (0 | _d);

                        );
                      if (
                        ((u[(20 + ((w(Yd, 24) + ce) | 0)) >> 2] = Zd),
                        (Vd = (q[(Wd + be) >> 2] + Vd) | 0),
                        (0 | ae) == (0 | (Yd = (Yd + 1) | 0)))
                      )
                        break;
                    }
                }),
                (n[10] = function (a) {
                  var ud = 0,
                    vd = 0,
                    wd = 0,
                    xd = 0,
                    yd = 0,
                    zd = 0,
                    Ad = 0;
                  if (
                    !(
                      q[(380 + (a |= 0)) >> 2] ||
                      (0 | (ud = q[(a + 200) >> 2])) < 1
                    )
                  )
                    for (
                      zd = ((vd = q[(a + 204) >> 2]) + (ud << 4)) | 0,
                        ud = q[(a + 248) >> 2],
                        xd = q[(a + 272) >> 2];
                      ;

                    ) {
                      if (
                        q[ud >> 2] &&
                        ((a = 1), !((0 | (wd = q[(vd + 12) >> 2])) < 1))
                      )
                        for (
                          wd <<= 1, Ad = q[xd >> 2];
                          (u[(yd = ((a << 2) + Ad) | 0) >> 2] = -u[yd >> 2]),
                            (0 | (a = (a + 2) | 0)) < (0 | wd);

                        );
                      if (
                        ((xd = (xd + 4) | 0),
                        (ud = (ud + 4) | 0),
                        !((vd = (vd + 16) | 0) >>> 0 < zd >>> 0))
                      )
                        break;
                    }
                }),
                (n[11] = function (a, Fc, nd) {
                  (Fc |= 0), (nd |= 0);
                  var pd,
                    od = 0;
                  return (
                    fa(
                      (pd = q[(20 + (a |= 0)) >> 2]),
                      Fc,
                      (od =
                        nd >>> 0 < (od = (q[(a + 16) >> 2] - pd) | 0) >>> 0
                          ? nd
                          : od)
                    ),
                    (q[(a + 20) >> 2] = od + q[(a + 20) >> 2]),
                    0 | nd
                  );
                }),
                (n[12] = function (a) {
                  return 0;
                }),
                (n[13] = function (a, Fc, gd) {
                  (Fc |= 0), (gd |= 0);
                  var id,
                    hd = 0,
                    jd = 0,
                    kd = 0,
                    ld = 0,
                    md = 0;
                  for (
                    L = id = (L - 32) | 0,
                      hd = q[(28 + (a |= 0)) >> 2],
                      q[(16 + id) >> 2] = hd,
                      kd = q[(a + 20) >> 2],
                      q[(28 + id) >> 2] = gd,
                      q[(24 + id) >> 2] = Fc,
                      Fc = (kd - hd) | 0,
                      kd = ((q[(20 + id) >> 2] = Fc) + gd) | 0,
                      ld = 2,
                      Fc = (16 + id) | 0;
                    ;

                  ) {
                    a: {
                      if (
                        ((jd =
                          (hd = 0) |
                          K(q[(a + 60) >> 2], 0 | Fc, 0 | ld, (12 + id) | 0)) &&
                          ((q[1906] = jd), (hd = -1)),
                        (0 |
                          (hd = hd
                            ? (q[(12 + id) >> 2] = -1)
                            : q[(12 + id) >> 2])) !=
                          (0 | kd))
                      ) {
                        if (-1 < (0 | hd)) break a;
                        (q[(a + 28) >> 2] = 0),
                          (q[(a + 16) >> 2] = 0),
                          (q[(a + 20) >> 2] = 0),
                          (q[a >> 2] = 32 | q[a >> 2]),
                          2 != ((a = 0) | ld) &&
                            (a = (gd - q[(Fc + 4) >> 2]) | 0);
                      } else
                        (Fc = q[(a + 44) >> 2]),
                          (q[(a + 28) >> 2] = Fc),
                          (q[(a + 20) >> 2] = Fc),
                          (q[(a + 16) >> 2] = Fc + q[(a + 48) >> 2]),
                          (a = gd);
                      return (L = (32 + id) | 0), 0 | a;
                    }
                    (jd =
                      (hd -
                        ((md = (jd = q[(Fc + 4) >> 2]) >>> 0 < hd >>> 0)
                          ? jd
                          : 0)) |
                      0),
                      (q[(Fc = md ? (Fc + 8) | 0 : Fc) >> 2] = jd + q[Fc >> 2]),
                      (q[(Fc + 4) >> 2] = q[(Fc + 4) >> 2] - jd),
                      (kd = (kd - hd) | 0),
                      (ld = (ld - md) | 0);
                  }
                }),
                (n[14] = function (a, Fc, gd, hd) {
                  return (M = 0);
                }),
                (n[15] = function (a, Ub, Fc, Gc, Hc, Ic) {
                  (a |= 0),
                    (Ub = +Ub),
                    (Fc |= 0),
                    (Gc |= 0),
                    (Hc |= 0),
                    (Ic |= 0);
                  var Nc,
                    Zc,
                    dd,
                    Jc = 0,
                    Kc = 0,
                    Lc = 0,
                    Mc = 0,
                    Oc = 0,
                    Pc = 0,
                    Qc = 0,
                    Rc = 0,
                    Sc = 0,
                    Tc = 0,
                    Uc = 0,
                    Vc = 0,
                    Wc = 0,
                    Xc = 0,
                    Yc = 0,
                    _c = 0,
                    $c = 0;
                  if (
                    ((q[(44 + (L = Nc = (L - 560) | 0)) >> 2] = 0),
                    h(+Ub),
                    (Jc = 0 | e(1)),
                    (dd = 4294967295 < e(0) >>> 0 ? 0 : 1),
                    (Zc =
                      (0 | Jc) < -1 || ((0 | Jc) <= -1 && dd)
                        ? (h(+(Ub = -Ub)),
                          (Jc = 0 | e(1)),
                          e(0),
                          (Yc = 1),
                          3184)
                        : 2048 & Hc
                        ? ((Yc = 1), 3187)
                        : (Yc = 1 & Hc)
                        ? 3190
                        : 3185),
                    2146435072 != (2146435072 & Jc))
                  )
                    if (
                      ((Ub = (function na(a, oa) {
                        var qa,
                          ra,
                          pa = 0;
                        if (
                          (h(+a),
                          (pa = 0 | e(1)),
                          (qa = 0 | e(0)),
                          2047 != (0 | (pa = ((ra = pa) >>> 20) & 2047)))
                        ) {
                          if (!pa)
                            return (
                              (pa = oa),
                              (oa =
                                0 == a
                                  ? 0
                                  : ((a = na(0x10000000000000000 * a, oa)),
                                    (q[oa >> 2] + -64) | 0)),
                              (q[pa >> 2] = oa),
                              a
                            );
                          (q[oa >> 2] = pa + -1022),
                            f(0, 0 | qa),
                            f(1, (-2146435073 & ra) | 1071644672),
                            (a = +g());
                        }
                        return a;
                      })(Ub, (44 + Nc) | 0)),
                      0 != (Ub += Ub) &&
                        (q[(44 + Nc) >> 2] = q[(44 + Nc) >> 2] + -1),
                      (Vc = (16 + Nc) | 0),
                      97 != (0 | (_c = 32 | Ic)))
                    ) {
                      for (
                        Jc = (0 | Gc) < 0,
                          0 != Ub
                            ? ((Mc = (q[(44 + Nc) >> 2] + -28) | 0),
                              (q[(44 + Nc) >> 2] = Mc),
                              (Ub *= 268435456))
                            : (Mc = q[(44 + Nc) >> 2]),
                          Pc = Jc ? 6 : Gc,
                          Lc = Tc =
                            (0 | Mc) < 0 ? (48 + Nc) | 0 : (336 + Nc) | 0;
                        (Jc = (Ub < 4294967296) & (0 <= Ub) ? ~~Ub >>> 0 : 0),
                          (Lc = ((Gc = Lc) + 4) | 0),
                          0 != (Ub = 1e9 * (Ub - ((q[Gc >> 2] = Jc) >>> 0)));

                      );
                      if ((0 | Mc) < 1) (Jc = Lc), (Kc = Tc);
                      else
                        for (Kc = Tc; ; ) {
                          if (
                            ((Uc = (0 | Mc) < 29 ? Mc : 29),
                            !((Jc = (Lc + -4) | 0) >>> 0 < Kc >>> 0))
                          ) {
                            for (
                              Gc = Uc, Rc = 0;
                              (Qc = 0),
                                ($c = Rc),
                                (Rc = q[(Sc = Jc) >> 2]),
                                (Oc = 31 & Gc),
                                (Oc =
                                  32 <= (63 & Gc) >>> 0
                                    ? ((Mc = Rc << Oc), 0)
                                    : ((Mc =
                                        ((1 << Oc) - 1) & (Rc >>> (32 - Oc))),
                                      Rc << Oc)),
                                (Qc = (Mc + Qc) | 0),
                                (Qc =
                                  (Rc = ($c + Oc) | 0) >>> 0 < Oc >>> 0
                                    ? (Qc + 1) | 0
                                    : Qc),
                                ($c = Sc),
                                (Sc = gc(
                                  (Rc = hc((Oc = Rc), Qc, 1e9)),
                                  M,
                                  1e9
                                )),
                                (q[$c >> 2] = Oc - Sc),
                                Kc >>> 0 <= (Jc = (Jc + -4) | 0) >>> 0;

                            );
                            (Gc = Rc) && (q[(Kc = (Kc + -4) | 0) >> 2] = Gc);
                          }
                          for (
                            ;
                            Kc >>> 0 < (Jc = Lc) >>> 0 &&
                            !q[(Lc = (Jc + -4) | 0) >> 2];

                          );
                          if (
                            ((Mc = (q[(44 + Nc) >> 2] - Uc) | 0),
                            (Lc = Jc),
                            !(0 < (0 | (q[(44 + Nc) >> 2] = Mc))))
                          )
                            break;
                        }
                      if ((0 | Mc) <= -1)
                        for (
                          Xc = (1 + ((((Pc + 25) | 0) / 9) | 0)) | 0,
                            Uc = 102 == (0 | _c);
                          ;

                        ) {
                          if (
                            ((Rc = (0 | Mc) < -9 ? 9 : (0 - Mc) | 0),
                            Jc >>> 0 <= Kc >>> 0)
                          )
                            Kc = q[Kc >> 2] ? Kc : (Kc + 4) | 0;
                          else {
                            for (
                              Sc = 1e9 >>> Rc,
                                Oc = (-1 << Rc) ^ -1,
                                Mc = 0,
                                Lc = Kc;
                              (Gc = q[Lc >> 2]),
                                (q[Lc >> 2] = (Gc >>> Rc) + Mc),
                                (Mc = w(Sc, Gc & Oc)),
                                (Lc = (Lc + 4) | 0) >>> 0 < Jc >>> 0;

                            );
                            (Kc = q[Kc >> 2] ? Kc : (Kc + 4) | 0),
                              Mc && ((q[Jc >> 2] = Mc), (Jc = (Jc + 4) | 0));
                          }
                          if (
                            ((Mc = (Rc + q[(44 + Nc) >> 2]) | 0),
                            (Jc =
                              (0 | Xc) < (Jc - (Gc = Uc ? Tc : Kc)) >> 2
                                ? (Gc + (Xc << 2)) | 0
                                : Jc),
                            !((0 | (q[(44 + Nc) >> 2] = Mc)) < 0))
                          )
                            break;
                        }
                      if (
                        !(
                          Jc >>> (Lc = 0) <= Kc >>> 0 ||
                          ((Lc = w((Tc - Kc) >> 2, 9)),
                          (Mc = 10),
                          (Gc = q[Kc >> 2]) >>> 0 < 10)
                        )
                      )
                        for (
                          ;
                          (Lc = (Lc + 1) | 0),
                            (Mc = w(Mc, 10)) >>> 0 <= Gc >>> 0;

                        );
                      if (
                        (0 |
                          (Gc =
                            (((Pc - (102 == (0 | _c) ? 0 : Lc)) | 0) -
                              ((103 == (0 | _c)) & (0 != (0 | Pc)))) |
                            0)) <
                        ((w((Jc - Tc) >> 2, 9) + -9) | 0)
                      ) {
                        if (
                          ((Qc =
                            (((Tc +
                              ((Oc = ((0 | (Sc = (Gc + 9216) | 0)) / 9) | 0) <<
                                2)) |
                              0) -
                              4092) |
                            0),
                          (Gc = 10),
                          (0 | (Mc = (Sc - w(Oc, 9)) | 0)) <= 7)
                        )
                          for (
                            ;
                            (Gc = w(Gc, 10)),
                              (Oc = (0 | Mc) < 7),
                              (Mc = (Mc + 1) | 0),
                              Oc;

                          );
                        if (
                          ((Xc = (Qc + 4) | 0),
                          ((Rc =
                            ((Uc = q[Qc >> 2]) -
                              w(Gc, (Sc = ((Uc >>> 0) / (Gc >>> 0)) | 0))) |
                            0) ||
                            (0 | Xc) != (0 | Jc)) &&
                            ((Wc =
                              Rc >>> 0 < (Oc = Gc >>> 1) >>> 0
                                ? 0.5
                                : (0 | Jc) == (0 | Xc) && (0 | Oc) == (0 | Rc)
                                ? 1
                                : 1.5),
                            (Ub = 1 & Sc ? 9007199254740994 : 9007199254740992),
                            !Yc | (45 != r[0 | Zc]) || ((Wc = -Wc), (Ub = -Ub)),
                            (Oc = (Uc - Rc) | 0),
                            (q[Qc >> 2] = Oc),
                            Ub + Wc != Ub))
                        ) {
                          if (
                            ((Gc = (Gc + Oc) | 0),
                            1e9 <= (q[Qc >> 2] = Gc) >>> 0)
                          )
                            for (
                              ;
                              (Qc = (Qc + -4) | (q[Qc >> 2] = 0)) >>> 0 <
                                Kc >>> 0 && (q[(Kc = (Kc + -4) | 0) >> 2] = 0),
                                (Gc = (q[Qc >> 2] + 1) | 0),
                                999999999 < (q[Qc >> 2] = Gc) >>> 0;

                            );
                          if (
                            ((Lc = w((Tc - Kc) >> 2, 9)),
                            (Mc = 10),
                            !((Gc = q[Kc >> 2]) >>> 0 < 10))
                          )
                            for (
                              ;
                              (Lc = (Lc + 1) | 0),
                                (Mc = w(Mc, 10)) >>> 0 <= Gc >>> 0;

                            );
                        }
                        Jc = (Gc = (Qc + 4) | 0) >>> 0 < Jc >>> 0 ? Gc : Jc;
                      }
                      j: {
                        for (;;) {
                          if ((Uc = Jc) >>> (Sc = 0) <= Kc >>> 0) break j;
                          if (q[(Jc = (Uc + -4) | 0) >> 2]) break;
                        }
                        Sc = 1;
                      }
                      if (103 == (0 | _c)) {
                        if (
                          ((Pc =
                            (((Gc =
                              ((0 | Lc) < (0 | (Jc = Pc || 1))) &
                              (-5 < (0 | Lc)))
                              ? -1 ^ Lc
                              : -1) +
                              Jc) |
                            0),
                          (Ic = ((Gc ? -1 : -2) + Ic) | 0),
                          !(Oc = 8 & Hc))
                        ) {
                          if (
                            ((Jc = 9),
                            Sc &&
                              (Oc = q[(Uc + -4) >> 2]) &&
                              !((Oc >>> (Jc = 0)) % (Gc = 10)))
                          )
                            for (
                              ;
                              (Jc = (Jc + 1) | 0),
                                !((Oc >>> 0) % ((Gc = w(Gc, 10)) >>> 0));

                            );
                          (Gc = (w((Uc - Tc) >> 2, 9) + -9) | 0),
                            (Pc =
                              102 != (32 | Ic)
                                ? ((Oc = 0) | Pc) <
                                  (0 |
                                    (Gc =
                                      0 <
                                      (0 | (Gc = (((Gc + Lc) | 0) - Jc) | 0))
                                        ? Gc
                                        : 0))
                                  ? Pc
                                  : Gc
                                : ((Oc = 0) | Pc) <
                                  (0 |
                                    (Gc =
                                      0 < (0 | (Gc = (Gc - Jc) | 0)) ? Gc : 0))
                                ? Pc
                                : Gc);
                        }
                      } else Oc = 8 & Hc;
                      if (
                        ((Qc = 0 != (0 | (Mc = Pc | Oc))),
                        (Gc = a),
                        ($c = Fc),
                        (Jc = 0 < (0 | Lc) ? Lc : 0),
                        102 != (0 | (Rc = 32 | Ic)))
                      ) {
                        if (
                          ((Vc -
                            (Jc = ea(((Jc = Lc >> 31) + Lc) ^ Jc, 0, Vc))) |
                            0) <=
                          1
                        )
                          for (
                            ;
                            (o[0 | (Jc = (Jc + -1) | 0)] = 48),
                              ((Vc - Jc) | 0) < 2;

                          );
                        (o[0 | (Xc = (Jc + -2) | 0)] = Ic),
                          (o[(Jc + -1) | 0] = (0 | Lc) < 0 ? 45 : 43),
                          (Jc = (Vc - Xc) | 0);
                      }
                      _(
                        Gc,
                        32,
                        $c,
                        (Qc =
                          (1 + ((Jc + ((Qc + ((Pc + Yc) | 0)) | 0)) | 0)) | 0),
                        Hc
                      ),
                        Z(a, Zc, Yc),
                        _(a, 48, Fc, Qc, 65536 ^ Hc);
                      n: {
                        o: {
                          p: {
                            if (102 == (0 | Rc)) {
                              for (
                                Gc = (16 + Nc) | 8,
                                  Lc = (16 + Nc) | 9,
                                  Kc = Ic = Tc >>> 0 < Kc >>> 0 ? Tc : Kc;
                                ;

                              ) {
                                Jc = ea(q[Kc >> 2], 0, Lc);
                                q: if ((0 | Ic) == (0 | Kc))
                                  (0 | Jc) == (0 | Lc) &&
                                    ((o[(24 + Nc) | 0] = 48), (Jc = Gc));
                                else {
                                  if (Jc >>> 0 <= (16 + Nc) >>> 0) break q;
                                  for (
                                    ;
                                    (o[0 | (Jc = (Jc + -1) | 0)] = 48),
                                      (16 + Nc) >>> 0 < Jc >>> 0;

                                  );
                                }
                                if (
                                  (Z(a, Jc, (Lc - Jc) | 0),
                                  !((Kc = (Kc + 4) | 0) >>> 0 <= Tc >>> 0))
                                )
                                  break;
                              }
                              if (
                                (Mc && Z(a, 3219, 1),
                                ((0 | Pc) < 1) | (Uc >>> 0 <= Kc >>> 0))
                              )
                                break p;
                              for (;;) {
                                if (
                                  (16 + Nc) >>> 0 <
                                  (Jc = ea(q[Kc >> 2], 0, Lc)) >>> 0
                                )
                                  for (
                                    ;
                                    (o[0 | (Jc = (Jc + -1) | 0)] = 48),
                                      (16 + Nc) >>> 0 < Jc >>> 0;

                                  );
                                if (
                                  (Z(a, Jc, (0 | Pc) < 9 ? Pc : 9),
                                  (Jc = (Pc + -9) | 0),
                                  Uc >>> 0 <= (Kc = (Kc + 4) | 0) >>> 0)
                                )
                                  break o;
                                if (((Gc = 9 < (0 | Pc)), (Pc = Jc), !Gc))
                                  break;
                              }
                              break o;
                            }
                            r: if (!((0 | Pc) < 0))
                              for (
                                Ic = Sc ? Uc : (Kc + 4) | 0,
                                  Gc = (16 + Nc) | 8,
                                  Tc = (16 + Nc) | 9,
                                  Lc = Kc;
                                ;

                              ) {
                                (0 | Tc) ==
                                  (0 | (Jc = ea(q[Lc >> 2], 0, Tc))) &&
                                  ((o[(24 + Nc) | 0] = 48), (Jc = Gc));
                                s: if ((0 | Kc) == (0 | Lc))
                                  Z(a, Jc, 1),
                                    (Jc = (Jc + 1) | 0),
                                    ((0 | Pc) < 1 && !Oc) || Z(a, 3219, 1);
                                else {
                                  if (Jc >>> 0 <= (16 + Nc) >>> 0) break s;
                                  for (
                                    ;
                                    (o[0 | (Jc = (Jc + -1) | 0)] = 48),
                                      (16 + Nc) >>> 0 < Jc >>> 0;

                                  );
                                }
                                if (
                                  (Z(
                                    a,
                                    (Rc = Jc),
                                    (0 | (Jc = (Tc - Jc) | 0)) < (0 | Pc)
                                      ? Jc
                                      : Pc
                                  ),
                                  (Pc = (Pc - Jc) | 0),
                                  Ic >>> 0 <= (Lc = (Lc + 4) | 0) >>> 0)
                                )
                                  break r;
                                if (!(-1 < (0 | Pc))) break;
                              }
                            _(a, 48, (Pc + 18) | 0, 18, 0),
                              Z(a, Xc, (Vc - Xc) | 0);
                            break n;
                          }
                          Jc = Pc;
                        }
                        _(a, 48, (Jc + 9) | 0, 9, 0);
                      }
                    } else {
                      if (
                        ((Oc = (Tc = 32 & Ic) ? (9 + Zc) | 0 : Zc),
                        !(11 < Gc >>> 0) && (Jc = (12 - Gc) | 0))
                      ) {
                        for (Wc = 8; (Wc *= 16), (Jc = (Jc + -1) | 0); );
                        Ub =
                          45 != r[0 | Oc] ? Ub + Wc - Wc : -(Wc + (-Ub - Wc));
                      }
                      for (
                        (0 | Vc) ==
                          (0 |
                            (Jc = ea(
                              (Lc = (Jc = q[(44 + Nc) >> 2]) >> 31) ^ (Jc + Lc),
                              0,
                              Vc
                            ))) &&
                          ((o[(15 + Nc) | 0] = 48), (Jc = (15 + Nc) | 0)),
                          Pc = 2 | Yc,
                          Lc = q[(44 + Nc) >> 2],
                          o[0 | (Sc = (Jc + -2) | 0)] = Ic + 15,
                          o[(Jc + -1) | 0] = (0 | Lc) < 0 ? 45 : 43,
                          Jc = 8 & Hc,
                          Kc = (16 + Nc) | 0;
                        (Ic = Kc),
                          (Rc = Tc),
                          (Lc = y(Ub) < 2147483648 ? ~~Ub : -2147483648),
                          (o[0 | Kc] = Rc | r[(Lc + 3168) | 0]),
                          (1 != (((Kc = (Ic + 1) | 0) - ((16 + Nc) | 0)) | 0)) |
                            (0 == (Ub = 16 * (Ub - (0 | Lc)))
                              ? !(Jc | (0 < (0 | Gc)))
                              : 0) ||
                            ((o[(Ic + 1) | 0] = 46), (Kc = (Ic + 2) | 0)),
                          0 != Ub;

                      );
                      _(
                        a,
                        32,
                        Fc,
                        (Qc =
                          ((Ic =
                            !Gc | ((0 | Gc) <= ((((Kc - Nc) | 0) - 18) | 0))
                              ? (((((Vc - ((16 + Nc) | 0)) | 0) - Sc) | 0) +
                                  Kc) |
                                0
                              : (2 + ((((Gc + Vc) | 0) - Sc) | 0)) | 0) +
                            Pc) |
                          0),
                        Hc
                      ),
                        Z(a, Oc, Pc),
                        _(a, 48, Fc, Qc, 65536 ^ Hc),
                        Z(a, (16 + Nc) | 0, (Gc = (Kc - ((16 + Nc) | 0)) | 0)),
                        _(
                          a,
                          48,
                          (Ic - (((Jc = Gc) + (Gc = (Vc - Sc) | 0)) | 0)) | 0,
                          0,
                          0
                        ),
                        Z(a, Sc, Gc);
                    }
                  else
                    _(a, 32, Fc, (Qc = (Yc + 3) | 0), -65537 & Hc),
                      Z(a, Zc, Yc),
                      (Gc = (Ic >>> 5) & 1),
                      Z(a, Ub != Ub ? (Gc ? 3211 : 3215) : Gc ? 3203 : 3207, 3);
                  return (
                    _(a, 32, Fc, Qc, 8192 ^ Hc),
                    (L = (560 + Nc) | 0),
                    0 | ((0 | Qc) < (0 | Fc) ? Fc : Qc)
                  );
                }),
                (n[16] = function (a, Ub) {
                  var uc, Dc, Ec;
                  (a |= 0),
                    (Ub = (q[(uc = Ub |= 0) >> 2] + 15) & -16),
                    (q[uc >> 2] = Ub + 16),
                    (Dc = a),
                    (Ec = (function (a, Ub, Vb, lc) {
                      var oc,
                        qc,
                        rc,
                        mc = 0,
                        nc = 0,
                        pc = 0;
                      (L = oc = (L - 32) | 0),
                        (mc = ((qc = mc = 2147483647 & lc) - 1006698496) | 0),
                        (nc = pc = Vb) >>> 0 < 0 && (mc = (mc + 1) | 0),
                        (rc = nc),
                        (nc = mc),
                        (mc = (qc - 1140785152) | 0),
                        pc >>> 0 < 0 && (mc = (mc + 1) | 0);
                      a: if (
                        (((0 | mc) == (0 | nc)) & (rc >>> 0 < pc >>> 0)) |
                        (nc >>> 0 < mc >>> 0)
                      ) {
                        if (
                          ((mc = (lc << 4) | (Vb >>> 28)),
                          (Vb = (Vb << 4) | (Ub >>> 28)),
                          ((134217728 == (0 | (pc = Ub &= 268435455))) &
                            (1 <= a >>> 0)) |
                            (134217728 < Ub >>> 0))
                        ) {
                          (mc = (mc + 1073741824) | 0),
                            (a = (Vb + 1) | 0) >>> 0 < 1 && (mc = (mc + 1) | 0),
                            (nc = a);
                          break a;
                        }
                        if (
                          ((mc =
                            (mc - ((((nc = Vb) >>> 0 < 0) + -1073741824) | 0)) |
                            0),
                          a | (134217728 ^ pc))
                        )
                          break a;
                        (a = (nc + (1 & nc)) | 0) >>> 0 < nc >>> 0 &&
                          (mc = (mc + 1) | 0),
                          (nc = a);
                      } else
                        (
                          !pc & (2147418112 == (0 | qc))
                            ? !(a | Ub)
                            : ((2147418112 == (0 | qc)) & (pc >>> 0 < 0)) |
                              (qc >>> 0 < 2147418112)
                        )
                          ? ((mc = 2146435072),
                            ((1140785151 == ((nc = 0) | qc)) &
                              (4294967295 < pc >>> 0)) |
                              (1140785151 < qc >>> 0) ||
                              (pc = qc >>> 16) >>> (mc = 0) < 15249 ||
                              ((function (a, Ub, Vb, lc, tc, uc) {
                                var zc = 0,
                                  Ac = 0,
                                  Bc = 0,
                                  Cc = 0;
                                a: if (64 & uc)
                                  (Ub = 31 & (Vb = (uc - 64) | 0)),
                                    (Ub =
                                      32 <= (63 & Vb) >>> 0
                                        ? ((Vb = 0), tc >>> Ub)
                                        : ((Vb = tc >>> Ub),
                                          ((((1 << Ub) - 1) & tc) <<
                                            (32 - Ub)) |
                                            (lc >>> Ub))),
                                    (tc = lc = 0);
                                else {
                                  if (!uc) break a;
                                  (Ac = tc),
                                    (Bc = lc),
                                    (zc = 31 & (Cc = (64 - uc) | 0)),
                                    (Cc =
                                      32 <= (63 & Cc) >>> 0
                                        ? ((Ac = Bc << zc), 0)
                                        : ((Ac =
                                            (((1 << zc) - 1) &
                                              (Bc >>> (32 - zc))) |
                                            (Ac << zc)),
                                          Bc << zc)),
                                    (Bc = Ub),
                                    (Ub = 31 & (zc = uc)),
                                    (Ub =
                                      32 <= (63 & zc) >>> 0
                                        ? ((zc = 0), Vb >>> Ub)
                                        : ((zc = Vb >>> Ub),
                                          ((((1 << Ub) - 1) & Vb) <<
                                            (32 - Ub)) |
                                            (Bc >>> Ub))),
                                    (Ub |= Cc),
                                    (Vb = zc | Ac),
                                    (zc = lc),
                                    (lc = 31 & uc),
                                    (lc =
                                      32 <= (63 & uc) >>> 0
                                        ? ((Ac = 0), tc >>> lc)
                                        : ((Ac = tc >>> lc),
                                          ((((1 << lc) - 1) & tc) <<
                                            (32 - lc)) |
                                            (zc >>> lc))),
                                    (tc = Ac);
                                }
                                (q[a >> 2] = Ub),
                                  (q[(4 + a) >> 2] = Vb),
                                  (q[(8 + a) >> 2] = lc),
                                  (q[(12 + a) >> 2] = tc);
                              })(
                                oc,
                                a,
                                Ub,
                                Vb,
                                (mc = (65535 & lc) | 65536),
                                (15361 - pc) | 0
                              ),
                              (function (a, Ub, Vb, lc, tc, uc) {
                                var vc = 0,
                                  wc = 0,
                                  xc = 0,
                                  yc = 0;
                                64 & uc
                                  ? ((lc = Ub),
                                    (Ub = 31 & (tc = (uc + -64) | 0)),
                                    32 <= (63 & tc) >>> 0
                                      ? ((tc = lc << Ub), (lc = 0))
                                      : ((tc =
                                          (((1 << Ub) - 1) &
                                            (lc >>> (32 - Ub))) |
                                          (Vb << Ub)),
                                        (lc <<= Ub)),
                                    (Vb = Ub = 0))
                                  : uc &&
                                    ((vc = lc),
                                    (lc = 31 & (xc = uc)),
                                    (yc =
                                      32 <= (63 & uc) >>> 0
                                        ? ((wc = vc << lc), 0)
                                        : ((wc =
                                            (((1 << lc) - 1) &
                                              (vc >>> (32 - lc))) |
                                            (tc << lc)),
                                          vc << lc)),
                                    (lc = Vb),
                                    (vc = Ub),
                                    (tc = 31 & (uc = (64 - uc) | 0)),
                                    32 <= (63 & uc) >>> 0
                                      ? ((uc = 0), (lc >>>= tc))
                                      : ((uc = lc >>> tc),
                                        (lc =
                                          ((((1 << tc) - 1) & lc) <<
                                            (32 - tc)) |
                                          (vc >>> tc))),
                                    (lc |= yc),
                                    (tc = uc | wc),
                                    (uc = Ub),
                                    (Ub = 31 & xc),
                                    (Ub =
                                      32 <= (63 & xc) >>> 0
                                        ? ((wc = uc << Ub), 0)
                                        : ((wc =
                                            (((1 << Ub) - 1) &
                                              (uc >>> (32 - Ub))) |
                                            (Vb << Ub)),
                                          uc << Ub)),
                                    (Vb = wc)),
                                  (q[a >> 2] = Ub),
                                  (q[(4 + a) >> 2] = Vb),
                                  (q[(8 + a) >> 2] = lc),
                                  (q[(12 + a) >> 2] = tc);
                              })(
                                (16 + oc) | 0,
                                a,
                                Ub,
                                Vb,
                                mc,
                                (pc + -15233) | 0
                              ),
                              (Vb = q[(4 + oc) >> 2]),
                              (a = q[(8 + oc) >> 2]),
                              (mc = (q[(12 + oc) >> 2] << 4) | (a >>> 28)),
                              (nc = (a << 4) | (Vb >>> 28)),
                              ((134217728 == (0 | (Vb = a = 268435455 & Vb))) &
                                (1 <=
                                  (Ub =
                                    q[oc >> 2] |
                                    ((0 !=
                                      (q[(16 + oc) >> 2] | q[(24 + oc) >> 2])) |
                                      (0 !=
                                        (q[(20 + oc) >> 2] |
                                          q[(28 + oc) >> 2])))) >>>
                                    0)) |
                              (134217728 < a >>> 0)
                                ? ((a = (nc + 1) | 0) >>> 0 < 1 &&
                                    (mc = (mc + 1) | 0),
                                  (nc = a))
                                : Ub | (134217728 ^ Vb) ||
                                  ((a = (nc + (1 & nc)) | 0) >>> 0 < nc >>> 0 &&
                                    (mc = (mc + 1) | 0),
                                  (nc = a))))
                          : ((nc = (Vb << 4) | (Ub >>> 28)),
                            (mc =
                              (524287 & (mc = (lc << 4) | (Vb >>> 28))) |
                              2146959360));
                      return (
                        (L = (32 + oc) | 0),
                        f(0, 0 | nc),
                        f(1, (-2147483648 & lc) | mc),
                        +g()
                      );
                    })(
                      q[Ub >> 2],
                      q[(Ub + 4) >> 2],
                      q[(Ub + 8) >> 2],
                      q[(Ub + 12) >> 2]
                    )),
                    (v[Dc >> 3] = Ec);
                }),
                {
                  __wasm_call_ctors: function () {},
                  csmGetVersion: function () {
                    return 67108864;
                  },
                  csmGetLatestMocVersion: function () {
                    return 3;
                  },
                  csmGetMocVersion: function (a, Ub) {
                    return (
                      (Ub |= 0),
                      (L = Ub = (L - 16) | 0),
                      (a = (a |= 0)
                        ? ma(a)
                          ? (Y(4, 1533, 0), 0)
                          : r[(a + 4) | 0]
                        : ((q[(Ub + 4) >> 2] = 1246),
                          (q[Ub >> 2] = 1671),
                          Y(4, 1087, Ub),
                          0)),
                      (L = (Ub + 16) | 0),
                      0 | a
                    );
                  },
                  csmSetLogFunction: function (a) {
                    (a |= 0), (q[1641] = a);
                  },
                  csmReviveMocInPlace: function (a, qi) {
                    var ri;
                    return (
                      (qi |= 0),
                      (L = ri = (L - 48) | 0),
                      (a = (a |= 0)
                        ? ((a + 63) & -64) == (0 | a)
                          ? ((qi + 63) & -64) == (0 | qi) && qi
                            ? (function (a) {
                                var Ve,
                                  qe = 0,
                                  re = 0,
                                  Je = 0,
                                  We = 0,
                                  Xe = 0,
                                  Ye = 0,
                                  Ze = 0,
                                  _e = 0,
                                  $e = 0,
                                  af = 0;
                                if (
                                  ((q[(24 + (L = Ve = (L - 32) | 0)) >> 2] = 0),
                                  (q[(16 + Ve) >> 2] = 4),
                                  (function (a) {
                                    var td;
                                    sa(
                                      (16 + (L = td = (L - 272) | 0)) | 0,
                                      1611,
                                      (q[(12 + td) >> 2] = a)
                                    ),
                                      (function (a) {
                                        var sd;
                                        (q[(L = sd = (L - 16) | 0) >> 2] = a),
                                          (function (a, Fc) {
                                            var gd;
                                            ra(
                                              a,
                                              1176,
                                              (q[
                                                (12 +
                                                  (L = gd = (L - 16) | 0)) >>
                                                  2
                                              ] = Fc),
                                              0,
                                              0
                                            ),
                                              (L = (16 + gd) | 0);
                                          })(q[670], sd),
                                          (L = (16 + sd) | 0);
                                      })((16 + td) | 0),
                                      (L = (272 + td) | 0);
                                  })((16 + Ve) | (q[(20 + Ve) >> 2] = 0)),
                                  ma(a))
                                )
                                  Y(4, 1183, 0), (a = 0);
                                else if (4 <= (re = r[(a + 4) | 0]) >>> 0)
                                  (q[(4 + Ve) >> 2] = re),
                                    (q[Ve >> 2] = 3),
                                    Y(4, 1332, Ve),
                                    (a = 0);
                                else {
                                  for (
                                    1 != (0 | (We = !r[(a + 5) | 0])) &&
                                      (ca((a + 4) | 0, 1),
                                      X((a - -64) | 0, 4, 160),
                                      (o[(a + 5) | 0] = 0)),
                                      qe = (a - -64) | 0,
                                      Je = 102,
                                      re = (a + 704) | 0;
                                    (q[re >> 2] = q[qe >> 2] + a),
                                      (re = (re + 4) | 0),
                                      (qe = (qe + 4) | 0),
                                      (Je = (Je + -1) | 0);

                                  );
                                  if (
                                    (1 != (0 | We) &&
                                      ((re = r[(a + 4) | 0]),
                                      X(q[(a + 704) >> 2], 4, 32),
                                      ca(q[(a + 708) >> 2], 4),
                                      ca((q[(a + 708) >> 2] + 4) | 0, 4),
                                      ca((q[(a + 708) >> 2] + 8) | 0, 4),
                                      ca((q[(a + 708) >> 2] + 12) | 0, 4),
                                      ca((q[(a + 708) >> 2] + 16) | 0, 4),
                                      ca((q[(a + 708) >> 2] + 20) | 0, 1),
                                      X(
                                        q[(a + 720) >> 2],
                                        4,
                                        q[q[(a + 704) >> 2] >> 2]
                                      ),
                                      X(
                                        q[(a + 724) >> 2],
                                        4,
                                        q[q[(a + 704) >> 2] >> 2]
                                      ),
                                      X(
                                        q[(a + 728) >> 2],
                                        4,
                                        q[q[(a + 704) >> 2] >> 2]
                                      ),
                                      X(
                                        q[(a + 732) >> 2],
                                        4,
                                        q[q[(a + 704) >> 2] >> 2]
                                      ),
                                      X(
                                        q[(a + 736) >> 2],
                                        4,
                                        q[q[(a + 704) >> 2] >> 2]
                                      ),
                                      X(
                                        q[(a + 740) >> 2],
                                        4,
                                        q[q[(a + 704) >> 2] >> 2]
                                      ),
                                      X(
                                        q[(a + 752) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 4) >> 2]
                                      ),
                                      X(
                                        q[(a + 756) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 4) >> 2]
                                      ),
                                      X(
                                        q[(a + 760) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 4) >> 2]
                                      ),
                                      X(
                                        q[(a + 764) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 4) >> 2]
                                      ),
                                      X(
                                        q[(a + 768) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 4) >> 2]
                                      ),
                                      X(
                                        q[(a + 772) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 4) >> 2]
                                      ),
                                      X(
                                        q[(a + 776) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 4) >> 2]
                                      ),
                                      X(
                                        q[(a + 780) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 8) >> 2]
                                      ),
                                      X(
                                        q[(a + 784) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 8) >> 2]
                                      ),
                                      X(
                                        q[(a + 788) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 8) >> 2]
                                      ),
                                      X(
                                        q[(a + 792) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 8) >> 2]
                                      ),
                                      X(
                                        q[(a + 796) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 8) >> 2]
                                      ),
                                      X(
                                        q[(a + 800) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 8) >> 2]
                                      ),
                                      X(
                                        q[(a + 804) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 12) >> 2]
                                      ),
                                      X(
                                        q[(a + 808) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 12) >> 2]
                                      ),
                                      X(
                                        q[(a + 812) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 12) >> 2]
                                      ),
                                      X(
                                        q[(a + 816) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 12) >> 2]
                                      ),
                                      X(
                                        q[(a + 840) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 16) >> 2]
                                      ),
                                      X(
                                        q[(a + 844) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 16) >> 2]
                                      ),
                                      X(
                                        q[(a + 848) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 16) >> 2]
                                      ),
                                      X(
                                        q[(a + 852) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 16) >> 2]
                                      ),
                                      X(
                                        q[(a + 856) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 16) >> 2]
                                      ),
                                      X(
                                        q[(a + 860) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 16) >> 2]
                                      ),
                                      X(
                                        q[(a + 864) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 16) >> 2]
                                      ),
                                      X(
                                        q[(a + 868) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 16) >> 2]
                                      ),
                                      X(
                                        q[(a + 872) >> 2],
                                        1,
                                        q[(q[(a + 704) >> 2] + 16) >> 2]
                                      ),
                                      X(
                                        q[(a + 876) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 16) >> 2]
                                      ),
                                      X(
                                        q[(a + 880) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 16) >> 2]
                                      ),
                                      X(
                                        q[(a + 884) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 16) >> 2]
                                      ),
                                      X(
                                        q[(a + 888) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 16) >> 2]
                                      ),
                                      X(
                                        q[(a + 892) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 16) >> 2]
                                      ),
                                      X(
                                        q[(a + 896) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 16) >> 2]
                                      ),
                                      X(
                                        q[(a + 908) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 20) >> 2]
                                      ),
                                      X(
                                        q[(a + 912) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 20) >> 2]
                                      ),
                                      X(
                                        q[(a + 916) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 20) >> 2]
                                      ),
                                      X(
                                        q[(a + 920) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 20) >> 2]
                                      ),
                                      X(
                                        q[(a + 924) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 20) >> 2]
                                      ),
                                      X(
                                        q[(a + 928) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 20) >> 2]
                                      ),
                                      X(
                                        q[(a + 932) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 20) >> 2]
                                      ),
                                      X(
                                        q[(a + 936) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 24) >> 2]
                                      ),
                                      X(
                                        q[(a + 940) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 28) >> 2]
                                      ),
                                      X(
                                        q[(a + 944) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 28) >> 2]
                                      ),
                                      X(
                                        q[(a + 948) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 32) >> 2]
                                      ),
                                      X(
                                        q[(a + 952) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 32) >> 2]
                                      ),
                                      X(
                                        q[(a + 956) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 32) >> 2]
                                      ),
                                      X(
                                        q[(a + 960) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 32) >> 2]
                                      ),
                                      X(
                                        q[(a + 964) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 32) >> 2]
                                      ),
                                      X(
                                        q[(a + 968) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 32) >> 2]
                                      ),
                                      X(
                                        q[(a + 972) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 32) >> 2]
                                      ),
                                      X(
                                        q[(a + 976) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 36) >> 2]
                                      ),
                                      X(
                                        q[(a + 980) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 36) >> 2]
                                      ),
                                      X(
                                        q[(a + 984) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 36) >> 2]
                                      ),
                                      X(
                                        q[(a + 988) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 40) >> 2]
                                      ),
                                      X(
                                        q[(a + 992) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 44) >> 2]
                                      ),
                                      X(
                                        q[(a + 996) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 48) >> 2]
                                      ),
                                      X(
                                        q[(a + 1e3) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 48) >> 2]
                                      ),
                                      X(
                                        q[(a + 1004) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 52) >> 2]
                                      ),
                                      X(
                                        q[(a + 1008) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 52) >> 2]
                                      ),
                                      X(
                                        q[(a + 1012) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 56) >> 2]
                                      ),
                                      X(
                                        q[(a + 1016) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 60) >> 2]
                                      ),
                                      X(
                                        q[(a + 1020) >> 2],
                                        2,
                                        q[(q[(a + 704) >> 2] + 64) >> 2]
                                      ),
                                      X(
                                        q[(a + 1024) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 68) >> 2]
                                      ),
                                      X(
                                        q[(a + 1028) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 72) >> 2]
                                      ),
                                      X(
                                        q[(a + 1032) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 72) >> 2]
                                      ),
                                      X(
                                        q[(a + 1036) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 72) >> 2]
                                      ),
                                      X(
                                        q[(a + 1040) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 72) >> 2]
                                      ),
                                      X(
                                        q[(a + 1044) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 72) >> 2]
                                      ),
                                      X(
                                        q[(a + 1048) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 76) >> 2]
                                      ),
                                      X(
                                        q[(a + 1052) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 76) >> 2]
                                      ),
                                      X(
                                        q[(a + 1056) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 76) >> 2]
                                      ),
                                      X(
                                        q[(a + 1068) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 80) >> 2]
                                      ),
                                      X(
                                        q[(a + 1072) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 80) >> 2]
                                      ),
                                      X(
                                        q[(a + 1076) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 80) >> 2]
                                      ),
                                      X(
                                        q[(a + 1080) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 80) >> 2]
                                      ),
                                      X(
                                        q[(a + 1084) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 80) >> 2]
                                      ),
                                      X(
                                        q[(a + 1088) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 80) >> 2]
                                      ),
                                      X(
                                        q[(a + 1092) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 80) >> 2]
                                      ),
                                      X(
                                        q[(a + 1096) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 84) >> 2]
                                      ),
                                      X(
                                        q[(a + 1100) >> 2],
                                        2,
                                        q[(q[(a + 704) >> 2] + 84) >> 2]
                                      ),
                                      X(
                                        q[(a + 1104) >> 2],
                                        4,
                                        q[(q[(a + 704) >> 2] + 88) >> 2]
                                      ),
                                      re >>> 0 < 2 ||
                                        X(
                                          q[(a + 1108) >> 2],
                                          4,
                                          q[(q[(a + 704) >> 2] + 8) >> 2]
                                        )),
                                    (q[1643] = 5),
                                    (q[1642] = 6),
                                    (q[1644] = 7),
                                    (q[1645] = 8),
                                    (q[1646] = 9),
                                    (q[1647] = 10),
                                    (qe = q[(a + 704) >> 2]),
                                    1 <= q[qe >> 2])
                                  )
                                    for (
                                      re = 0;
                                      (q[(q[(a + 712) >> 2] + (re << 2)) >> 2] =
                                        q[(a + 716) >> 2] + (re << 6)),
                                        (re = (re + 1) | 0),
                                        (qe = q[(a + 704) >> 2]),
                                        (0 | re) < q[qe >> 2];

                                    );
                                  if (1 <= q[(qe + 4) >> 2])
                                    for (
                                      re = 0;
                                      (q[(q[(a + 744) >> 2] + (re << 2)) >> 2] =
                                        q[(a + 748) >> 2] + (re << 6)),
                                        (re = (re + 1) | 0),
                                        (qe = q[(a + 704) >> 2]),
                                        (0 | re) < q[(qe + 4) >> 2];

                                    );
                                  if (1 <= q[(qe + 16) >> 2])
                                    for (
                                      re = 0;
                                      (q[
                                        ((qe = re << 2) + q[(a + 820) >> 2]) >>
                                          2
                                      ] = q[(a + 836) >> 2] + (re << 6)),
                                        (q[(qe + q[(a + 824) >> 2]) >> 2] =
                                          q[(a + 1016) >> 2] +
                                          (q[(qe + q[(a + 880) >> 2]) >> 2] <<
                                            2)),
                                        (q[(qe + q[(a + 828) >> 2]) >> 2] =
                                          q[(a + 1020) >> 2] +
                                          (q[(qe + q[(a + 884) >> 2]) >> 2] <<
                                            1)),
                                        (q[(qe + q[(a + 832) >> 2]) >> 2] =
                                          q[(a + 1024) >> 2] +
                                          (q[(qe + q[(a + 892) >> 2]) >> 2] <<
                                            2)),
                                        (re = (re + 1) | 0),
                                        (qe = q[(a + 704) >> 2]),
                                        (0 | re) < q[(qe + 16) >> 2];

                                    );
                                  if (1 <= q[(qe + 20) >> 2])
                                    for (
                                      re = 0;
                                      (q[(q[(a + 900) >> 2] + (re << 2)) >> 2] =
                                        q[(a + 904) >> 2] + (re << 6)),
                                        (re = (re + 1) | 0),
                                        (qe = q[(a + 704) >> 2]),
                                        (0 | re) < q[(qe + 20) >> 2];

                                    );
                                  if (1 <= q[(qe + 80) >> 2])
                                    for (
                                      re = 0;
                                      (q[
                                        (q[(a + 1060) >> 2] + (re << 2)) >> 2
                                      ] = q[(a + 1064) >> 2] + (re << 6)),
                                        (re = (re + 1) | 0),
                                        (qe = q[(a + 704) >> 2]),
                                        (0 | re) < q[(qe + 80) >> 2];

                                    );
                                  if (
                                    !(
                                      1 & o[(q[(a + 708) >> 2] + 20) | 0] ||
                                      (0 | (We = q[(qe + 16) >> 2])) < 1
                                    )
                                  ) {
                                    for (
                                      Ye = q[(a + 888) >> 2],
                                        Ze = q[(a + 884) >> 2],
                                        Xe = q[(a + 1020) >> 2],
                                        re = 0;
                                      ;

                                    ) {
                                      if (
                                        1 <
                                        (0 |
                                          (Je = q[((qe = re << 2) + Ye) >> 2]))
                                      )
                                        for (
                                          _e = (Je + -1) | 0,
                                            $e =
                                              (Xe + (q[(qe + Ze) >> 2] << 1)) |
                                              0,
                                            qe = 0;
                                          (af =
                                            s[
                                              (Je = ((qe << 1) + $e) | 0) >> 1
                                            ]),
                                            (p[Je >> 1] = s[(Je + 4) >> 1]),
                                            (p[(Je + 4) >> 1] = af),
                                            (0 | (qe = (qe + 3) | 0)) <
                                              (0 | _e);

                                        );
                                      if ((0 | We) == (0 | (re = (re + 1) | 0)))
                                        break;
                                    }
                                    for (
                                      re = q[(a + 876) >> 2],
                                        Ye = q[(a + 880) >> 2],
                                        Ze = q[(a + 1016) >> 2],
                                        Je = 0;
                                      ;

                                    ) {
                                      if (
                                        1 <=
                                        (0 |
                                          (Xe = q[((qe = Je << 2) + re) >> 2]))
                                      )
                                        for (
                                          Xe =
                                            ((qe =
                                              (Ze + (q[(qe + Ye) >> 2] << 2)) |
                                              0) +
                                              (Xe << 3)) |
                                            0,
                                            qe = (qe + 4) | 0;
                                          (u[qe >> 2] = x(1) - u[qe >> 2]),
                                            (qe = (qe + 8) | 0) >>> 0 <
                                              Xe >>> 0;

                                        );
                                      if ((0 | We) == (0 | (Je = (Je + 1) | 0)))
                                        break;
                                    }
                                  }
                                }
                                return (L = (32 + Ve) | 0), a;
                              })(a)
                            : ((q[(20 + ri) >> 2] = 1592),
                              (q[(16 + ri) >> 2] = 1688),
                              Y(4, 1087, (16 + ri) | 0),
                              0)
                          : ((q[(36 + ri) >> 2] = 1441),
                            (q[(32 + ri) >> 2] = 1688),
                            Y(4, 1087, (32 + ri) | 0),
                            0)
                        : ((q[(4 + ri) >> 2] = 1246),
                          (q[ri >> 2] = 1688),
                          Y(4, 1087, ri),
                          0)),
                      (L = (48 + ri) | 0),
                      0 | a
                    );
                  },
                  csmReadCanvasInfo: function (a, _h, $h, ai) {
                    var bi;
                    (_h |= 0),
                      ($h |= 0),
                      (ai |= 0),
                      (L = bi = (L + -64) | 0),
                      (a |= 0)
                        ? _h
                          ? $h
                            ? ai
                              ? ((a = q[(q[a >> 2] + 708) >> 2]),
                                (q[_h >> 2] = q[(a + 12) >> 2]),
                                (q[(_h + 4) >> 2] = q[(a + 16) >> 2]),
                                (q[$h >> 2] = q[(a + 4) >> 2]),
                                (q[($h + 4) >> 2] = q[(a + 8) >> 2]),
                                (q[ai >> 2] = q[a >> 2]))
                              : ((q[(52 + bi) >> 2] = 1782),
                                (q[(48 + bi) >> 2] = 1708),
                                Y(4, 1087, (48 + bi) | 0))
                            : ((q[(36 + bi) >> 2] = 1753),
                              (q[(32 + bi) >> 2] = 1708),
                              Y(4, 1087, (32 + bi) | 0))
                          : ((q[(20 + bi) >> 2] = 1726),
                            (q[(16 + bi) >> 2] = 1708),
                            Y(4, 1087, (16 + bi) | 0))
                        : ((q[(4 + bi) >> 2] = 1651),
                          (q[bi >> 2] = 1708),
                          Y(4, 1087, bi)),
                      (L = (64 + bi) | 0);
                  },
                  csmGetSizeofModel: wa,
                  csmInitializeModelInPlace: va,
                  csmUpdateModel: function (a) {
                    var Zh;
                    (L = Zh = (L - 16) | 0),
                      (a |= 0)
                        ? ta(a)
                        : ((q[(4 + Zh) >> 2] = 1651),
                          (q[Zh >> 2] = 1890),
                          Y(4, 1087, Zh)),
                      (L = (16 + Zh) | 0);
                  },
                  csmGetParameterCount: function (a) {
                    var Yh;
                    return (
                      (L = Yh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(a + 292) >> 2]
                        : ((q[(4 + Yh) >> 2] = 1651),
                          (q[Yh >> 2] = 1905),
                          Y(4, 1087, Yh),
                          -1)),
                      (L = (16 + Yh) | 0),
                      0 | a
                    );
                  },
                  csmGetParameterIds: function (a) {
                    var Xh;
                    return (
                      (L = Xh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(q[a >> 2] + 900) >> 2]
                        : ((q[(4 + Xh) >> 2] = 1651),
                          (q[Xh >> 2] = 1926),
                          Y(4, 1087, Xh),
                          0)),
                      (L = (16 + Xh) | 0),
                      0 | a
                    );
                  },
                  csmGetParameterMinimumValues: function (a) {
                    var Wh;
                    return (
                      (L = Wh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(q[a >> 2] + 912) >> 2]
                        : ((q[(4 + Wh) >> 2] = 1651),
                          (q[Wh >> 2] = 1945),
                          Y(4, 1087, Wh),
                          0)),
                      (L = (16 + Wh) | 0),
                      0 | a
                    );
                  },
                  csmGetParameterMaximumValues: function (a) {
                    var Vh;
                    return (
                      (L = Vh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(q[a >> 2] + 908) >> 2]
                        : ((q[(4 + Vh) >> 2] = 1651),
                          (q[Vh >> 2] = 1974),
                          Y(4, 1087, Vh),
                          0)),
                      (L = (16 + Vh) | 0),
                      0 | a
                    );
                  },
                  csmGetParameterDefaultValues: function (a) {
                    var Uh;
                    return (
                      (L = Uh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(q[a >> 2] + 916) >> 2]
                        : ((q[(4 + Uh) >> 2] = 1651),
                          (q[Uh >> 2] = 2003),
                          Y(4, 1087, Uh),
                          0)),
                      (L = (16 + Uh) | 0),
                      0 | a
                    );
                  },
                  csmGetParameterValues: function (a) {
                    var Sh;
                    return (
                      (L = Sh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(a + 300) >> 2]
                        : ((q[(4 + Sh) >> 2] = 1651),
                          (q[Sh >> 2] = 2032),
                          Y(4, 1087, Sh),
                          0)),
                      (L = (16 + Sh) | 0),
                      0 | a
                    );
                  },
                  csmGetPartCount: function (a) {
                    var Rh;
                    return (
                      (L = Rh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(a + 4) >> 2]
                        : ((q[(4 + Rh) >> 2] = 1651),
                          (q[Rh >> 2] = 2054),
                          Y(4, 1087, Rh),
                          -1)),
                      (L = (16 + Rh) | 0),
                      0 | a
                    );
                  },
                  csmGetPartIds: function (a) {
                    var Qh;
                    return (
                      (L = Qh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(q[a >> 2] + 712) >> 2]
                        : ((q[(4 + Qh) >> 2] = 1651),
                          (q[Qh >> 2] = 2070),
                          Y(4, 1087, Qh),
                          0)),
                      (L = (16 + Qh) | 0),
                      0 | a
                    );
                  },
                  csmGetPartOpacities: function (a) {
                    var Ph;
                    return (
                      (L = Ph = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(a + 52) >> 2]
                        : ((q[(4 + Ph) >> 2] = 1651),
                          (q[Ph >> 2] = 2084),
                          Y(4, 1087, Ph),
                          0)),
                      (L = (16 + Ph) | 0),
                      0 | a
                    );
                  },
                  csmGetPartParentPartIndices: function (a) {
                    var Oh;
                    return (
                      (L = Oh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(q[a >> 2] + 740) >> 2]
                        : ((q[(4 + Oh) >> 2] = 1651),
                          (q[Oh >> 2] = 2104),
                          Y(4, 1087, Oh),
                          0)),
                      (L = (16 + Oh) | 0),
                      0 | a
                    );
                  },
                  csmGetDrawableCount: function (a) {
                    var Nh;
                    return (
                      (L = Nh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(a + 200) >> 2]
                        : ((q[(4 + Nh) >> 2] = 1651),
                          (q[Nh >> 2] = 2132),
                          Y(4, 1087, Nh),
                          -1)),
                      (L = (16 + Nh) | 0),
                      0 | a
                    );
                  },
                  csmGetDrawableIds: function (a) {
                    var Mh;
                    return (
                      (L = Mh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(q[a >> 2] + 820) >> 2]
                        : ((q[(4 + Mh) >> 2] = 1651),
                          (q[Mh >> 2] = 2152),
                          Y(4, 1087, Mh),
                          0)),
                      (L = (16 + Mh) | 0),
                      0 | a
                    );
                  },
                  csmGetDrawableConstantFlags: function (a) {
                    var Lh;
                    return (
                      (L = Lh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(q[a >> 2] + 872) >> 2]
                        : ((q[(4 + Lh) >> 2] = 1651),
                          (q[Lh >> 2] = 2170),
                          Y(4, 1087, Lh),
                          0)),
                      (L = (16 + Lh) | 0),
                      0 | a
                    );
                  },
                  csmGetDrawableDynamicFlags: function (a) {
                    var Kh;
                    return (
                      (L = Kh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(a + 260) >> 2]
                        : ((q[(4 + Kh) >> 2] = 1651),
                          (q[Kh >> 2] = 2198),
                          Y(4, 1087, Kh),
                          0)),
                      (L = (16 + Kh) | 0),
                      0 | a
                    );
                  },
                  csmGetDrawableTextureIndices: function (a) {
                    var Jh;
                    return (
                      (L = Jh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(q[a >> 2] + 868) >> 2]
                        : ((q[(4 + Jh) >> 2] = 1651),
                          (q[Jh >> 2] = 2225),
                          Y(4, 1087, Jh),
                          0)),
                      (L = (16 + Jh) | 0),
                      0 | a
                    );
                  },
                  csmGetDrawableDrawOrders: function (a) {
                    var Ih;
                    return (
                      (L = Ih = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(a + 268) >> 2]
                        : ((q[(4 + Ih) >> 2] = 1651),
                          (q[Ih >> 2] = 2254),
                          Y(4, 1087, Ih),
                          0)),
                      (L = (16 + Ih) | 0),
                      0 | a
                    );
                  },
                  csmGetDrawableRenderOrders: function (a) {
                    var Hh;
                    return (
                      (L = Hh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(a + 264) >> 2]
                        : ((q[(4 + Hh) >> 2] = 1651),
                          (q[Hh >> 2] = 2279),
                          Y(4, 1087, Hh),
                          0)),
                      (L = (16 + Hh) | 0),
                      0 | a
                    );
                  },
                  csmGetDrawableOpacities: function (a) {
                    var Gh;
                    return (
                      (L = Gh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(a + 276) >> 2]
                        : ((q[(4 + Gh) >> 2] = 1651),
                          (q[Gh >> 2] = 2306),
                          Y(4, 1087, Gh),
                          0)),
                      (L = (16 + Gh) | 0),
                      0 | a
                    );
                  },
                  csmGetDrawableMaskCounts: function (a) {
                    var Fh;
                    return (
                      (L = Fh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(q[a >> 2] + 896) >> 2]
                        : ((q[(4 + Fh) >> 2] = 1651),
                          (q[Fh >> 2] = 2330),
                          Y(4, 1087, Fh),
                          0)),
                      (L = (16 + Fh) | 0),
                      0 | a
                    );
                  },
                  csmGetDrawableMasks: function (a) {
                    var Eh;
                    return (
                      (L = Eh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(q[a >> 2] + 832) >> 2]
                        : ((q[(4 + Eh) >> 2] = 1651),
                          (q[Eh >> 2] = 2355),
                          Y(4, 1087, Eh),
                          0)),
                      (L = (16 + Eh) | 0),
                      0 | a
                    );
                  },
                  csmGetDrawableVertexCounts: function (a) {
                    var Dh;
                    return (
                      (L = Dh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(q[a >> 2] + 876) >> 2]
                        : ((q[(4 + Dh) >> 2] = 1651),
                          (q[Dh >> 2] = 2375),
                          Y(4, 1087, Dh),
                          0)),
                      (L = (16 + Dh) | 0),
                      0 | a
                    );
                  },
                  csmGetDrawableVertexPositions: function (a) {
                    var Ch;
                    return (
                      (L = Ch = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(a + 272) >> 2]
                        : ((q[(4 + Ch) >> 2] = 1651),
                          (q[Ch >> 2] = 2402),
                          Y(4, 1087, Ch),
                          0)),
                      (L = (16 + Ch) | 0),
                      0 | a
                    );
                  },
                  csmGetDrawableVertexUvs: function (a) {
                    var Bh;
                    return (
                      (L = Bh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(q[a >> 2] + 824) >> 2]
                        : ((q[(4 + Bh) >> 2] = 1651),
                          (q[Bh >> 2] = 2432),
                          Y(4, 1087, Bh),
                          0)),
                      (L = (16 + Bh) | 0),
                      0 | a
                    );
                  },
                  csmGetDrawableIndexCounts: function (a) {
                    var gh;
                    return (
                      (L = gh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(q[a >> 2] + 888) >> 2]
                        : ((q[(4 + gh) >> 2] = 1651),
                          (q[gh >> 2] = 2456),
                          Y(4, 1087, gh),
                          0)),
                      (L = (16 + gh) | 0),
                      0 | a
                    );
                  },
                  csmGetDrawableIndices: function (a) {
                    var fh;
                    return (
                      (L = fh = (L - 16) | 0),
                      (a = (a |= 0)
                        ? q[(q[a >> 2] + 828) >> 2]
                        : ((q[(4 + fh) >> 2] = 1651),
                          (q[fh >> 2] = 2482),
                          Y(4, 1087, fh),
                          0)),
                      (L = (16 + fh) | 0),
                      0 | a
                    );
                  },
                  csmResetDrawableDynamicFlags: function (a) {
                    var dh;
                    (L = dh = (L - 16) | 0),
                      (a |= 0)
                        ? (q[(a + 256) >> 2] = 1)
                        : ((q[(4 + dh) >> 2] = 1651),
                          (q[dh >> 2] = 2504),
                          Y(4, 1087, dh)),
                      (L = (16 + dh) | 0);
                  },
                  csmMallocMoc: function (a) {
                    var rd;
                    return (
                      ya((12 + (L = rd = (L - 16) | 0)) | 0, 64, (a |= 0)),
                      (L = (16 + rd) | 0),
                      q[(12 + rd) >> 2]
                    );
                  },
                  csmMallocModelAndInitialize: function (a) {
                    var Fc,
                      nd = 0,
                      qd = 0;
                    return (
                      (L = Fc = (L - 16) | 0),
                      (a |= 0) &&
                        (ya((12 + Fc) | 0, 16, (qd = wa(a))) ||
                          (nd = va(a, q[(12 + Fc) >> 2], qd)) ||
                          (za(q[(12 + Fc) >> 2]), (nd = 0))),
                      (L = (16 + Fc) | 0),
                      0 | nd
                    );
                  },
                  csmMalloc: function (a) {
                    return 0 | ja((a |= 0));
                  },
                  csmFree: function (a) {
                    za((a |= 0));
                  },
                  stackSave: function () {
                    return 0 | L;
                  },
                  stackAlloc: function (a) {
                    return 0 | (L = (L - (a |= 0)) & -16);
                  },
                  stackRestore: function (a) {
                    L = a |= 0;
                  },
                  __growWasmMemory: function (a) {
                    return (
                      0 |
                      (function (pagesToAdd) {
                        pagesToAdd |= 0;
                        var P = 0 | N(),
                          Q = (P + pagesToAdd) | 0;
                        if (P < Q && Q < 65536) {
                          var R = new ArrayBuffer(w(Q, 65536)),
                            S = new global.Int8Array(R);
                          S.set(o),
                            (o = S),
                            (o = new global.Int8Array(R)),
                            (p = new global.Int16Array(R)),
                            (q = new global.Int32Array(R)),
                            (r = new global.Uint8Array(R)),
                            (s = new global.Uint16Array(R)),
                            (t = new global.Uint32Array(R)),
                            (u = new global.Float32Array(R)),
                            (v = new global.Float64Array(R)),
                            (buffer = R),
                            (m.buffer = R);
                        }
                        return P;
                      })(0 | (a |= 0))
                    );
                  },
                  dynCall_vi: function (a, _h) {
                    (_h |= 0), n[(a |= 0)](_h);
                  },
                }
              );
              function X(a, b, c) {
                var d = 0,
                  e = 0,
                  f = 0;
                if (c)
                  for (;;) {
                    if (
                      ((c = (c + -1) | 0),
                      a >>> 0 < (d = ((e = (a + b) | 0) - 1) | 0) >>> 0)
                    )
                      for (
                        ;
                        (f = r[0 | a]),
                          (o[0 | a] = r[0 | d]),
                          (o[0 | d] = f),
                          (a = (a + 1) | 0) >>> 0 < (d = (d + -1) | 0) >>> 0;

                      );
                    if (((a = e), !c)) break;
                  }
              }
              function Y(a, b, c) {
                var g;
                (L = g = (L - 272) | 0),
                  t[1640] > a >>> 0 ||
                    ((a = q[1641]) &&
                      (sa((16 + g) | 0, b, (q[(12 + g) >> 2] = c)),
                      n[a]((16 + g) | 0))),
                  (L = (272 + g) | 0);
              }
              function Z(a, b, c) {
                32 & r[0 | a] ||
                  (function (a, Ub, Fc) {
                    var Gc = 0,
                      Hc = 0,
                      Ic = 0;
                    a: {
                      if (!(Gc = q[(Fc + 16) >> 2])) {
                        if (
                          (function (a) {
                            var Ub = 0;
                            return (
                              (Ub = r[(a + 74) | 0]),
                              (o[(a + 74) | 0] = (Ub + -1) | Ub),
                              8 & (Ub = q[a >> 2])
                                ? ((q[a >> 2] = 32 | Ub), 1)
                                : ((q[(a + 4) >> 2] = 0),
                                  (q[(a + 8) >> 2] = 0),
                                  (Ub = q[(a + 44) >> 2]),
                                  (q[(a + 28) >> 2] = Ub),
                                  (q[(a + 20) >> 2] = Ub),
                                  (q[(a + 16) >> 2] = Ub + q[(a + 48) >> 2]),
                                  0)
                            );
                          })(Fc)
                        )
                          break a;
                        Gc = q[(Fc + 16) >> 2];
                      }
                      if ((Gc - (Ic = q[(Fc + 20) >> 2])) >>> 0 < Ub >>> 0)
                        return n[q[(Fc + 36) >> 2]](Fc, a, Ub);
                      b: if (!(o[(Fc + 75) | 0] < 0)) {
                        for (Gc = Ub; ; ) {
                          if (!(Hc = Gc)) break b;
                          if (10 == r[((Gc = (Hc + -1) | 0) + a) | 0]) break;
                        }
                        if (n[q[(Fc + 36) >> 2]](Fc, a, Hc) >>> 0 < Hc >>> 0)
                          break a;
                        (Ub = (Ub - Hc) | 0),
                          (a = (a + Hc) | 0),
                          (Ic = q[(Fc + 20) >> 2]);
                      }
                      fa(Ic, a, Ub),
                        (q[(Fc + 20) >> 2] = q[(Fc + 20) >> 2] + Ub);
                    }
                  })(b, c, a);
              }
              function _(a, b, c, h, i) {
                var j,
                  k = 0,
                  l = 0;
                if (
                  ((L = j = (L - 256) | 0),
                  !((73728 & i) | ((0 | c) <= (0 | h))))
                ) {
                  if (
                    (ba(j, b, (k = (i = (c - h) | 0) >>> 0 < 256) ? i : 256),
                    (b = a),
                    (l = j),
                    !k)
                  ) {
                    for (
                      c = (c - h) | 0;
                      Z(a, j, 256), 255 < (i = (i + -256) | 0) >>> 0;

                    );
                    i = 255 & c;
                  }
                  Z(b, l, i);
                }
                L = (256 + j) | 0;
              }
              function $(a) {
                var b, c;
                return x(
                  (b = a * a) *
                    b *
                    (c = b * a) *
                    (2718311493989822e-21 * b - 0.00019839334836096632) +
                    (c * (0.008333329385889463 * b - 0.16666666641626524) + a)
                );
              }
              function aa(a) {
                var h;
                return x(
                  -0.499999997251031 * (a *= a) +
                    1 +
                    0.04166662332373906 * (h = a * a) +
                    a * h * (2439044879627741e-20 * a - 0.001388676377460993)
                );
              }
              function ba(a, i, m) {
                var n = 0,
                  p = 0,
                  r = 0,
                  s = 0;
                if (
                  m &&
                  ((o[((n = (a + m) | 0) - 1) | 0] = i),
                  (o[0 | a] = i),
                  !(
                    m >>> 0 < 3 ||
                    ((o[(n + -2) | 0] = i),
                    (o[(a + 1) | 0] = i),
                    (o[(n + -3) | 0] = i),
                    (o[(a + 2) | 0] = i),
                    m >>> 0 < 7 ||
                      ((o[(n + -4) | 0] = i),
                      (o[(a + 3) | 0] = i),
                      m >>> 0 < 9 ||
                        ((p = ((n = (0 - a) & 3) + a) | 0),
                        (i = w(255 & i, 16843009)),
                        (q[p >> 2] = i),
                        (q[((n = ((m = (m - n) & -4) + p) | 0) - 4) >> 2] = i),
                        m >>> 0 < 9 ||
                          ((q[(p + 8) >> 2] = i),
                          (q[(p + 4) >> 2] = i),
                          (q[(n + -8) >> 2] = i),
                          (q[(n + -12) >> 2] = i),
                          m >>> 0 < 25 ||
                            ((q[(p + 24) >> 2] = i),
                            (q[(p + 20) >> 2] = i),
                            (q[(p + 16) >> 2] = i),
                            (q[(p + 12) >> 2] = i),
                            (q[(n + -16) >> 2] = i),
                            (q[(n + -20) >> 2] = i),
                            (q[(n + -24) >> 2] = i),
                            (q[(n + -28) >> 2] = i),
                            (m = (m - (s = (4 & p) | 24)) | 0) >>> 0 < 32)))))
                  ))
                )
                  for (
                    r = n = i, i = (p + s) | 0;
                    (q[(i + 24) >> 2] = r),
                      (q[(i + 28) >> 2] = n),
                      (q[(i + 16) >> 2] = r),
                      (q[(i + 20) >> 2] = n),
                      (q[(i + 8) >> 2] = r),
                      (q[(i + 12) >> 2] = n),
                      (q[i >> 2] = r),
                      (q[(i + 4) >> 2] = n),
                      (i = (i + 32) | 0),
                      31 < (m = (m + -32) | 0) >>> 0;

                  );
                return a;
              }
              function ca(a, i) {
                var m = 0;
                if (a >>> 0 < (i = (((a + i) | 0) - 1) | 0) >>> 0)
                  for (
                    ;
                    (m = r[0 | a]),
                      (o[0 | a] = r[0 | i]),
                      (o[0 | i] = m),
                      (a = (a + 1) | 0) >>> 0 < (i = (i + -1) | 0) >>> 0;

                  );
              }
              function da(a) {
                var i;
                return (0 | (a = ((i = q[2052]) + a) | 0)) <= -1
                  ? ((q[1906] = 48), -1)
                  : a >>> 0 <= (N() << 16) >>> 0 || J(0 | a)
                  ? ((q[2052] = a), i)
                  : ((q[1906] = 48), -1);
              }
              function ea(a, q, t) {
                var u = 0,
                  v = 0,
                  x = 0;
                if (((1 == (0 | q)) & (a >>> 0 < 0)) | (q >>> 0 < 1)) u = a;
                else
                  for (
                    ;
                    (v = gc((u = hc(a, q, 10)), (x = v = M), 10)),
                      (o[0 | (t = (t + -1) | 0)] = (a - v) | 48),
                      (v =
                        ((9 == (0 | q)) & (4294967295 < a >>> 0)) |
                        (9 < q >>> 0)),
                      (a = u),
                      (q = x),
                      v;

                  );
                if (u)
                  for (
                    ;
                    (a = ((u >>> 0) / 10) | 0),
                      (o[0 | (t = (t + -1) | 0)] = (u - w(a, 10)) | 48),
                      (q = 9 < u >>> 0),
                      (u = a),
                      q;

                  );
                return t;
              }
              function fa(a, t, w) {
                var y,
                  z = 0;
                if (8192 <= w >>> 0) I(0 | a, 0 | t, 0 | w);
                else {
                  y = (a + w) | 0;
                  a: if (3 & (a ^ t))
                    if (y >>> 0 < 4) w = a;
                    else if ((z = (y - 4) | 0) >>> 0 < a >>> 0) w = a;
                    else
                      for (
                        w = a;
                        (o[0 | w] = r[0 | t]),
                          (o[(w + 1) | 0] = r[(t + 1) | 0]),
                          (o[(w + 2) | 0] = r[(t + 2) | 0]),
                          (o[(w + 3) | 0] = r[(t + 3) | 0]),
                          (t = (t + 4) | 0),
                          (w = (w + 4) | 0) >>> 0 <= z >>> 0;

                      );
                  else {
                    b: if ((0 | w) < 1) w = a;
                    else if (3 & a)
                      for (w = a; ; ) {
                        if (
                          ((o[0 | w] = r[0 | t]),
                          (t = (t + 1) | 0),
                          y >>> 0 <= (w = (w + 1) | 0) >>> 0)
                        )
                          break b;
                        if (!(3 & w)) break;
                      }
                    else w = a;
                    if (
                      !(
                        (a = -4 & y) >>> 0 < 64 ||
                        (z = (a + -64) | 0) >>> 0 < w >>> 0
                      )
                    )
                      for (
                        ;
                        (q[w >> 2] = q[t >> 2]),
                          (q[(w + 4) >> 2] = q[(t + 4) >> 2]),
                          (q[(w + 8) >> 2] = q[(t + 8) >> 2]),
                          (q[(w + 12) >> 2] = q[(t + 12) >> 2]),
                          (q[(w + 16) >> 2] = q[(t + 16) >> 2]),
                          (q[(w + 20) >> 2] = q[(t + 20) >> 2]),
                          (q[(w + 24) >> 2] = q[(t + 24) >> 2]),
                          (q[(w + 28) >> 2] = q[(t + 28) >> 2]),
                          (q[(w + 32) >> 2] = q[(t + 32) >> 2]),
                          (q[(w + 36) >> 2] = q[(t + 36) >> 2]),
                          (q[(w + 40) >> 2] = q[(t + 40) >> 2]),
                          (q[(w + 44) >> 2] = q[(t + 44) >> 2]),
                          (q[(w + 48) >> 2] = q[(t + 48) >> 2]),
                          (q[(w + 52) >> 2] = q[(t + 52) >> 2]),
                          (q[(w + 56) >> 2] = q[(t + 56) >> 2]),
                          (q[(w + 60) >> 2] = q[(t + 60) >> 2]),
                          (t = (t - -64) | 0),
                          (w = (w - -64) | 0) >>> 0 <= z >>> 0;

                      );
                    if (a >>> 0 <= w >>> 0) break a;
                    for (
                      ;
                      (q[w >> 2] = q[t >> 2]),
                        (t = (t + 4) | 0),
                        (w = (w + 4) | 0) >>> 0 < a >>> 0;

                    );
                  }
                  if (w >>> 0 < y >>> 0)
                    for (
                      ;
                      (o[0 | w] = r[0 | t]),
                        (t = (t + 1) | 0),
                        (0 | y) != (0 | (w = (w + 1) | 0));

                    );
                }
              }
              function ga(a) {
                return (a + -48) >>> 0 < 10;
              }
              function ha(a, o) {
                a: if (1024 <= (0 | o)) {
                  if (((a *= 898846567431158e293), (0 | o) < 2047)) {
                    o = (o + -1023) | 0;
                    break a;
                  }
                  (a *= 898846567431158e293),
                    (o = (((0 | o) < 3069 ? o : 3069) + -2046) | 0);
                } else
                  -1023 < (0 | o) ||
                    ((a *= 22250738585072014e-324),
                    (o =
                      -2045 < (0 | o)
                        ? (o + 1022) | 0
                        : ((a *= 22250738585072014e-324),
                          ((-3066 < (0 | o) ? o : -3066) + 2044) | 0)));
                return f(0, 0), f(1, (o + 1023) << 20), a * g();
              }
              function ia(a, t, A, B, C, D, E) {
                var F,
                  R,
                  U,
                  G = 0,
                  H = 0,
                  I = 0,
                  J = 0,
                  K = 0,
                  M = 0,
                  N = 0,
                  O = 0,
                  P = 0,
                  Q = 0,
                  S = 0,
                  T = 0;
                (q[(76 + (L = F = (L - 80) | 0)) >> 2] = t),
                  (U = (55 + F) | 0),
                  (R = (56 + F) | 0),
                  (t = 0);
                a: {
                  b: for (;;) {
                    (0 | P) < 0 ||
                      (P =
                        ((2147483647 - P) | 0) < (0 | t)
                          ? ((q[1906] = 61), -1)
                          : (t + P) | 0);
                    d: {
                      e: {
                        f: {
                          g: {
                            h: {
                              i: {
                                j: {
                                  k: {
                                    l: {
                                      m: {
                                        n: {
                                          o: {
                                            p: {
                                              q: {
                                                if (
                                                  ((J = q[(76 + F) >> 2]),
                                                  (I = r[0 | (t = J)]))
                                                ) {
                                                  for (;;) {
                                                    r: {
                                                      s: {
                                                        t: if ((G = 255 & I)) {
                                                          if (37 != (0 | G))
                                                            break s;
                                                          for (I = t; ; ) {
                                                            if (
                                                              37 !=
                                                              r[(t + 1) | 0]
                                                            )
                                                              break t;
                                                            if (
                                                              ((G =
                                                                (t + 2) | 0),
                                                              (q[
                                                                (76 + F) >> 2
                                                              ] = G),
                                                              (I = (I + 1) | 0),
                                                              (H =
                                                                r[(t + 2) | 0]),
                                                              (t = G),
                                                              37 != (0 | H))
                                                            )
                                                              break;
                                                          }
                                                        } else I = t;
                                                        if (
                                                          ((t = (I - J) | 0),
                                                          a && Z(a, J, t),
                                                          t)
                                                        )
                                                          continue b;
                                                        (Q = -1),
                                                          (I = 1),
                                                          (K = !ga(
                                                            o[
                                                              (q[
                                                                (76 +
                                                                  (G = F)) >>
                                                                  2
                                                              ] +
                                                                1) |
                                                                0
                                                            ]
                                                          )),
                                                          (t =
                                                            q[(76 + F) >> 2]),
                                                          K |
                                                            (36 !=
                                                              r[(t + 2) | 0]) ||
                                                            ((Q =
                                                              (o[(t + 1) | 0] +
                                                                -48) |
                                                              0),
                                                            (S = 1),
                                                            (I = 3)),
                                                          (t = (I + t) | 0),
                                                          (q[(G + 76) >> 2] =
                                                            t);
                                                        u: if (
                                                          31 <
                                                          (H =
                                                            ((M =
                                                              o[(I = 0) | t]) +
                                                              -32) |
                                                            0) >>>
                                                            0
                                                        )
                                                          G = t;
                                                        else if (
                                                          ((G = t),
                                                          75913 & (H = 1 << H))
                                                        )
                                                          for (;;) {
                                                            if (
                                                              ((G =
                                                                (t + 1) | 0),
                                                              (q[
                                                                (76 + F) >> 2
                                                              ] = G),
                                                              (I |= H),
                                                              31 <
                                                                (H =
                                                                  ((M =
                                                                    o[
                                                                      (t + 1) |
                                                                        0
                                                                    ]) +
                                                                    -32) |
                                                                  0) >>>
                                                                  0)
                                                            )
                                                              break u;
                                                            if (
                                                              ((t = G),
                                                              !(
                                                                75913 &
                                                                (H = 1 << H)
                                                              ))
                                                            )
                                                              break;
                                                          }
                                                        v: if (42 != (0 | M)) {
                                                          if (
                                                            (0 |
                                                              (N = qa(
                                                                (76 + F) | 0
                                                              ))) <
                                                            0
                                                          )
                                                            break q;
                                                          t = q[(76 + F) >> 2];
                                                        } else {
                                                          if (
                                                            ((K = F),
                                                            ga(
                                                              o[(G + 1) | 0]
                                                            ) &&
                                                              ((t =
                                                                q[
                                                                  (76 + F) >> 2
                                                                ]),
                                                              36 ==
                                                                r[(t + 2) | 0]))
                                                          )
                                                            (q[
                                                              ((((o[
                                                                (t + 1) | 0
                                                              ] <<
                                                                2) +
                                                                C) |
                                                                0) -
                                                                192) >>
                                                                2
                                                            ] = 10),
                                                              (N =
                                                                q[
                                                                  ((((o[
                                                                    (t + 1) | 0
                                                                  ] <<
                                                                    3) +
                                                                    B) |
                                                                    0) -
                                                                    384) >>
                                                                    2
                                                                ]),
                                                              (S = 1),
                                                              (t = (t + 3) | 0);
                                                          else {
                                                            if (S) break q;
                                                            (N = S = 0),
                                                              a &&
                                                                ((t =
                                                                  q[A >> 2]),
                                                                (q[A >> 2] =
                                                                  t + 4),
                                                                (N =
                                                                  q[t >> 2])),
                                                              (t =
                                                                (q[
                                                                  (76 + F) >> 2
                                                                ] +
                                                                  1) |
                                                                0);
                                                          }
                                                          if (
                                                            ((q[(K + 76) >> 2] =
                                                              t),
                                                            -1 < (0 | N))
                                                          )
                                                            break v;
                                                          (N = (0 - N) | 0),
                                                            (I |= 8192);
                                                        }
                                                        H = -1;
                                                        y: if (46 == r[0 | t])
                                                          if (
                                                            42 != r[(t + 1) | 0]
                                                          )
                                                            (q[(76 + F) >> 2] =
                                                              t + 1),
                                                              (H = qa(
                                                                (76 + F) | 0
                                                              )),
                                                              (t =
                                                                q[
                                                                  (76 + F) >> 2
                                                                ]);
                                                          else {
                                                            if (
                                                              ga(
                                                                o[(t + 2) | 0]
                                                              ) &&
                                                              ((t =
                                                                q[
                                                                  (76 + F) >> 2
                                                                ]),
                                                              36 ==
                                                                r[(t + 3) | 0])
                                                            ) {
                                                              (q[
                                                                ((((o[
                                                                  (t + 2) | 0
                                                                ] <<
                                                                  2) +
                                                                  C) |
                                                                  0) -
                                                                  192) >>
                                                                  2
                                                              ] = 10),
                                                                (H =
                                                                  q[
                                                                    ((((o[
                                                                      (t + 2) |
                                                                        0
                                                                    ] <<
                                                                      3) +
                                                                      B) |
                                                                      0) -
                                                                      384) >>
                                                                      2
                                                                  ]),
                                                                (t =
                                                                  (t + 4) | 0),
                                                                (q[
                                                                  (76 + F) >> 2
                                                                ] = t);
                                                              break y;
                                                            }
                                                            if (S) break q;
                                                            (H = a
                                                              ? ((t =
                                                                  q[A >> 2]),
                                                                (q[A >> 2] =
                                                                  t + 4),
                                                                q[t >> 2])
                                                              : 0),
                                                              (t =
                                                                (q[
                                                                  (76 + F) >> 2
                                                                ] +
                                                                  2) |
                                                                0),
                                                              (q[
                                                                (76 + F) >> 2
                                                              ] = t);
                                                          }
                                                        for (G = 0; ; ) {
                                                          if (
                                                            ((T = G),
                                                            (O = -1),
                                                            57 <
                                                              (o[0 | t] +
                                                                -65) >>>
                                                                0)
                                                          )
                                                            break a;
                                                          if (
                                                            ((M = (t + 1) | 0),
                                                            (q[(76 + F) >> 2] =
                                                              M),
                                                            (G = o[0 | t]),
                                                            (t = M),
                                                            !(
                                                              ((G =
                                                                r[
                                                                  (2639 +
                                                                    ((G +
                                                                      w(
                                                                        T,
                                                                        58
                                                                      )) |
                                                                      0)) |
                                                                    0
                                                                ]) +
                                                                -1) >>>
                                                                0 <
                                                              8
                                                            ))
                                                          )
                                                            break;
                                                        }
                                                        if (!G) break a;
                                                        A: {
                                                          B: {
                                                            C: {
                                                              if (
                                                                19 ==
                                                                (0 | G)
                                                              ) {
                                                                if (
                                                                  (0 | Q) <=
                                                                  -1
                                                                )
                                                                  break C;
                                                                break a;
                                                              }
                                                              if ((0 | Q) < 0)
                                                                break B;
                                                              (q[
                                                                ((Q << 2) +
                                                                  C) >>
                                                                  2
                                                              ] = G),
                                                                (G =
                                                                  q[
                                                                    (4 +
                                                                      (t =
                                                                        ((Q <<
                                                                          3) +
                                                                          B) |
                                                                        0)) >>
                                                                      2
                                                                  ]),
                                                                (q[
                                                                  (64 + F) >> 2
                                                                ] = q[t >> 2]),
                                                                (q[
                                                                  (68 + F) >> 2
                                                                ] = G);
                                                            }
                                                            if (((t = 0), !a))
                                                              continue b;
                                                            break A;
                                                          }
                                                          if (!a) break d;
                                                          pa(
                                                            (64 + F) | 0,
                                                            G,
                                                            A,
                                                            E
                                                          ),
                                                            (M =
                                                              q[(76 + F) >> 2]);
                                                        }
                                                        if (
                                                          ((K = -65537 & I),
                                                          (I =
                                                            8192 & I ? K : I),
                                                          (Q = 2684),
                                                          (G = R),
                                                          (t =
                                                            o[
                                                              (M + -1) | (O = 0)
                                                            ]),
                                                          (M =
                                                            ((t =
                                                              T && 3 == (15 & t)
                                                                ? -33 & t
                                                                : t) +
                                                              -88) |
                                                            0) >>>
                                                            0 <=
                                                            32)
                                                        )
                                                          break r;
                                                        D: {
                                                          E: {
                                                            F: {
                                                              G: {
                                                                if (
                                                                  6 <
                                                                  (K =
                                                                    (t + -65) |
                                                                    0) >>>
                                                                    0
                                                                ) {
                                                                  if (
                                                                    83 !=
                                                                    (0 | t)
                                                                  )
                                                                    break e;
                                                                  if (!H)
                                                                    break G;
                                                                  G =
                                                                    q[
                                                                      (64 +
                                                                        F) >>
                                                                        2
                                                                    ];
                                                                  break E;
                                                                }
                                                                switch (
                                                                  (K - 1) |
                                                                  0
                                                                ) {
                                                                  case 1:
                                                                    break F;
                                                                  case 0:
                                                                  case 2:
                                                                    break e;
                                                                  default:
                                                                    break p;
                                                                }
                                                              }
                                                              _(
                                                                a,
                                                                32,
                                                                N,
                                                                (t = 0),
                                                                I
                                                              );
                                                              break D;
                                                            }
                                                            (q[
                                                              (12 + F) >> 2
                                                            ] = 0),
                                                              (q[(8 + F) >> 2] =
                                                                q[
                                                                  (64 + F) >> 2
                                                                ]),
                                                              (q[
                                                                (64 + F) >> 2
                                                              ] = 8 + F),
                                                              (H = -1),
                                                              (G = (8 + F) | 0);
                                                          }
                                                          t = 0;
                                                          H: {
                                                            for (;;) {
                                                              if (
                                                                !(J = q[G >> 2])
                                                              )
                                                                break H;
                                                              if (
                                                                (K =
                                                                  (0 |
                                                                    (J = oa(
                                                                      (4 + F) |
                                                                        0,
                                                                      J
                                                                    ))) <
                                                                  0) |
                                                                ((H - t) >>> 0 <
                                                                  J >>> 0)
                                                              )
                                                                break;
                                                              if (
                                                                ((G =
                                                                  (G + 4) | 0),
                                                                !(
                                                                  (t =
                                                                    (t + J) |
                                                                    0) >>>
                                                                    0 <
                                                                  H >>> 0
                                                                ))
                                                              )
                                                                break H;
                                                            }
                                                            if (((O = -1), K))
                                                              break a;
                                                          }
                                                          if (
                                                            (_(a, 32, N, t, I),
                                                            t)
                                                          )
                                                            for (
                                                              H = 0,
                                                                G =
                                                                  q[
                                                                    (64 + F) >>
                                                                      2
                                                                  ];
                                                              ;

                                                            ) {
                                                              if (
                                                                !(J = q[G >> 2])
                                                              )
                                                                break D;
                                                              if (
                                                                (0 | t) <
                                                                (0 |
                                                                  (H =
                                                                    ((J = oa(
                                                                      (4 + F) |
                                                                        0,
                                                                      J
                                                                    )) +
                                                                      H) |
                                                                    0))
                                                              )
                                                                break D;
                                                              if (
                                                                (Z(
                                                                  a,
                                                                  (4 + F) | 0,
                                                                  J
                                                                ),
                                                                (G =
                                                                  (G + 4) | 0),
                                                                !(
                                                                  H >>> 0 <
                                                                  t >>> 0
                                                                ))
                                                              )
                                                                break;
                                                            }
                                                          else t = 0;
                                                        }
                                                        _(
                                                          a,
                                                          32,
                                                          N,
                                                          t,
                                                          8192 ^ I
                                                        ),
                                                          (t =
                                                            (0 | t) < (0 | N)
                                                              ? N
                                                              : t);
                                                        continue b;
                                                      }
                                                      (G = (t + 1) | 0),
                                                        (q[(76 + F) >> 2] = G),
                                                        (I = r[(t + 1) | 0]),
                                                        (t = G);
                                                      continue;
                                                    }
                                                    break;
                                                  }
                                                  switch ((M - 1) | 0) {
                                                    case 21:
                                                      break i;
                                                    case 23:
                                                      break k;
                                                    case 22:
                                                      break l;
                                                    case 11:
                                                    case 16:
                                                      break m;
                                                    case 10:
                                                      break n;
                                                    case 26:
                                                      break o;
                                                    case 8:
                                                    case 12:
                                                    case 13:
                                                    case 14:
                                                      break p;
                                                    case 0:
                                                    case 1:
                                                    case 2:
                                                    case 3:
                                                    case 4:
                                                    case 5:
                                                    case 6:
                                                    case 7:
                                                    case 9:
                                                    case 15:
                                                    case 17:
                                                    case 18:
                                                    case 19:
                                                    case 20:
                                                    case 24:
                                                    case 25:
                                                    case 27:
                                                    case 29:
                                                    case 30:
                                                      break e;
                                                    case 28:
                                                      break h;
                                                    default:
                                                      break j;
                                                  }
                                                }
                                                if (((O = P), a)) break a;
                                                if (!S) break d;
                                                for (t = 1; ; ) {
                                                  if (
                                                    (a = q[((t << 2) + C) >> 2])
                                                  ) {
                                                    if (
                                                      (pa(
                                                        ((t << 3) + B) | 0,
                                                        a,
                                                        A,
                                                        E
                                                      ),
                                                      10 !=
                                                        (0 |
                                                          (t =
                                                            (t + (O = 1)) | 0)))
                                                    )
                                                      continue;
                                                    break a;
                                                  }
                                                  break;
                                                }
                                                if (((O = 1), 10 <= t >>> 0))
                                                  break a;
                                                for (;;) {
                                                  if (q[((t << 2) + C) >> 2])
                                                    break q;
                                                  if (
                                                    ((a = 8 < t >>> 0),
                                                    (t = (t + 1) | 0),
                                                    a)
                                                  )
                                                    break;
                                                }
                                                break a;
                                              }
                                              O = -1;
                                              break a;
                                            }
                                            t =
                                              0 |
                                              n[D](
                                                a,
                                                v[(64 + F) >> 3],
                                                N,
                                                H,
                                                I,
                                                t
                                              );
                                            continue;
                                          }
                                          (G =
                                            (t = Ia(
                                              (J =
                                                (t = q[(64 + F) >> 2]) || 2694),
                                              H
                                            )) || (H + J) | 0),
                                            (I = K),
                                            (H = t ? (t - J) | 0 : H);
                                          break e;
                                        }
                                        (o[(55 + F) | 0] = q[(64 + F) >> 2]),
                                          (H = 1),
                                          (J = U),
                                          (I = K);
                                        break e;
                                      }
                                      if (
                                        ((t = K = q[(68 + F) >> 2]),
                                        (J = q[(64 + F) >> 2]),
                                        (0 | t) < -1 ||
                                          ((0 | t) <= -1 &&
                                            !(4294967295 < J >>> 0)))
                                      ) {
                                        (t =
                                          (0 - ((t + (0 < J >>> 0)) | 0)) | 0),
                                          (J = (0 - J) | 0),
                                          (q[(64 + F) >> 2] = J),
                                          (q[(68 + F) >> 2] = t),
                                          (O = 1),
                                          (Q = 2684);
                                        break g;
                                      }
                                      if (2048 & I) {
                                        (O = 1), (Q = 2685);
                                        break g;
                                      }
                                      Q = (O = 1 & I) ? 2686 : 2684;
                                      break g;
                                    }
                                    if (
                                      ((J = Oa(
                                        q[(64 + F) >> 2],
                                        q[(68 + F) >> 2],
                                        R
                                      )),
                                      !(8 & I))
                                    )
                                      break f;
                                    H =
                                      (0 | (t = (R - J) | 0)) < (0 | H)
                                        ? H
                                        : (t + 1) | 0;
                                    break f;
                                  }
                                  (H = 8 < H >>> 0 ? H : 8),
                                    (I |= 8),
                                    (t = 120);
                                }
                                if (
                                  ((J = Na(
                                    q[(64 + F) >> 2],
                                    q[(68 + F) >> 2],
                                    R,
                                    32 & t
                                  )),
                                  !(8 & I) |
                                    !(q[(64 + F) >> 2] | q[(68 + F) >> 2]))
                                )
                                  break f;
                                (Q = (2684 + (t >>> 4)) | 0), (O = 2);
                                break f;
                              }
                              if (7 < (G = 255 & T) >>> (t = 0)) continue;
                              switch ((G - 1) | 0) {
                                default:
                                case 0:
                                  q[q[(64 + F) >> 2] >> 2] = P;
                                  continue;
                                case 1:
                                  (G = q[(64 + F) >> 2]),
                                    (q[G >> 2] = P),
                                    (q[(G + 4) >> 2] = P >> 31);
                                  continue;
                                case 2:
                                  p[q[(64 + F) >> 2] >> 1] = P;
                                  continue;
                                case 3:
                                  o[q[(64 + F) >> 2]] = P;
                                  continue;
                                case 5:
                                  q[q[(64 + F) >> 2] >> 2] = P;
                                  continue;
                                case 4:
                                  continue;
                                case 6:
                              }
                              (G = q[(64 + F) >> 2]),
                                (q[G >> 2] = P),
                                (q[(G + 4) >> 2] = P >> 31);
                              continue;
                            }
                            (J = q[(64 + F) >> 2]),
                              (t = q[(68 + F) >> 2]),
                              (Q = 2684);
                          }
                          J = ea(J, t, R);
                        }
                        (I = -1 < (0 | H) ? -65537 & I : I),
                          (H =
                            !!(
                              (K = t = q[(68 + F) >> 2]) |
                              (M = q[(64 + F) >> 2])
                            ) | H
                              ? (0 | (t = (!(K | M) + ((R - J) | 0)) | 0)) <
                                (0 | H)
                                ? H
                                : t
                              : ((J = R), 0));
                      }
                      _(
                        a,
                        32,
                        (t =
                          (0 | N) <
                          (0 |
                            (G =
                              ((H = (0 | H) < (0 | (K = (G - J) | 0)) ? K : H) +
                                O) |
                              0))
                            ? G
                            : N),
                        G,
                        I
                      ),
                        Z(a, Q, O),
                        _(a, 48, t, G, 65536 ^ I),
                        _(a, 48, H, K, 0),
                        Z(a, J, K),
                        _(a, 32, t, G, 8192 ^ I);
                      continue;
                    }
                    break;
                  }
                  O = 0;
                }
                return (L = (80 + F) | 0), O;
              }
              function ja(a) {
                var Y,
                  o = 0,
                  w = 0,
                  A = 0,
                  B = 0,
                  C = 0,
                  D = 0,
                  E = 0,
                  V = 0,
                  W = 0,
                  X = 0,
                  Z = 0,
                  _ = 0;
                L = Y = (L - 16) | 0;
                a: {
                  b: {
                    c: {
                      d: {
                        e: {
                          f: {
                            g: {
                              h: {
                                i: {
                                  j: {
                                    k: {
                                      if (a >>> 0 <= 244) {
                                        if (
                                          3 &
                                          (o =
                                            (C = q[1923]) >>>
                                            (a =
                                              (D =
                                                a >>> 0 < 11
                                                  ? 16
                                                  : (a + 11) & -8) >>> 3))
                                        ) {
                                          (a =
                                            ((o =
                                              q[
                                                (7740 +
                                                  (B =
                                                    (w =
                                                      (a + (1 & (-1 ^ o))) |
                                                      0) << 3)) >>
                                                  2
                                              ]) +
                                              8) |
                                            0),
                                            (0 | (A = q[(o + 8) >> 2])) !=
                                            (0 | (B = (B + 7732) | 0))
                                              ? ((q[(A + 12) >> 2] = B),
                                                (q[(B + 8) >> 2] = A))
                                              : ((Z = 7692),
                                                (_ = jc(w) & C),
                                                (q[Z >> 2] = _)),
                                            (w <<= 3),
                                            (q[(o + 4) >> 2] = 3 | w),
                                            (q[(4 + (o = (o + w) | 0)) >> 2] =
                                              1 | q[(o + 4) >> 2]);
                                          break a;
                                        }
                                        if (D >>> 0 <= (V = q[1925]) >>> 0)
                                          break k;
                                        if (o) {
                                          (w = o =
                                            ((a =
                                              (((0 -
                                                (a =
                                                  ((0 - (w = 2 << a)) | w) &
                                                  (o << a))) &
                                                a) -
                                                1) |
                                              0) >>>
                                              12) &
                                            16),
                                            (w |= o = ((a >>>= o) >>> 5) & 8),
                                            (w |= o = ((a >>>= o) >>> 2) & 4),
                                            (o =
                                              q[
                                                (7740 +
                                                  (A =
                                                    (w =
                                                      (((w |= o =
                                                        ((a >>>= o) >>> 1) &
                                                        2) |
                                                        (o =
                                                          ((a >>>= o) >>> 1) &
                                                          1)) +
                                                        (a >>> o)) |
                                                      0) << 3)) >>
                                                  2
                                              ]),
                                            (0 | (a = q[(o + 8) >> 2])) !=
                                            (0 | (A = (A + 7732) | 0))
                                              ? ((q[(a + 12) >> 2] = A),
                                                (q[(A + 8) >> 2] = a))
                                              : ((C = jc(w) & C),
                                                (q[1923] = C)),
                                            (a = (o + 8) | 0),
                                            (q[(o + 4) >> 2] = 3 | D),
                                            (B = ((w <<= 3) - D) | 0),
                                            (q[(4 + (E = (o + D) | 0)) >> 2] =
                                              1 | B),
                                            (q[(o + w) >> 2] = B),
                                            V &&
                                              ((o =
                                                (7732 + ((w = V >>> 3) << 3)) |
                                                0),
                                              (A = q[1928]),
                                              (w =
                                                (w = 1 << w) & C
                                                  ? q[(o + 8) >> 2]
                                                  : ((q[1923] = w | C), o)),
                                              (q[(o + 8) >> 2] = A),
                                              (q[(w + 12) >> 2] = A),
                                              (q[(A + 12) >> 2] = o),
                                              (q[(A + 8) >> 2] = w)),
                                            (q[1928] = E),
                                            (q[1925] = B);
                                          break a;
                                        }
                                        if (!(X = q[1924])) break k;
                                        for (
                                          w = o =
                                            ((a = ((X & (0 - X)) - 1) | 0) >>>
                                              12) &
                                            16,
                                            w |= o = ((a >>>= o) >>> 5) & 8,
                                            w |= o = ((a >>>= o) >>> 2) & 4,
                                            o =
                                              q[
                                                (7996 +
                                                  ((((w |= o =
                                                    ((a >>>= o) >>> 1) & 2) |
                                                    (o =
                                                      ((a >>>= o) >>> 1) & 1)) +
                                                    (a >>> o)) <<
                                                    2)) >>
                                                  2
                                              ],
                                            A =
                                              ((-8 & q[(o + 4) >> 2]) - D) | 0,
                                            w = o;
                                          (a =
                                            (a = q[(w + 16) >> 2]) ||
                                            q[(w + 20) >> 2]);

                                        )
                                          (A = (w =
                                            (B =
                                              ((-8 & q[(a + 4) >> 2]) - D) |
                                              0) >>>
                                              0 <
                                            A >>> 0)
                                            ? B
                                            : A),
                                            (o = w ? a : o),
                                            (w = a);
                                        if (
                                          ((W = q[(o + 24) >> 2]),
                                          (0 | (B = q[(o + 12) >> 2])) !=
                                            (0 | o))
                                        ) {
                                          (a = q[(o + 8) >> 2]),
                                            (q[(a + 12) >> 2] = B),
                                            (q[(B + 8) >> 2] = a);
                                          break b;
                                        }
                                        if (!(a = q[(w = (o + 20) | 0) >> 2])) {
                                          if (!(a = q[(o + 16) >> 2])) break j;
                                          w = (o + 16) | 0;
                                        }
                                        for (
                                          ;
                                          (E = w),
                                            (a =
                                              q[
                                                (w = ((B = a) + 20) | 0) >> 2
                                              ]) ||
                                              ((w = (B + 16) | 0),
                                              (a = q[(B + 16) >> 2]));

                                        );
                                        q[E >> 2] = 0;
                                        break b;
                                      }
                                      if (
                                        ((D = -1),
                                        !(4294967231 < a >>> 0) &&
                                          ((D = -8 & (o = (a + 11) | 0)),
                                          (V = q[1924])))
                                      ) {
                                        (w = (0 - D) | 0),
                                          (C = 0),
                                          (o >>>= 8) &&
                                            ((C = 31),
                                            16777215 < D >>> 0 ||
                                              (C =
                                                (28 +
                                                  (((a =
                                                    ((((C =
                                                      (o <<= A =
                                                        ((o + 1048320) >>> 16) &
                                                        8) <<
                                                      (a =
                                                        ((o + 520192) >>> 16) &
                                                        4)) <<
                                                      (o =
                                                        ((C + 245760) >>> 16) &
                                                        2)) >>>
                                                      15) -
                                                      (o | a | A)) |
                                                    0) <<
                                                    1) |
                                                    ((D >>> (a + 21)) & 1))) |
                                                0));
                                        q: {
                                          r: {
                                            if ((A = q[(7996 + (C << 2)) >> 2]))
                                              for (
                                                o =
                                                  D <<
                                                  (31 == (0 | C)
                                                    ? 0
                                                    : (25 - (C >>> 1)) | 0),
                                                  a = 0;
                                                ;

                                              ) {
                                                if (
                                                  !(
                                                    w >>> 0 <=
                                                      (E =
                                                        ((-8 &
                                                          q[(A + 4) >> 2]) -
                                                          D) |
                                                        0) >>>
                                                        0 || ((B = A), (w = E))
                                                  )
                                                ) {
                                                  (w = 0), (a = A);
                                                  break r;
                                                }
                                                if (
                                                  ((E = q[(A + 20) >> 2]),
                                                  (A =
                                                    q[
                                                      (16 +
                                                        ((((o >>> 29) & 4) +
                                                          A) |
                                                          0)) >>
                                                        2
                                                    ]),
                                                  (a = E
                                                    ? (0 | E) == (0 | A)
                                                      ? a
                                                      : E
                                                    : a),
                                                  (o <<= 0 != (0 | A)),
                                                  !A)
                                                )
                                                  break;
                                              }
                                            else a = 0;
                                            if (!(a | B)) {
                                              if (
                                                !(a =
                                                  ((0 - (a = 2 << C)) | a) & V)
                                              )
                                                break k;
                                              (A = o =
                                                ((a =
                                                  ((a & (0 - a)) - 1) | 0) >>>
                                                  12) &
                                                16),
                                                (A |= o =
                                                  ((a >>>= o) >>> 5) & 8),
                                                (A |= o =
                                                  ((a >>>= o) >>> 2) & 4),
                                                (a =
                                                  q[
                                                    (7996 +
                                                      ((((A |= o =
                                                        ((a >>>= o) >>> 1) &
                                                        2) |
                                                        (o =
                                                          ((a >>>= o) >>> 1) &
                                                          1)) +
                                                        (a >>> o)) <<
                                                        2)) >>
                                                      2
                                                  ]);
                                            }
                                            if (!a) break q;
                                          }
                                          for (
                                            ;
                                            (w = (o =
                                              (A =
                                                ((-8 & q[(a + 4) >> 2]) - D) |
                                                0) >>>
                                                0 <
                                              w >>> 0)
                                              ? A
                                              : w),
                                              (B = o ? a : B),
                                              (a =
                                                (o = q[(a + 16) >> 2]) ||
                                                q[(a + 20) >> 2]);

                                          );
                                        }
                                        if (
                                          !(
                                            !B |
                                            (w >>> 0 >= (q[1925] - D) >>> 0)
                                          )
                                        ) {
                                          if (
                                            ((E = q[(B + 24) >> 2]),
                                            (0 | B) !=
                                              (0 | (o = q[(B + 12) >> 2])))
                                          ) {
                                            (a = q[(B + 8) >> 2]),
                                              (q[(a + 12) >> 2] = o),
                                              (q[(o + 8) >> 2] = a);
                                            break c;
                                          }
                                          if (
                                            !(a = q[(A = (B + 20) | 0) >> 2])
                                          ) {
                                            if (!(a = q[(B + 16) >> 2]))
                                              break i;
                                            A = (B + 16) | 0;
                                          }
                                          for (
                                            ;
                                            (C = A),
                                              (a =
                                                q[
                                                  (A = ((o = a) + 20) | 0) >> 2
                                                ]) ||
                                                ((A = (o + 16) | 0),
                                                (a = q[(o + 16) >> 2]));

                                          );
                                          q[C >> 2] = 0;
                                          break c;
                                        }
                                      }
                                    }
                                    if (D >>> 0 <= (o = q[1925]) >>> 0) {
                                      (a = q[1928]),
                                        16 <= (w = (o - D) | 0) >>> 0
                                          ? ((q[1925] = w),
                                            (A = (a + D) | 0),
                                            (q[1928] = A),
                                            (q[(A + 4) >> 2] = 1 | w),
                                            (q[(a + o) >> 2] = w),
                                            (q[(a + 4) >> 2] = 3 | D))
                                          : ((q[1928] = 0),
                                            (q[1925] = 0),
                                            (q[(a + 4) >> 2] = 3 | o),
                                            (q[(4 + (o = (a + o) | 0)) >> 2] =
                                              1 | q[(o + 4) >> 2])),
                                        (a = (a + 8) | 0);
                                      break a;
                                    }
                                    if (D >>> 0 < (A = q[1926]) >>> 0) {
                                      (o = (A - D) | 0),
                                        (q[1926] = o),
                                        (w = ((a = q[1929]) + D) | 0),
                                        (q[1929] = w),
                                        (q[(w + 4) >> 2] = 1 | o),
                                        (q[(a + 4) >> 2] = 3 | D),
                                        (a = (a + 8) | 0);
                                      break a;
                                    }
                                    if (
                                      (w =
                                        (C =
                                          ((w = B = (D + 47) | (a = 0)) +
                                            (o = q[2041]
                                              ? q[2043]
                                              : ((q[2044] = -1),
                                                (q[2045] = -1),
                                                (q[2042] = 4096),
                                                (q[2043] = 4096),
                                                (q[2041] =
                                                  ((12 + Y) & -16) ^
                                                  1431655768),
                                                (q[2046] = 0),
                                                (q[2034] = 0),
                                                4096))) |
                                          0) & (E = (0 - o) | 0)) >>>
                                        0 <=
                                      D >>> 0
                                    )
                                      break a;
                                    if (
                                      (o = q[2033]) &&
                                      ((W = ((V = q[2031]) + w) | 0) >>> 0 <=
                                        V >>> 0) |
                                        (o >>> 0 < W >>> 0)
                                    )
                                      break a;
                                    if (4 & r[8136]) break f;
                                    v: {
                                      w: {
                                        if ((o = q[1929]))
                                          for (a = 8140; ; ) {
                                            if (
                                              ((V = q[a >> 2]) +
                                                q[(a + 4) >> 2]) >>>
                                                0 >
                                                o >>> 0 &&
                                              V >>> 0 <= o >>> 0
                                            )
                                              break w;
                                            if (!(a = q[(a + 8) >> 2])) break;
                                          }
                                        if (-1 == (0 | (o = da(0)))) break g;
                                        if (
                                          ((C = w),
                                          (A = ((a = q[2042]) + -1) | 0) & o &&
                                            (C =
                                              (((w - o) | 0) +
                                                ((o + A) & (0 - a))) |
                                              0),
                                          (C >>> 0 <= D >>> 0) |
                                            (2147483646 < C >>> 0))
                                        )
                                          break g;
                                        if (
                                          (a = q[2033]) &&
                                          ((E = ((A = q[2031]) + C) | 0) >>>
                                            0 <=
                                            A >>> 0) |
                                            (a >>> 0 < E >>> 0)
                                        )
                                          break g;
                                        if ((0 | o) != (0 | (a = da(C))))
                                          break v;
                                        break e;
                                      }
                                      if (2147483646 < (C = E & (C - A)) >>> 0)
                                        break g;
                                      if (
                                        (0 | (o = da(C))) ==
                                        ((q[a >> 2] + q[(a + 4) >> 2]) | 0)
                                      )
                                        break h;
                                      a = o;
                                    }
                                    if (
                                      !(
                                        ((D + 48) >>> 0 <= C >>> 0) |
                                        (2147483646 < C >>> 0) |
                                        (-1 == (0 | (o = a)))
                                      )
                                    ) {
                                      if (
                                        2147483646 <
                                        (a =
                                          ((a = q[2043]) + ((B - C) | 0)) &
                                          (0 - a)) >>>
                                          0
                                      )
                                        break e;
                                      if (-1 != (0 | da(a))) {
                                        C = (a + C) | 0;
                                        break e;
                                      }
                                      da((0 - C) | 0);
                                      break g;
                                    }
                                    if (-1 != (0 | o)) break e;
                                    break g;
                                  }
                                  B = 0;
                                  break b;
                                }
                                o = 0;
                                break c;
                              }
                              if (-1 != (0 | o)) break e;
                            }
                            q[2034] = 4 | q[2034];
                          }
                          if (2147483646 < w >>> 0) break d;
                          if (
                            ((o = da(w)),
                            ((a = da(0)) >>> 0 <= o >>> 0) |
                              (-1 == (0 | o)) |
                              (-1 == (0 | a)))
                          )
                            break d;
                          if ((C = (a - o) | 0) >>> 0 <= (D + 40) >>> 0)
                            break d;
                        }
                        (a = (q[2031] + C) | 0),
                          (q[2031] = a) >>> 0 > t[2032] && (q[2032] = a);
                        x: {
                          y: {
                            z: {
                              if ((w = q[1929])) {
                                for (a = 8140; ; ) {
                                  if (
                                    (((A = q[a >> 2]) + (B = q[(a + 4) >> 2])) |
                                      0) ==
                                    (0 | o)
                                  )
                                    break z;
                                  if (!(a = q[(a + 8) >> 2])) break;
                                }
                                break y;
                              }
                              for (
                                ((a = q[1927]) >>> 0 <= o >>> 0 && a) ||
                                  (q[1927] = o),
                                  a = 0,
                                  q[2036] = C,
                                  q[2035] = o,
                                  q[1931] = -1,
                                  q[1932] = q[2041],
                                  q[2038] = 0;
                                (A = (7732 + (w = a << 3)) | 0),
                                  (q[(w + 7740) >> 2] = A),
                                  (q[(w + 7744) >> 2] = A),
                                  32 != (0 | (a = (a + 1) | 0));

                              );
                              (A =
                                ((a = (C + -40) | 0) -
                                  (w = (o + 8) & 7 ? (-8 - o) & 7 : 0)) |
                                0),
                                (q[1926] = A),
                                (w = (o + w) | 0),
                                (q[1929] = w),
                                (q[(w + 4) >> 2] = 1 | A),
                                (q[(4 + ((a + o) | 0)) >> 2] = 40),
                                (q[1930] = q[2045]);
                              break x;
                            }
                            if (
                              !(
                                (8 & r[(a + 12) | 0]) |
                                (o >>> 0 <= w >>> 0) |
                                (w >>> 0 < A >>> 0)
                              )
                            ) {
                              (q[(a + 4) >> 2] = B + C),
                                (o =
                                  ((a = (w + 8) & 7 ? (-8 - w) & 7 : 0) + w) |
                                  0),
                                (q[1929] = o),
                                (a = ((A = (q[1926] + C) | 0) - a) | 0),
                                (q[1926] = a),
                                (q[(o + 4) >> 2] = 1 | a),
                                (q[(4 + ((w + A) | 0)) >> 2] = 40),
                                (q[1930] = q[2045]);
                              break x;
                            }
                          }
                          o >>> 0 < (B = q[1927]) >>> 0 &&
                            ((q[1927] = o), (B = 0)),
                            (A = (o + C) | 0),
                            (a = 8140);
                          A: {
                            B: {
                              C: {
                                D: {
                                  E: {
                                    F: {
                                      for (; (0 | A) != q[a >> 2]; )
                                        if (!(a = q[(a + 8) >> 2])) break F;
                                      if (!(8 & r[(a + 12) | 0])) break E;
                                    }
                                    for (a = 8140; ; ) {
                                      if (
                                        (A = q[a >> 2]) >>> 0 <= w >>> 0 &&
                                        w >>> 0 <
                                          (B = (A + q[(a + 4) >> 2]) | 0) >>> 0
                                      )
                                        break D;
                                      a = q[(a + 8) >> 2];
                                    }
                                  }
                                  if (
                                    ((q[a >> 2] = o),
                                    (q[(a + 4) >> 2] = q[(a + 4) >> 2] + C),
                                    (q[
                                      (4 +
                                        (W =
                                          (((o + 8) & 7 ? (-8 - o) & 7 : 0) +
                                            o) |
                                          0)) >>
                                        2
                                    ] = 3 | D),
                                    (a =
                                      ((((o =
                                        (A + ((A + 8) & 7 ? (-8 - A) & 7 : 0)) |
                                        0) -
                                        W) |
                                        0) -
                                        D) |
                                      0),
                                    (E = (D + W) | 0),
                                    (0 | o) == (0 | w))
                                  ) {
                                    (q[1929] = E),
                                      (a = (q[1926] + a) | 0),
                                      (q[1926] = a),
                                      (q[(E + 4) >> 2] = 1 | a);
                                    break B;
                                  }
                                  if (q[1928] == (0 | o)) {
                                    (q[1928] = E),
                                      (a = (q[1925] + a) | 0),
                                      (q[1925] = a),
                                      (q[(E + 4) >> 2] = 1 | a),
                                      (q[(a + E) >> 2] = a);
                                    break B;
                                  }
                                  if (1 == (3 & (w = q[(o + 4) >> 2]))) {
                                    X = -8 & w;
                                    G: if (w >>> 0 <= 255) {
                                      if (
                                        ((B = w >>> 3),
                                        (w = q[(o + 8) >> 2]),
                                        (0 | (A = q[(o + 12) >> 2])) == (0 | w))
                                      ) {
                                        (Z = 7692),
                                          (_ = q[1923] & jc(B)),
                                          (q[Z >> 2] = _);
                                        break G;
                                      }
                                      (q[(w + 12) >> 2] = A),
                                        (q[(A + 8) >> 2] = w);
                                    } else {
                                      if (
                                        ((V = q[(o + 24) >> 2]),
                                        (0 | (C = q[(o + 12) >> 2])) == (0 | o))
                                      )
                                        if (
                                          (D = q[(A = (o + 20) | 0) >> 2]) ||
                                          (D = q[(A = (o + 16) | 0) >> 2])
                                        ) {
                                          for (
                                            ;
                                            (w = A),
                                              (D =
                                                q[
                                                  (A = ((C = D) + 20) | 0) >> 2
                                                ]) ||
                                                ((A = (C + 16) | 0),
                                                (D = q[(C + 16) >> 2]));

                                          );
                                          q[w >> 2] = 0;
                                        } else C = 0;
                                      else
                                        (w = q[(o + 8) >> 2]),
                                          (q[(w + 12) >> 2] = C),
                                          (q[(C + 8) >> 2] = w);
                                      if (V) {
                                        w = q[(o + 28) >> 2];
                                        J: {
                                          if (
                                            q[
                                              (A = (7996 + (w << 2)) | 0) >> 2
                                            ] ==
                                            (0 | o)
                                          ) {
                                            if ((q[A >> 2] = C)) break J;
                                            (Z = 7696),
                                              (_ = q[1924] & jc(w)),
                                              (q[Z >> 2] = _);
                                            break G;
                                          }
                                          if (
                                            !(q[
                                              (V +
                                                (q[(V + 16) >> 2] == (0 | o)
                                                  ? 16
                                                  : 20)) >>
                                                2
                                            ] = C)
                                          )
                                            break G;
                                        }
                                        (q[(C + 24) >> 2] = V),
                                          (w = q[(o + 16) >> 2]) &&
                                            ((q[(C + 16) >> 2] = w),
                                            (q[(w + 24) >> 2] = C)),
                                          (w = q[(o + 20) >> 2]) &&
                                            ((q[(C + 20) >> 2] = w),
                                            (q[(w + 24) >> 2] = C));
                                      }
                                    }
                                    (o = (o + X) | 0), (a = (a + X) | 0);
                                  }
                                  if (
                                    ((q[(o + 4) >> 2] = -2 & q[(o + 4) >> 2]),
                                    (q[(E + 4) >> 2] = 1 | a),
                                    (q[(a + E) >> 2] = a) >>> 0 <= 255)
                                  ) {
                                    (a = (7732 + ((o = a >>> 3) << 3)) | 0),
                                      (o =
                                        (w = q[1923]) & (o = 1 << o)
                                          ? q[(a + 8) >> 2]
                                          : ((q[1923] = o | w), a)),
                                      (q[(a + 8) >> 2] = E),
                                      (q[(o + 12) >> 2] = E),
                                      (q[(E + 12) >> 2] = a),
                                      (q[(E + 8) >> 2] = o);
                                    break B;
                                  }
                                  if (
                                    ((o = 0),
                                    (A = a >>> 8) &&
                                      ((o = 31),
                                      16777215 < a >>> 0 ||
                                        (o =
                                          (28 +
                                            (((o =
                                              ((((D =
                                                (A <<= B =
                                                  ((A + 1048320) >>> 16) & 8) <<
                                                (o =
                                                  ((A + 520192) >>> 16) & 4)) <<
                                                (A =
                                                  ((D + 245760) >>> 16) &
                                                  2)) >>>
                                                15) -
                                                (A | o | B)) |
                                              0) <<
                                              1) |
                                              ((a >>> (o + 21)) & 1))) |
                                          0)),
                                    (q[((w = E) + 28) >> 2] = o),
                                    (q[(E + 16) >> 2] = 0),
                                    (w =
                                      (7996 + (o << 2)) |
                                      (q[(E + 20) >> 2] = 0)),
                                    (A = q[1924]) & (B = 1 << o))
                                  ) {
                                    for (
                                      A =
                                        a <<
                                        (31 == (0 | o)
                                          ? 0
                                          : (25 - (o >>> 1)) | 0),
                                        o = q[w >> 2];
                                      ;

                                    ) {
                                      if (
                                        (-8 & q[((w = o) + 4) >> 2]) ==
                                        (0 | a)
                                      )
                                        break C;
                                      if (
                                        ((o = A >>> 29),
                                        (A <<= 1),
                                        !(o =
                                          q[
                                            (16 + (B = ((4 & o) + w) | 0)) >> 2
                                          ]))
                                      )
                                        break;
                                    }
                                    q[(B + 16) >> 2] = E;
                                  } else (q[1924] = A | B), (q[w >> 2] = E);
                                  (q[(E + 24) >> 2] = w),
                                    (q[(E + 12) >> 2] = E),
                                    (q[(E + 8) >> 2] = E);
                                  break B;
                                }
                                for (
                                  E =
                                    ((a = (C + -40) | 0) -
                                      (A = (o + 8) & 7 ? (-8 - o) & 7 : 0)) |
                                    0,
                                    q[1926] = E,
                                    A = (o + A) | 0,
                                    q[1929] = A,
                                    q[(A + 4) >> 2] = 1 | E,
                                    q[(4 + ((a + o) | 0)) >> 2] = 40,
                                    q[1930] = q[2045],
                                    q[
                                      ((A =
                                        (a =
                                          (((B +
                                            ((B + -39) & 7
                                              ? (39 - B) & 7
                                              : 0)) |
                                            0) -
                                            47) |
                                          0) >>>
                                          0 <
                                        (w + 16) >>> 0
                                          ? w
                                          : a) +
                                        4) >>
                                        2
                                    ] = 27,
                                    a = q[2038],
                                    q[(A + 16) >> 2] = q[2037],
                                    q[(A + 20) >> 2] = a,
                                    a = q[2036],
                                    q[(A + 8) >> 2] = q[2035],
                                    q[(A + 12) >> 2] = a,
                                    q[2037] = A + 8,
                                    q[2036] = C,
                                    q[2035] = o,
                                    a = (A + 24) | (q[2038] = 0);
                                  (q[(a + 4) >> 2] = 7),
                                    (o = (a + 8) | 0),
                                    (a = (a + 4) | 0),
                                    o >>> 0 < B >>> 0;

                                );
                                if ((0 | w) == (0 | A)) break x;
                                if (
                                  ((q[(A + 4) >> 2] = -2 & q[(A + 4) >> 2]),
                                  (B = (A - w) | 0),
                                  (q[(w + 4) >> 2] = 1 | B),
                                  (q[A >> 2] = B) >>> 0 <= 255)
                                ) {
                                  (a = (7732 + ((o = B >>> 3) << 3)) | 0),
                                    (o =
                                      (A = q[1923]) & (o = 1 << o)
                                        ? q[(a + 8) >> 2]
                                        : ((q[1923] = o | A), a)),
                                    (q[(a + 8) >> 2] = w),
                                    (q[(o + 12) >> 2] = w),
                                    (q[(w + 12) >> 2] = a),
                                    (q[(w + 8) >> 2] = o);
                                  break x;
                                }
                                if (
                                  ((q[(w + 16) >> 2] = 0),
                                  (a = q[(w + 20) >> 2] = 0),
                                  (A = B >>> 8) &&
                                    ((a = 31),
                                    16777215 < B >>> 0 ||
                                      (a =
                                        (28 +
                                          (((a =
                                            ((((E =
                                              (A <<= C =
                                                ((A + 1048320) >>> 16) & 8) <<
                                              (a =
                                                ((A + 520192) >>> 16) & 4)) <<
                                              (A =
                                                ((E + 245760) >>> 16) & 2)) >>>
                                              15) -
                                              (A | a | C)) |
                                            0) <<
                                            1) |
                                            ((B >>> (a + 21)) & 1))) |
                                        0)),
                                  (o =
                                    (7996 +
                                      ((q[((o = w) + 28) >> 2] = a) << 2)) |
                                    0),
                                  (A = q[1924]) & (C = 1 << a))
                                ) {
                                  for (
                                    a =
                                      B <<
                                      (31 == (0 | a)
                                        ? 0
                                        : (25 - (a >>> 1)) | 0),
                                      o = q[o >> 2];
                                    ;

                                  ) {
                                    if ((0 | B) == (-8 & q[((A = o) + 4) >> 2]))
                                      break A;
                                    if (
                                      ((o = a >>> 29),
                                      (a <<= 1),
                                      !(o =
                                        q[(16 + (C = (A + (4 & o)) | 0)) >> 2]))
                                    )
                                      break;
                                  }
                                  (q[(C + 16) >> 2] = w),
                                    (q[(w + 24) >> 2] = A);
                                } else
                                  (q[1924] = A | C),
                                    (q[o >> 2] = w),
                                    (q[(w + 24) >> 2] = o);
                                (q[(w + 12) >> 2] = w), (q[(w + 8) >> 2] = w);
                                break x;
                              }
                              (a = q[(w + 8) >> 2]),
                                (q[(a + 12) >> 2] = E),
                                (q[(w + 8) >> 2] = E),
                                (q[(E + 24) >> 2] = 0),
                                (q[(E + 12) >> 2] = w),
                                (q[(E + 8) >> 2] = a);
                            }
                            a = (W + 8) | 0;
                            break a;
                          }
                          (a = q[(A + 8) >> 2]),
                            (q[(a + 12) >> 2] = w),
                            (q[(A + 8) >> 2] = w),
                            (q[(w + 24) >> 2] = 0),
                            (q[(w + 12) >> 2] = A),
                            (q[(w + 8) >> 2] = a);
                        }
                        if (!((a = q[1926]) >>> 0 <= D >>> 0)) {
                          (o = (a - D) | 0),
                            (q[1926] = o),
                            (w = ((a = q[1929]) + D) | 0),
                            (q[1929] = w),
                            (q[(w + 4) >> 2] = 1 | o),
                            (q[(a + 4) >> 2] = 3 | D),
                            (a = (a + 8) | 0);
                          break a;
                        }
                      }
                      (q[1906] = 48), (a = 0);
                      break a;
                    }
                    Q: if (E) {
                      a = q[(B + 28) >> 2];
                      R: {
                        if (q[(A = (7996 + (a << 2)) | 0) >> 2] == (0 | B)) {
                          if ((q[A >> 2] = o)) break R;
                          (V = jc(a) & V), (q[1924] = V);
                          break Q;
                        }
                        if (
                          !(q[
                            (E + (q[(E + 16) >> 2] == (0 | B) ? 16 : 20)) >> 2
                          ] = o)
                        )
                          break Q;
                      }
                      (q[(o + 24) >> 2] = E),
                        (a = q[(B + 16) >> 2]) &&
                          ((q[(o + 16) >> 2] = a), (q[(a + 24) >> 2] = o)),
                        (a = q[(B + 20) >> 2]) &&
                          ((q[(o + 20) >> 2] = a), (q[(a + 24) >> 2] = o));
                    }
                    S: if (w >>> 0 <= 15)
                      (a = (w + D) | 0),
                        (q[(B + 4) >> 2] = 3 | a),
                        (q[(4 + (a = (a + B) | 0)) >> 2] = 1 | q[(a + 4) >> 2]);
                    else if (
                      ((q[(B + 4) >> 2] = 3 | D),
                      (q[(4 + (A = (B + D) | 0)) >> 2] = 1 | w),
                      (q[(w + A) >> 2] = w) >>> 0 <= 255)
                    )
                      (a = (7732 + ((o = w >>> 3) << 3)) | 0),
                        (o =
                          (w = q[1923]) & (o = 1 << o)
                            ? q[(a + 8) >> 2]
                            : ((q[1923] = o | w), a)),
                        (q[(a + 8) >> 2] = A),
                        (q[(o + 12) >> 2] = A),
                        (q[(A + 12) >> 2] = a),
                        (q[(A + 8) >> 2] = o);
                    else {
                      (a = 0),
                        (D = w >>> 8) &&
                          ((a = 31),
                          16777215 < w >>> 0 ||
                            (a =
                              (28 +
                                (((a =
                                  ((((E =
                                    (D <<= C = ((D + 1048320) >>> 16) & 8) <<
                                    (a = ((D + 520192) >>> 16) & 4)) <<
                                    (D = ((E + 245760) >>> 16) & 2)) >>>
                                    15) -
                                    (D | a | C)) |
                                  0) <<
                                  1) |
                                  ((w >>> (a + 21)) & 1))) |
                              0)),
                        (q[((o = A) + 28) >> 2] = a),
                        (q[(A + 16) >> 2] = 0),
                        (o = (7996 + (a << 2)) | (q[(A + 20) >> 2] = 0));
                      V: {
                        if ((D = 1 << a) & V) {
                          for (
                            a = w << (31 == (0 | a) ? 0 : (25 - (a >>> 1)) | 0),
                              D = q[o >> 2];
                            ;

                          ) {
                            if ((-8 & q[((o = D) + 4) >> 2]) == (0 | w))
                              break V;
                            if (
                              ((D = a >>> 29),
                              (a <<= 1),
                              !(D = q[(16 + (C = ((4 & D) + o) | 0)) >> 2]))
                            )
                              break;
                          }
                          q[(C + 16) >> 2] = A;
                        } else (q[1924] = D | V), (q[o >> 2] = A);
                        (q[(A + 24) >> 2] = o),
                          (q[(A + 12) >> 2] = A),
                          (q[(A + 8) >> 2] = A);
                        break S;
                      }
                      (a = q[(o + 8) >> 2]),
                        (q[(a + 12) >> 2] = A),
                        (q[(o + 8) >> 2] = A),
                        (q[(A + 24) >> 2] = 0),
                        (q[(A + 12) >> 2] = o),
                        (q[(A + 8) >> 2] = a);
                    }
                    a = (B + 8) | 0;
                    break a;
                  }
                  X: if (W) {
                    a = q[(o + 28) >> 2];
                    Y: {
                      if (q[(w = (7996 + (a << 2)) | 0) >> 2] == (0 | o)) {
                        if ((q[w >> 2] = B)) break Y;
                        (Z = 7696), (_ = jc(a) & X), (q[Z >> 2] = _);
                        break X;
                      }
                      if (
                        !(q[
                          (W + (q[(W + 16) >> 2] == (0 | o) ? 16 : 20)) >> 2
                        ] = B)
                      )
                        break X;
                    }
                    (q[(B + 24) >> 2] = W),
                      (a = q[(o + 16) >> 2]) &&
                        ((q[(B + 16) >> 2] = a), (q[(a + 24) >> 2] = B)),
                      (a = q[(o + 20) >> 2]) &&
                        ((q[(B + 20) >> 2] = a), (q[(a + 24) >> 2] = B));
                  }
                  A >>> 0 <= 15
                    ? ((a = (A + D) | 0),
                      (q[(o + 4) >> 2] = 3 | a),
                      (q[(4 + (a = (a + o) | 0)) >> 2] = 1 | q[(a + 4) >> 2]))
                    : ((q[(o + 4) >> 2] = 3 | D),
                      (q[(4 + (D = (o + D) | 0)) >> 2] = 1 | A),
                      (q[(A + D) >> 2] = A),
                      V &&
                        ((a = (7732 + ((w = V >>> 3) << 3)) | 0),
                        (B = q[1928]),
                        (w =
                          (w = 1 << w) & C
                            ? q[(a + 8) >> 2]
                            : ((q[1923] = w | C), a)),
                        (q[(a + 8) >> 2] = B),
                        (q[(w + 12) >> 2] = B),
                        (q[(B + 12) >> 2] = a),
                        (q[(B + 8) >> 2] = w)),
                      (q[1928] = D),
                      (q[1925] = A)),
                    (a = (o + 8) | 0);
                }
                return (L = (16 + Y) | 0), a;
              }
              function ka(a) {
                var q = 0,
                  t = x(0),
                  L = 0,
                  $ = 0,
                  aa = x(0),
                  ba = x(0);
                j(a);
                a: {
                  if (1283457024 <= (q = 2147483647 & ($ = e(0))) >>> 0) {
                    if (2139095040 < q >>> 0) break a;
                    return x(
                      (0 | $) < 0 ? -1.570796251296997 : 1.570796251296997
                    );
                  }
                  b: {
                    if (q >>> 0 <= 1054867455) {
                      if (((L = -1), 964689920 <= q >>> 0)) break b;
                      break a;
                    }
                    if (((a = x(y(a))), q >>> 0 <= 1066926079)) {
                      if (q >>> 0 <= 1060110335) {
                        (a = x(x(x(a + a) + x(-1)) / x(a + x(2)))), (L = 0);
                        break b;
                      }
                      (a = x(x(a + x(-1)) / x(a + x(1)))), (L = 1);
                    } else
                      L =
                        q >>> 0 <= 1075576831
                          ? ((a = x(x(a + x(-1.5)) / x(x(a * x(1.5)) + x(1)))),
                            2)
                          : ((a = x(x(-1) / a)), 3);
                  }
                  if (
                    ((q = L),
                    (aa = x(a * a)),
                    (t = x(aa * aa)),
                    (ba = x(
                      t *
                        x(
                          x(t * x(-0.106480173766613)) + x(-0.19999158382415771)
                        )
                    )),
                    (t = x(
                      aa *
                        x(
                          x(
                            t *
                              x(
                                x(t * x(0.06168760731816292)) +
                                  x(0.14253635704517365)
                              )
                          ) + x(0.333333283662796)
                        )
                    )),
                    (0 | q) <= -1)
                  )
                    return x(a - x(a * x(ba + t)));
                  (a = x(
                    u[(6080 + (q <<= 2)) >> 2] -
                      x(x(x(a * x(ba + t)) - u[(q + 6096) >> 2]) - a)
                  )),
                    (a = (0 | $) < 0 ? x(-a) : a);
                }
                return a;
              }
              function la(a, ca) {
                var fa,
                  da = 0,
                  ea = 0,
                  ga = 0,
                  ha = 0,
                  ia = 0;
                (L = fa = (L - 16) | 0), j(a);
                a: if ((da = 2147483647 & (ga = e(0))) >>> 0 <= 1305022426) {
                  if (
                    ((ea =
                      0.6366197723675814 * (ha = +a) +
                      6755399441055744 -
                      6755399441055744),
                    (v[ca >> 3] =
                      ha +
                      -1.5707963109016418 * ea +
                      -1.5893254773528196e-8 * ea),
                    y(ea) < 2147483648)
                  ) {
                    da = ~~ea;
                    break a;
                  }
                  da = -2147483648;
                } else
                  2139095040 <= da >>> 0
                    ? ((v[ca >> 3] = x(a - a)), (da = 0))
                    : ((da = (((ia = da) >>> 23) - 150) | 0),
                      (v[(8 + fa) >> 3] = (f(0, (ia - (da << 23)) | 0), k())),
                      (da = Da((8 + fa) | 0, fa, da)),
                      (ea = v[fa >> 3]),
                      (0 | ga) <= -1
                        ? ((v[ca >> 3] = -ea), (da = (0 - da) | 0))
                        : (v[ca >> 3] = ea));
                return (L = (16 + fa) | 0), da;
              }
              function ma(a) {
                var ca = 0,
                  ja = 0,
                  ka = 0,
                  la = 0,
                  ma = 0;
                (ka = 4), (ja = 1082);
                a: if ((ca = r[0 | a])) {
                  for (
                    ;
                    !(
                      (0 | (la = r[0 | ja])) != (0 | ca) ||
                      !(ka = (ka + -1) | 0) | !la
                    );

                  )
                    if (
                      ((ja = (ja + 1) | 0),
                      (ca = r[(a + 1) | 0]),
                      (a = (a + 1) | 0),
                      !ca)
                    )
                      break a;
                  ma = ca;
                }
                return ((255 & ma) - r[0 | ja]) | 0;
              }
              function oa(a, na) {
                return a
                  ? (function (a, Ub) {
                      a: {
                        if (a) {
                          if (Ub >>> 0 <= 127) break a;
                          if (q[q[1625] >> 2]) {
                            if (Ub >>> 0 <= 2047)
                              return (
                                (o[(a + 1) | 0] = (63 & Ub) | 128),
                                (o[0 | a] = (Ub >>> 6) | 192),
                                2
                              );
                            if (!(57344 != (-8192 & Ub) && 55296 <= Ub >>> 0))
                              return (
                                (o[(a + 2) | 0] = (63 & Ub) | 128),
                                (o[0 | a] = (Ub >>> 12) | 224),
                                (o[(a + 1) | 0] = ((Ub >>> 6) & 63) | 128),
                                3
                              );
                            if ((Ub + -65536) >>> 0 <= 1048575)
                              return (
                                (o[(a + 3) | 0] = (63 & Ub) | 128),
                                (o[0 | a] = (Ub >>> 18) | 240),
                                (o[(a + 2) | 0] = ((Ub >>> 6) & 63) | 128),
                                (o[(a + 1) | 0] = ((Ub >>> 12) & 63) | 128),
                                4
                              );
                          } else if (57216 == (-128 & Ub)) break a;
                          (q[1906] = 25), (a = -1);
                        } else a = 1;
                        return a;
                      }
                      return (o[0 | a] = Ub), 1;
                    })(a, na)
                  : 0;
              }
              function pa(a, na, oa, sa) {
                a: {
                  if (!(20 < na >>> 0 || 9 < (na = (na + -9) | 0) >>> 0)) {
                    switch ((na - 1) | 0) {
                      default:
                        return (
                          (na = q[oa >> 2]),
                          (q[oa >> 2] = na + 4),
                          void (q[a >> 2] = q[na >> 2])
                        );
                      case 0:
                        return (
                          (na = q[oa >> 2]),
                          (q[oa >> 2] = na + 4),
                          (na = q[na >> 2]),
                          (q[a >> 2] = na),
                          void (q[(a + 4) >> 2] = na >> 31)
                        );
                      case 1:
                        return (
                          (na = q[oa >> 2]),
                          (q[oa >> 2] = na + 4),
                          (q[a >> 2] = q[na >> 2]),
                          void (q[(a + 4) >> 2] = 0)
                        );
                      case 3:
                        return (
                          (na = q[oa >> 2]),
                          (q[oa >> 2] = na + 4),
                          (na = p[na >> 1]),
                          (q[a >> 2] = na),
                          void (q[(a + 4) >> 2] = na >> 31)
                        );
                      case 4:
                        return (
                          (na = q[oa >> 2]),
                          (q[oa >> 2] = na + 4),
                          (q[a >> 2] = s[na >> 1]),
                          void (q[(a + 4) >> 2] = 0)
                        );
                      case 5:
                        return (
                          (na = q[oa >> 2]),
                          (q[oa >> 2] = na + 4),
                          (na = o[0 | na]),
                          (q[a >> 2] = na),
                          void (q[(a + 4) >> 2] = na >> 31)
                        );
                      case 6:
                        return (
                          (na = q[oa >> 2]),
                          (q[oa >> 2] = na + 4),
                          (q[a >> 2] = r[0 | na]),
                          void (q[(a + 4) >> 2] = 0)
                        );
                      case 2:
                      case 7:
                        break a;
                      case 8:
                    }
                    n[sa](a, oa);
                  }
                  return;
                }
                (na = (q[oa >> 2] + 7) & -8),
                  (q[oa >> 2] = na + 8),
                  (oa = q[(na + 4) >> 2]),
                  (q[a >> 2] = q[na >> 2]),
                  (q[(a + 4) >> 2] = oa);
              }
              function qa(a) {
                var na = 0,
                  oa = 0,
                  sa = 0;
                if (ga(o[q[a >> 2]]))
                  for (
                    ;
                    (na = q[a >> 2]),
                      (sa = o[0 | na]),
                      (q[a >> 2] = na + 1),
                      (oa = (((w(oa, 10) + sa) | 0) - 48) | 0),
                      ga(o[(na + 1) | 0]);

                  );
                return oa;
              }
              function ra(a, ta, ua, va, wa) {
                var xa,
                  ya = 0,
                  za = 0;
                (q[(204 + (L = xa = (L - 208) | 0)) >> 2] = ua),
                  ba((160 + xa) | (ua = 0), 0, 40),
                  (q[(200 + xa) >> 2] = q[(204 + xa) >> 2]),
                  (0 |
                    ia(
                      0,
                      ta,
                      (200 + xa) | 0,
                      (80 + xa) | 0,
                      (160 + xa) | 0,
                      va,
                      wa
                    )) <
                    0 ||
                    ((ua = 0 <= q[(a + 76) >> 2] ? 1 : ua),
                    (ya = q[a >> 2]),
                    o[(a + 74) | 0] <= 0 && (q[a >> 2] = -33 & ya),
                    (za = 32 & ya),
                    q[(a + 48) >> 2]
                      ? ia(
                          a,
                          ta,
                          (200 + xa) | 0,
                          (80 + xa) | 0,
                          (160 + xa) | 0,
                          va,
                          wa
                        )
                      : ((q[(a + 48) >> 2] = 80),
                        (q[(a + 16) >> 2] = 80 + xa),
                        (q[(a + 28) >> 2] = xa),
                        (q[(a + 20) >> 2] = xa),
                        (ya = q[(a + 44) >> 2]),
                        ia(
                          a,
                          ta,
                          (200 + (q[(a + 44) >> 2] = xa)) | 0,
                          (80 + xa) | 0,
                          (160 + xa) | 0,
                          va,
                          wa
                        ),
                        ya &&
                          (n[q[(a + 36) >> 2]](a, 0, 0),
                          (q[(a + 48) >> 2] = 0),
                          (q[(a + 44) >> 2] = ya),
                          (q[(a + 28) >> 2] = 0),
                          (q[(a + 16) >> 2] = 0),
                          (q[(a + 20) >> 2] = 0))),
                    (q[a >> 2] = q[a >> 2] | za)),
                  (L = (208 + xa) | 0);
              }
              function sa(a, ta, ua) {
                var va,
                  wa = 0;
                fa((8 + (L = va = (L - 160) | 0)) | 0, 2536, 144),
                  (q[(52 + va) >> 2] = a),
                  (wa =
                    (wa = (-2 - (q[(28 + va) >> 2] = a)) | 0) >>> 0 < 256
                      ? wa
                      : 256),
                  (a = (a + (q[(56 + va) >> 2] = wa)) | 0),
                  (q[(36 + va) >> 2] = a),
                  (q[(24 + va) >> 2] = a),
                  ra((8 + va) | 0, ta, ua, 15, 16),
                  wa &&
                    ((a = q[(28 + va) >> 2]),
                    (o[(a - ((0 | a) == q[(24 + va) >> 2])) | 0] = 0)),
                  (L = (160 + va) | 0);
              }
              function ta(a) {
                var ta = 0,
                  ua = 0,
                  Aa = 0,
                  Ba = 0,
                  Ca = 0,
                  Da = 0,
                  Ea = 0,
                  Fa = x(0),
                  Ga = 0,
                  Ha = 0,
                  Ia = 0,
                  Ja = 0,
                  Ka = 0,
                  La = 0,
                  Ma = 0,
                  Na = x(0),
                  Oa = 0,
                  Pa = x(0),
                  Qa = 0,
                  Ra = 0,
                  Sa = x(0),
                  Ta = x(0),
                  Ua = x(0),
                  Va = 0,
                  Wa = 0,
                  Xa = 0,
                  Ya = 0,
                  Za = 0,
                  _a = 0,
                  $a = 0;
                if (
                  (q[(a + 256) >> 2] &&
                    ((ta = q[(a + 200) >> 2] << 2),
                    fa(q[(a + 280) >> 2], q[(a + 264) >> 2], ta),
                    fa(q[(a + 284) >> 2], q[(a + 268) >> 2], ta),
                    fa(q[(a + 288) >> 2], q[(a + 276) >> 2], ta)),
                  !((0 | (Ca = q[(a + 292) >> 2])) < 1))
                ) {
                  for (
                    Ga = ((Ea = q[(a + 296) >> 2]) + w(Ca, 40)) | 0,
                      Aa = q[(a + 300) >> 2],
                      ta = Ea;
                    (Ua = u[Aa >> 2]),
                      (Pa = u[(ta + 32) >> 2]) ==
                      (Fa = (ua = q[(ta + 12) >> 2])
                        ? ((Sa = u[ta >> 2]),
                          (Fa = x(Ua - Sa)),
                          (Ua = u[(ta + 8) >> 2]),
                          (Na = x(Fa / Ua)),
                          (Fa = x(C(Na))),
                          (Ba = x(y(Fa)) < x(2147483648) ? ~~Fa : -2147483648),
                          x(Sa + x(Ua * x(Na - x(0 | Ba)))))
                        : ((Na = u[ta >> 2]),
                          (Fa = u[(ta + 4) >> 2]),
                          Ua < Na ? Na : Fa < Ua ? Fa : Ua))
                        ? (q[(ta + 36) >> 2] = 0)
                        : ((u[(ta + 32) >> 2] = Fa), (q[(ta + 36) >> 2] = 1)),
                      ua || (u[Aa >> 2] = Fa),
                      (Aa = (Aa + 4) | 0),
                      (ta = (ta + 40) | 0) >>> 0 < Ga >>> 0;

                  );
                  if (!((0 | Ca) < 1))
                    for (Oa = q[(a + 308) >> 2], Ma = q[(a + 376) >> 2]; ; ) {
                      e: if (!((0 | (ua = q[(Ea + 28) >> 2])) < 1))
                        if (
                          ((Ha =
                            ((ta = (Oa + w(q[(Ea + 24) >> 2], 28)) | 0) +
                              w(ua, 28)) |
                            0),
                          (Ua = u[(Ea + 20) >> 2]),
                          (Ta = u[(Ea + 16) >> 2]),
                          (Pa = u[(Ea + 32) >> 2]),
                          Ma)
                        )
                          for (;;) {
                            Sa = x((Ca = 0));
                            l: {
                              m: {
                                n: {
                                  if ((0 | (Da = q[ta >> 2])) < 1) Aa = Ba = 0;
                                  else if (
                                    ((ua = q[(ta + 4) >> 2]),
                                    (Na = u[ua >> 2]),
                                    (Fa = x(Na - Ta)),
                                    1 != (0 | Da))
                                  ) {
                                    if (Pa < Fa) {
                                      (Ba = 1), (Aa = 0);
                                      break m;
                                    }
                                    if (((Ba = 0), Pa < x(Ta + Na))) Aa = 0;
                                    else {
                                      if (
                                        ((Aa = 1),
                                        (Fa = u[(ua + 4) >> 2]),
                                        !(Pa < x(Ta + Fa)))
                                      )
                                        for (;;) {
                                          if (
                                            (0 | Da) ==
                                            (0 | (Aa = (Aa + 1) | 0))
                                          )
                                            break n;
                                          if (
                                            ((Na = Fa),
                                            (Fa = u[(ua + (Aa << 2)) >> 2]),
                                            Pa < x(Ta + Fa))
                                          )
                                            break;
                                        }
                                      x(Fa - Ta) < Pa ||
                                        ((Aa = (Aa + -1) | 0),
                                        (Fa = x(Fa - Na)) < Ua ||
                                          (Sa = x(x(Pa - Na) / Fa)));
                                    }
                                  } else
                                    (Ba =
                                      ((Pa < x(Ta + Na)) ^ 1) |
                                      ((Fa < Pa) ^ 1)),
                                      (Aa = 0);
                                  if (Ba) break m;
                                  if (((La = Da = 1), !q[(ta + 16) >> 2]))
                                    break m;
                                  break l;
                                }
                                (Aa = (Da + -1) | 0), (Ba = 1);
                              }
                              (La =
                                ((Da = (Fa = u[(ta + 12) >> 2]) != Sa) &
                                  ((Sa == x(0)) | (Fa == x(0)))) |
                                (q[(ta + 8) >> 2] != (0 | Aa))),
                                (Ca = Ba);
                            }
                            if (
                              ((q[(ta + 20) >> 2] = La),
                              (q[(ta + 24) >> 2] = Da),
                              (u[(ta + 12) >> 2] = Sa),
                              (q[(ta + 16) >> 2] = Ca),
                              (q[(ta + 8) >> 2] = Aa),
                              !((ta = (ta + 28) | 0) >>> 0 < Ha >>> 0))
                            )
                              break;
                          }
                        else {
                          if (!q[(Ea + 36) >> 2])
                            for (;;)
                              if (
                                ((q[(ta + 20) >> 2] = 0),
                                !(
                                  (ta = (ta + 28) | (q[(ta + 24) >> 2] = 0)) >>>
                                    0 <
                                  Ha >>> 0
                                ))
                              )
                                break e;
                          for (;;) {
                            Sa = x((Ca = 0));
                            f: {
                              g: {
                                h: {
                                  i: if (
                                    !(((Ba = 0) | (Aa = q[(ua = ta) >> 2])) < 1)
                                  ) {
                                    if (
                                      ((Ja = q[(ta + 4) >> 2]),
                                      (Na = u[Ja >> 2]),
                                      (Fa = x(Na - Ta)),
                                      1 != (0 | Aa))
                                    ) {
                                      if (!(Pa < Fa)) {
                                        if (((Ba = 0), Pa < x(Ta + Na)))
                                          break i;
                                        Da = 1;
                                        j: if (
                                          ((Fa = u[(Ja + 4) >> 2]),
                                          !(Pa < x(Ta + Fa)))
                                        ) {
                                          for (
                                            Aa = (Aa + -1) | 0;
                                            (Na = Fa), (0 | Aa) != (0 | Da);

                                          )
                                            if (
                                              ((Fa =
                                                u[
                                                  (Ja +
                                                    ((Da = (Da + 1) | 0) <<
                                                      2)) >>
                                                    2
                                                ]),
                                              Pa < x(Ta + Fa))
                                            )
                                              break j;
                                          Ba = 1;
                                          break g;
                                        }
                                        if (((Ba = 0), x(Fa - Ta) < Pa)) {
                                          Aa = Da;
                                          break h;
                                        }
                                        if (
                                          ((Aa = (Da + -1) | 0),
                                          (Fa = x(Fa - Na)) < Ua)
                                        )
                                          break h;
                                        Sa = x(x(Pa - Na) / Fa);
                                        break h;
                                      }
                                      (Ba = 1), (Aa = 0);
                                      break g;
                                    }
                                    Ba =
                                      ((Pa < x(Ta + Na)) ^ 1) | ((Fa < Pa) ^ 1);
                                  }
                                  Aa = 0;
                                }
                                if (!Ba && ((Ja = Da = 1), q[(ta + 16) >> 2]))
                                  break f;
                              }
                              (Ca = Ba),
                                (Ja =
                                  ((Da = (Fa = u[(ta + 12) >> 2]) != Sa) &
                                    ((Sa == x(0)) | (Fa == x(0)))) |
                                  (q[(ta + 8) >> 2] != (0 | Aa)));
                            }
                            if (
                              ((q[(ua + 20) >> 2] = Ja),
                              (q[(ta + 24) >> 2] = Da),
                              (u[(ta + 12) >> 2] = Sa),
                              (q[(ta + 16) >> 2] = Ca),
                              (q[(ta + 8) >> 2] = Aa),
                              !((ta = (ta + 28) | 0) >>> 0 < Ha >>> 0))
                            )
                              break;
                          }
                        }
                      if (!((Ea = (Ea + 40) | 0) >>> 0 < Ga >>> 0)) break;
                    }
                }
                if (1 <= (0 | (ta = q[(a + 312) >> 2])))
                  for (
                    Ja = ((Ia = q[(a + 316) >> 2]) + w(ta, 36)) | 0,
                      Ga = q[(a + 376) >> 2];
                    ;

                  ) {
                    (Za =
                      ((ua = q[(Ia + 12) >> 2]) + ((Ea = q[Ia >> 2]) << 2)) |
                      0),
                      (Qa = q[(a + 308) >> 2]),
                      (ta = ua);
                    p: {
                      if (!(Ea = ((Da = Ba = Ca = 0) | Ea) < 1))
                        for (;;) {
                          if (
                            ((Aa = (Qa + w(q[ta >> 2], 28)) | 0),
                            q[(Aa + 16) >> 2])
                          ) {
                            (La = 1), (Ra = Ya = 0);
                            break p;
                          }
                          if (
                            ((Ca = Ca || q[(Aa + 24) >> 2]),
                            (Da = Da || q[(Aa + 20) >> 2]),
                            (Ba = ((u[(Aa + 12) >> 2] != x(0)) + Ba) | 0),
                            !((ta = (ta + 4) | 0) >>> 0 < Za >>> 0))
                          )
                            break;
                        }
                      if (
                        ((La = 0),
                        (Ra = Ga ? 1 : Da) | (Ya = Ga ? 1 : Ca) &&
                          ((Xa = 1 << Ba),
                          (q[(Ia + 8) >> 2] = Xa),
                          31 != (0 | Ba)))
                      ) {
                        for (
                          Ca = q[(Ia + 20) >> 2],
                            Aa =
                              ((ta = q[(Ia + 16) >> 2]) + (Da = Xa << 2)) | 0,
                            Va = ba(
                              (Ka = ta),
                              0,
                              (4 +
                                (((Ha = -1 ^ ta) +
                                  ((ta = (ta + 4) | 0) >>> 0 < Aa >>> 0
                                    ? Aa
                                    : ta)) |
                                  0)) &
                                -4
                            ),
                            Da = (Ca + Da) | 0,
                            ta = Ca;
                          (q[ta >> 2] = 1065353216),
                            (ta = (ta + 4) | 0) >>> 0 < Da >>> 0;

                        );
                        if (!Ea)
                          if (((Da = Ea = 1), Ba))
                            for (;;) {
                              if (
                                ((Ka = (Qa + w(q[ua >> 2], 28)) | 0),
                                (Ba = q[(Ka + 8) >> 2]),
                                (Ha = w(Ba, Ea)),
                                (ta = 0),
                                (Fa = u[(Ka + 12) >> 2]) == x(0))
                              )
                                for (
                                  ;
                                  (q[(Ba = (Va + (ta << 2)) | 0) >> 2] =
                                    Ha + q[Ba >> 2]),
                                    (0 | Xa) != (0 | (ta = (ta + 1) | 0));

                                );
                              else {
                                for (
                                  q[Va >> 2] = Ha + q[Va >> 2],
                                    u[Ca >> 2] = x(x(1) - Fa) * u[Ca >> 2],
                                    Oa = w((Ba + (ta = 1)) | 0, Ea);
                                  (Fa = u[(Ka + 12) >> 2]),
                                    (Aa = ta & Da),
                                    (q[(Ba = ((Ma = ta << 2) + Va) | 0) >> 2] =
                                      q[Ba >> 2] + (Aa ? Oa : Ha)),
                                    (u[(Ba = (Ca + Ma) | 0) >> 2] =
                                      (Aa ? Fa : x(x(1) - Fa)) * u[Ba >> 2]),
                                    (0 | Xa) != (0 | (ta = (ta + 1) | 0));

                                );
                                Da <<= 1;
                              }
                              if (
                                ((Ea = w(q[Ka >> 2], Ea)),
                                !((ua = (ua + 4) | 0) >>> 0 < Za >>> 0))
                              )
                                break;
                            }
                          else
                            for (;;) {
                              if (
                                ((Aa = (Qa + w(q[ua >> 2], 28)) | 0),
                                (Da = w(q[(Aa + 8) >> 2], Ea)),
                                (ta = 0),
                                (Fa = u[(Aa + 12) >> 2]) == x(0))
                              )
                                for (
                                  ;
                                  (q[(Ba = (Va + (ta << 2)) | 0) >> 2] =
                                    Da + q[Ba >> 2]),
                                    (0 | Xa) != (0 | (ta = (ta + 1) | 0));

                                );
                              else
                                (q[Va >> 2] = Da + q[Va >> 2]),
                                  (u[Ca >> 2] = x(x(1) - Fa) * u[Ca >> 2]);
                              if (
                                ((Ea = w(q[Aa >> 2], Ea)),
                                !((ua = (ua + 4) | 0) >>> 0 < Za >>> 0))
                              )
                                break;
                            }
                      }
                    }
                    if (
                      ((q[(Ia + 32) >> 2] = La),
                      (q[(Ia + 24) >> 2] = Ra),
                      (q[(Ia + 28) >> 2] = Ya),
                      !((Ia = (Ia + 36) | 0) >>> 0 < Ja >>> 0))
                    )
                      break;
                  }
                if (!((0 | (Ba = q[(a + 4) >> 2])) <= 0)) {
                  for (
                    ua = ((ta = q[(a + 52) >> 2]) + (Ba << 2)) | 0;
                    (Fa = u[ta >> 2]),
                      (u[ta >> 2] = Fa < x(0) ? x(0) : x(A(Fa, x(1)))),
                      (ta = (ta + 4) | 0) >>> 0 < ua >>> 0;

                  );
                  if (!((0 | Ba) < 1)) {
                    for (
                      Ea = ((ta = q[(a + 8) >> 2]) + (Ba << 3)) | 0,
                        Ha = q[(a + 316) >> 2],
                        Ca = q[(a + 40) >> 2],
                        Aa = Da = q[(a + 36) >> 2];
                      (Ba = 0),
                        q[(ta + 4) >> 2] &&
                          ((ua = q[ta >> 2]),
                          (!q[(Da + (ua << 2)) >> 2] && -1 != (0 | ua)) ||
                            (Ba =
                              !q[(32 + ((Ha + w(q[Ca >> 2], 36)) | 0)) >> 2])),
                        (q[Aa >> 2] = Ba),
                        (Ca = (Ca + 4) | 0),
                        (Aa = (Aa + 4) | 0),
                        (ta = (ta + 8) | 0) >>> 0 < Ea >>> 0;

                    );
                    if (!((0 | (Ga = q[(a + 4) >> 2])) < 1))
                      for (
                        Ja = q[a >> 2],
                          Oa = q[(Ja + 724) >> 2],
                          ua = q[(a + 40) >> 2],
                          Da = Ea = 0;
                        ;

                      ) {
                        if (
                          ((Ka = (Ha + w(q[ua >> 2], 36)) | 0),
                          (q[(Ka + 28) >> 2] || q[(Ka + 24) >> 2]) &&
                            ((q[((Ca = Ea << 2) + q[(a + 16) >> 2]) >> 2] =
                              q[(Ka + 8) >> 2]),
                            q[(Ka + 24) >> 2] &&
                              !((0 | (Ba = q[(Ka + 8) >> 2])) < 1)))
                        )
                          for (
                            Ma = ((ta = q[(Ka + 16) >> 2]) + (Ba << 2)) | 0,
                              Ca = q[(Ca + Oa) >> 2],
                              Aa = (q[(a + 28) >> 2] + (Da << 2)) | 0,
                              Ba = q[(Ja + 936) >> 2];
                            (q[Aa >> 2] =
                              q[(Ba + ((Ca + q[ta >> 2]) << 2)) >> 2]),
                              (Aa = (Aa + 4) | 0),
                              (ta = (ta + 4) | 0) >>> 0 < Ma >>> 0;

                          );
                        if (
                          q[(Ka + 28) >> 2] &&
                          !((0 | (Ba = q[(Ka + 8) >> 2])) < 1)
                        )
                          for (
                            Ba = ((ta = q[(Ka + 20) >> 2]) + (Ba << 2)) | 0,
                              Aa = (q[(a + 20) >> 2] + (Da << 2)) | 0;
                            (q[Aa >> 2] = q[ta >> 2]),
                              (Aa = (Aa + 4) | 0),
                              (ta = (ta + 4) | 0) >>> 0 < Ba >>> 0;

                          );
                        if (
                          ((ua = (ua + 4) | 0),
                          (Da = (q[(Ka + 4) >> 2] + Da) | 0),
                          (0 | Ga) == (0 | (Ea = (Ea + 1) | 0)))
                        )
                          break;
                      }
                  }
                }
                if (
                  (n[q[1644]](a),
                  (_a = q[(a + 316) >> 2]),
                  1 <= (0 | (ua = q[(a + 56) >> 2])))
                ) {
                  for (
                    Ga = ((ta = q[(a + 60) >> 2]) + (ua << 5)) | 0,
                      Ja = q[(a + 176) >> 2],
                      Oa = q[(a + 172) >> 2],
                      Ma = q[(a + 36) >> 2],
                      Ba = q[(a + 180) >> 2],
                      Ca = Aa = q[(a + 168) >> 2];
                    ;

                  ) {
                    (Da = Ca),
                      (ua = 0),
                      q[(ta + 28) >> 2] &&
                        ((-1 != (0 | (Ea = q[ta >> 2])) &&
                          ((ua = 0), !q[(Ma + (Ea << 2)) >> 2])) ||
                          (-1 != (0 | (Ea = q[(ta + 4) >> 2])) &&
                            ((ua = 0), !q[(Aa + (Ea << 2)) >> 2])) ||
                          (ua =
                            !q[(32 + ((w(q[Ba >> 2], 36) + _a) | 0)) >> 2])),
                      (q[Da >> 2] = ua);
                    x: if ((Da = q[(ta + 8) >> 2]) >>> 0 <= 1) {
                      if (Da - 1) {
                        q[(Oa + (q[(ta + 12) >> 2] << 2)) >> 2] = ua;
                        break x;
                      }
                      q[(Ja + (q[(ta + 12) >> 2] << 2)) >> 2] = ua;
                    } else Y(4, 1473, 0);
                    if (
                      ((Ba = (Ba + 4) | 0),
                      (Ca = (Ca + 4) | 0),
                      !((ta = (ta + 32) | 0) >>> 0 < Ga >>> 0))
                    )
                      break;
                  }
                  _a = q[(a + 316) >> 2];
                }
                if (((Ea = q[a >> 2]), 1 <= (0 | (Ga = q[(a - -64) >> 2])))) {
                  for (
                    Ja = q[(Ea + 988) >> 2],
                      Oa = q[(Ea + 784) >> 2],
                      La = q[(a + 184) >> 2],
                      Ia = ua = 0;
                    ;

                  ) {
                    if (
                      ((Ha = (w(q[La >> 2], 36) + _a) | 0),
                      (q[(Ha + 28) >> 2] || q[(Ha + 24) >> 2]) &&
                        ((q[((Ca = ua << 2) + q[(a + 84) >> 2]) >> 2] =
                          q[(Ha + 8) >> 2]),
                        q[(Ha + 24) >> 2] &&
                          !((0 | (Ba = q[(Ha + 8) >> 2])) < 1)))
                    )
                      for (
                        Ma = ((ta = q[(Ha + 16) >> 2]) + (Ba << 2)) | 0,
                          Da = q[(Ca + Oa) >> 2],
                          Aa = ((Ba = Ia << 2) + q[(a + 100) >> 2]) | 0,
                          Ca = (Ba + q[(a + 96) >> 2]) | 0;
                        (Ba = (Da + q[ta >> 2]) << 2),
                          (q[Aa >> 2] =
                            Ja + (q[(Ba + q[(Ea + 944) >> 2]) >> 2] << 2)),
                          (q[Ca >> 2] = q[(Ba + q[(Ea + 940) >> 2]) >> 2]),
                          (Ca = (Ca + 4) | 0),
                          (Aa = (Aa + 4) | 0),
                          (ta = (ta + 4) | 0) >>> 0 < Ma >>> 0;

                      );
                    if (
                      q[(Ha + 28) >> 2] &&
                      !((0 | (Ba = q[(Ha + 8) >> 2])) < 1)
                    )
                      for (
                        Ba = ((ta = q[(Ha + 20) >> 2]) + (Ba << 2)) | 0,
                          Aa = (q[(a + 88) >> 2] + (Ia << 2)) | 0;
                        (q[Aa >> 2] = q[ta >> 2]),
                          (Aa = (Aa + 4) | 0),
                          (ta = (ta + 4) | 0) >>> 0 < Ba >>> 0;

                      );
                    if (
                      ((La = (La + 4) | 0),
                      (Ia = (q[(Ha + 4) >> 2] + Ia) | 0),
                      (0 | Ga) == (0 | (ua = (ua + 1) | 0)))
                    )
                      break;
                  }
                  (_a = q[(a + 316) >> 2]), (Ea = q[a >> 2]);
                }
                if (1 <= (0 | (Xa = q[(a + 72) >> 2])))
                  for (
                    Za = q[(a + 76) >> 2],
                      Qa = q[(Ea + 808) >> 2],
                      Ya = q[(a + 188) >> 2],
                      Ra = Ia = 0;
                    ;

                  ) {
                    if (
                      ((Wa = (w(q[Ya >> 2], 36) + _a) | 0),
                      (q[(Wa + 28) >> 2] || q[(Wa + 24) >> 2]) &&
                        ((q[((ua = Ia << 2) + q[(a + 116) >> 2]) >> 2] =
                          q[(Wa + 8) >> 2]),
                        q[(Wa + 24) >> 2]))
                    ) {
                      if (
                        ((ta = q[(Wa + 16) >> 2]),
                        (Va = q[(ua + Qa) >> 2]),
                        1 <= (0 | (ua = q[(Wa + 8) >> 2])))
                      )
                        for (
                          Ka = (ta + (ua << 2)) | 0,
                            Aa = ((ua = Ra << 2) + q[(a + 132) >> 2]) | 0,
                            Ca = (ua + q[(a + 136) >> 2]) | 0,
                            Ba = (ua + q[(a + 140) >> 2]) | 0,
                            Da = (ua + q[(a + 144) >> 2]) | 0,
                            La = (ua + q[(a + 128) >> 2]) | 0,
                            Ha = q[(Ea + 948) >> 2],
                            Ga = q[(Ea + 964) >> 2],
                            Ja = q[(Ea + 960) >> 2],
                            Oa = q[(Ea + 956) >> 2],
                            Ma = q[(Ea + 952) >> 2],
                            ua = ta;
                          ($a = (Va + q[ua >> 2]) << 2),
                            (q[Aa >> 2] = q[($a + Ma) >> 2]),
                            (q[Ca >> 2] = q[(Oa + $a) >> 2]),
                            (q[Ba >> 2] = q[(Ja + $a) >> 2]),
                            (q[Da >> 2] = q[(Ga + $a) >> 2]),
                            (q[La >> 2] = q[(Ha + $a) >> 2]),
                            (La = (La + 4) | 0),
                            (Da = (Da + 4) | 0),
                            (Ba = (Ba + 4) | 0),
                            (Ca = (Ca + 4) | 0),
                            (Aa = (Aa + 4) | 0),
                            (ua = (ua + 4) | 0) >>> 0 < Ka >>> 0;

                        );
                      (ua = (Za + (Ia << 5)) | 0),
                        (ta = (Va + q[ta >> 2]) << 2),
                        (q[(ua + 24) >> 2] = q[(ta + q[(Ea + 968) >> 2]) >> 2]),
                        (q[(ua + 28) >> 2] = q[(ta + q[(Ea + 972) >> 2]) >> 2]);
                    }
                    if (
                      q[(Wa + 28) >> 2] &&
                      !((0 | (ua = q[(Wa + 8) >> 2])) < 1)
                    )
                      for (
                        ua = ((ta = q[(Wa + 20) >> 2]) + (ua << 2)) | 0,
                          Aa = (q[(a + 120) >> 2] + (Ra << 2)) | 0;
                        (q[Aa >> 2] = q[ta >> 2]),
                          (Aa = (Aa + 4) | 0),
                          (ta = (ta + 4) | 0) >>> 0 < ua >>> 0;

                      );
                    if (
                      ((Ya = (Ya + 4) | 0),
                      (Ra = (q[(Wa + 4) >> 2] + Ra) | 0),
                      (0 | Xa) == (0 | (Ia = (Ia + 1) | 0)))
                    )
                      break;
                  }
                if (
                  (n[q[1642]](a),
                  n[q[1645]](a),
                  !((0 | (ua = q[(a + 200) >> 2])) < 1))
                ) {
                  for (
                    Ma = ((ta = q[(a + 204) >> 2]) + (ua << 4)) | 0,
                      Ea = q[(a + 168) >> 2],
                      Da = q[(a + 36) >> 2],
                      Ha = q[(a + 316) >> 2],
                      Ca = q[(a + 252) >> 2],
                      Aa = q[(a + 248) >> 2];
                    (Ba = 0),
                      q[(ta + 8) >> 2] &&
                        ((ua = q[ta >> 2]),
                        (!q[(Da + (ua << 2)) >> 2] && -1 != (0 | ua)) ||
                          ((ua = q[(ta + 4) >> 2]),
                          (!q[(Ea + (ua << 2)) >> 2] && -1 != (0 | ua)) ||
                            (Ba =
                              !q[(32 + ((Ha + w(q[Ca >> 2], 36)) | 0)) >> 2]))),
                      (q[Aa >> 2] = Ba),
                      (Ca = (Ca + 4) | 0),
                      (Aa = (Aa + 4) | 0),
                      (ta = (ta + 16) | 0) >>> 0 < Ma >>> 0;

                  );
                  if (!((0 | (Ja = q[(a + 200) >> 2])) < 1))
                    for (
                      Ka = q[a >> 2],
                        Oa = q[(Ka + 988) >> 2],
                        Ma = q[(Ka + 844) >> 2],
                        ua = q[(a + 252) >> 2],
                        La = Ia = 0;
                      ;

                    ) {
                      if (
                        ((Qa = (Ha + w(q[ua >> 2], 36)) | 0),
                        (q[(Qa + 28) >> 2] || q[(Qa + 24) >> 2]) &&
                          ((q[((Ca = Ia << 2) + q[(a + 212) >> 2]) >> 2] =
                            q[(Qa + 8) >> 2]),
                          q[(Qa + 24) >> 2] &&
                            !((0 | (Ba = q[(Qa + 8) >> 2])) < 1)))
                      )
                        for (
                          Ea = ((ta = q[(Qa + 16) >> 2]) + (Ba << 2)) | 0,
                            Da = q[(Ca + Ma) >> 2],
                            Aa = ((Ba = La << 2) + q[(a + 232) >> 2]) | 0,
                            Ca = (Ba + q[(a + 224) >> 2]) | 0,
                            Ba = (Ba + q[(a + 228) >> 2]) | 0;
                          (Ga = (Da + q[ta >> 2]) << 2),
                            (q[Aa >> 2] =
                              Oa + (q[(Ga + q[(Ka + 984) >> 2]) >> 2] << 2)),
                            (q[Ca >> 2] = q[(Ga + q[(Ka + 976) >> 2]) >> 2]),
                            (q[Ba >> 2] = q[(Ga + q[(Ka + 980) >> 2]) >> 2]),
                            (Ba = (Ba + 4) | 0),
                            (Ca = (Ca + 4) | 0),
                            (Aa = (Aa + 4) | 0),
                            (ta = (ta + 4) | 0) >>> 0 < Ea >>> 0;

                        );
                      if (
                        q[(Qa + 28) >> 2] &&
                        !((0 | (Ba = q[(Qa + 8) >> 2])) < 1)
                      )
                        for (
                          Ba = ((ta = q[(Qa + 20) >> 2]) + (Ba << 2)) | 0,
                            Aa = (q[(a + 216) >> 2] + (La << 2)) | 0;
                          (q[Aa >> 2] = q[ta >> 2]),
                            (Aa = (Aa + 4) | 0),
                            (ta = (ta + 4) | 0) >>> 0 < Ba >>> 0;

                        );
                      if (
                        ((ua = (ua + 4) | 0),
                        (La = (q[(Qa + 4) >> 2] + La) | 0),
                        (0 | Ja) == (0 | (Ia = (Ia + 1) | 0)))
                      )
                        break;
                    }
                }
                if (
                  (n[q[1643]](a),
                  (function (a) {
                    var ke,
                      de = 0,
                      ee = 0,
                      fe = 0,
                      ge = 0,
                      he = 0,
                      ie = 0,
                      je = 0,
                      le = 0,
                      me = 0,
                      ne = 0,
                      oe = 0,
                      pe = 0;
                    if (1 <= (0 | (ke = q[(a + 340) >> 2])))
                      for (
                        me = q[(a + 316) >> 2],
                          le = q[a >> 2],
                          ne = q[(le + 1072) >> 2],
                          he = q[(a + 372) >> 2];
                        ;

                      ) {
                        if (
                          ((fe = (w(q[he >> 2], 36) + me) | 0),
                          (q[(fe + 28) >> 2] || q[(fe + 24) >> 2]) &&
                            ((q[((de = ie << 2) + q[(a + 352) >> 2]) >> 2] =
                              q[(fe + 8) >> 2]),
                            q[(fe + 24) >> 2] &&
                              !((0 | (ge = q[(fe + 8) >> 2])) < 1)))
                        )
                          for (
                            ge = ((ee = q[(fe + 16) >> 2]) + (ge << 2)) | 0,
                              oe = q[(de + ne) >> 2],
                              de = (q[(a + 364) >> 2] + (je << 2)) | 0,
                              pe = q[(le + 1104) >> 2];
                            (q[de >> 2] =
                              q[(((q[ee >> 2] + oe) << 2) + pe) >> 2]),
                              (de = (de + 4) | 0),
                              (ee = (ee + 4) | 0) >>> 0 < ge >>> 0;

                          );
                        if (
                          q[(fe + 28) >> 2] &&
                          !((0 | (de = q[(fe + 8) >> 2])) < 1)
                        )
                          for (
                            ge = ((ee = q[(fe + 20) >> 2]) + (de << 2)) | 0,
                              de = (q[(a + 356) >> 2] + (je << 2)) | 0;
                            (q[de >> 2] = q[ee >> 2]),
                              (de = (de + 4) | 0),
                              (ee = (ee + 4) | 0) >>> 0 < ge >>> 0;

                          );
                        if (
                          ((he = (he + 4) | 0),
                          (je = (q[(fe + 4) >> 2] + je) | 0),
                          (0 | ke) == (0 | (ie = (ie + 1) | 0)))
                        )
                          break;
                      }
                  })(a),
                  n[q[1646]](a),
                  (ua = q[(a + 48) >> 2]),
                  1 <= (0 | (ta = q[(a + 4) >> 2])))
                )
                  for (
                    Ea = ((Ca = q[(a + 8) >> 2]) + (ta << 3)) | 0,
                      Ba = q[(a + 52) >> 2],
                      Aa = q[(a + 36) >> 2],
                      ta = ua;
                    q[Aa >> 2] &&
                      ((Fa = u[Ba >> 2]),
                      (u[ta >> 2] = Fa),
                      -1 != (0 | (Da = q[Ca >> 2])) &&
                        (u[ta >> 2] = Fa * u[((Da << 2) + ua) >> 2])),
                      (ta = (ta + 4) | 0),
                      (Ba = (Ba + 4) | 0),
                      (Aa = (Aa + 4) | 0),
                      (Ca = (Ca + 8) | 0) >>> 0 < Ea >>> 0;

                  );
                if (1 <= (0 | (Ba = q[(a + 56) >> 2]))) {
                  for (
                    ua = (a + 56) | 0,
                      ta = q[(a + 60) >> 2],
                      Aa = q[(a + 168) >> 2],
                      Ca = 0;
                    q[Aa >> 2] && n[q[(ta + 16) >> 2]](ta, Ca, ua),
                      (Aa = (Aa + 4) | 0),
                      (ta = (ta + 32) | 0),
                      (0 | Ba) != (0 | (Ca = (Ca + 1) | 0));

                  );
                  ua = q[(a + 48) >> 2];
                }
                if (1 <= (0 | (Ba = q[(a + 200) >> 2])))
                  for (
                    Ja = ((ta = q[(a + 204) >> 2]) + (Ba << 4)) | 0,
                      Oa = q[(a + 192) >> 2],
                      Ma = q[(a + 60) >> 2],
                      Ca = q[(a + 248) >> 2],
                      Aa = q[(a + 276) >> 2],
                      Ba = q[(a + 272) >> 2];
                    q[Ca >> 2] &&
                      (-1 != (0 | (Da = q[ta >> 2])) &&
                        (u[Aa >> 2] = u[((Da << 2) + ua) >> 2] * u[Aa >> 2]),
                      -1 != (0 | (Da = q[(ta + 4) >> 2])) &&
                        ((u[Aa >> 2] = u[(Oa + (Da << 2)) >> 2] * u[Aa >> 2]),
                        (Ea = (Ma + (Da << 5)) | 0),
                        (Da = q[Ba >> 2]),
                        n[q[(Ea + 20) >> 2]](
                          q[(Ea + 24) >> 2],
                          Da,
                          Da,
                          q[(ta + 12) >> 2]
                        ))),
                      (Ba = (Ba + 4) | 0),
                      (Aa = (Aa + 4) | 0),
                      (Ca = (Ca + 4) | 0),
                      (ta = (ta + 16) | 0) >>> 0 < Ja >>> 0;

                  );
                if (
                  ((function (a) {
                    var Bd = 0,
                      Cd = 0,
                      Dd = 0,
                      Ed = 0,
                      Fd = x(0),
                      Gd = x(0),
                      Hd = x(0),
                      Id = x(0),
                      Jd = x(0),
                      Kd = 0,
                      Ld = 0,
                      Md = 0,
                      Nd = 0,
                      Od = 0,
                      Pd = x(0),
                      Qd = 0,
                      Rd = 0,
                      Sd = x(0),
                      Td = 0;
                    if (1 <= (0 | (Dd = q[(a + 340) >> 2])))
                      for (
                        Td = ((Bd = q[(a + 344) >> 2]) + w(Dd, 24)) | 0,
                          Dd = q[(a + 272) >> 2];
                        ;

                      ) {
                        if ((a = 0) < (0 | (Kd = q[(Bd + 8) >> 2])))
                          for (
                            Ld = q[(Dd + (q[(Bd + 4) >> 2] << 2)) >> 2],
                              Md = q[(Dd + (q[Bd >> 2] << 2)) >> 2],
                              Fd = u[(Bd + 20) >> 2],
                              Nd = q[(Bd + 16) >> 2],
                              Od = q[(Bd + 12) >> 2];
                            (Pd = u[(((Cd = 1 | a) << 2) + Od) >> 2]),
                              (Ed = (s[((a << 1) + Nd) >> 1] << 3) & 262136),
                              (Gd = u[(Qd = ((4 | Ed) + Md) | 0) >> 2]),
                              (Cd = (s[((Cd << 1) + Nd) >> 1] << 3) & 262136),
                              (Hd = u[(Rd = ((4 | Cd) + Ld) | 0) >> 2]),
                              (Id = u[(Ed = (Ed + Md) | 0) >> 2]),
                              (Sd = u[((a << 2) + Od) >> 2]),
                              (Jd = u[(Cd = (Cd + Ld) | 0) >> 2]),
                              (u[Ed >> 2] = Id + x(Fd * x(Sd * x(Jd - Id)))),
                              (u[Qd >> 2] = Gd + x(Fd * x(Sd * x(Hd - Gd)))),
                              (u[Cd >> 2] = Jd + x(Fd * x(Pd * x(Id - Jd)))),
                              (u[Rd >> 2] = Hd + x(Fd * x(Pd * x(Gd - Hd)))),
                              (0 | (a = (a + 2) | 0)) < (0 | Kd);

                          );
                        if (!((Bd = (Bd + 24) | 0) >>> 0 < Td >>> 0)) break;
                      }
                  })(a),
                  n[q[1647]](a),
                  (La = q[(a + 248) >> 2]),
                  (Ia = q[(a + 268) >> 2]),
                  1 <= (0 | (Ha = q[(a + 320) >> 2])))
                ) {
                  for (
                    Ja = ((Ba = q[(a + 324) >> 2]) + w(Ha, 28)) | 0,
                      Oa = q[(a + 44) >> 2],
                      Ma = q[(a + 36) >> 2],
                      ua = Ba;
                    ;

                  ) {
                    if (1 <= (0 | (Aa = q[(ua + 4) >> 2])))
                      for (
                        Ea = (ua + 20) | 0, Da = q[(ua + 12) >> 2], ta = 0;
                        (Ga = q[(4 + (Ca = (Da + (ta << 4)) | 0)) >> 2] << 2),
                          (Ca = 1 == q[(Ka = Ca) >> 2]),
                          (q[(Ka + 12) >> 2] =
                            q[
                              (q[(Ga + (Ca ? Ma : La)) >> 2]
                                ? (Ga + (Ca ? Oa : Ia)) | 0
                                : Ea) >> 2
                            ]),
                          (0 | Aa) != (0 | (ta = (ta + 1) | 0));

                      );
                    if (!((ua = (ua + 28) | 0) >>> 0 < Ja >>> 0)) break;
                  }
                  for (Oa = q[(a + 264) >> 2], Ra = 0; ; ) {
                    if (
                      ((Ga = (Ba + w(Ra, 28)) | 0),
                      !(q[((Ja = Ga) + 24) >> 2] < 1))
                    ) {
                      for (
                        Ca = q[(a + 328) >> 2], ta = 0;
                        (q[(Ca + (ta << 2)) >> 2] = -1),
                          (0 | (ta = (ta + 1) | 0)) <
                            (0 | (ua = q[(Ja + 24) >> 2]));

                      );
                      if (!((0 | ua) < 1))
                        for (
                          ua = q[(a + 336) >> 2], ta = 0;
                          (q[(ua + (ta << 2)) >> 2] = -1),
                            (0 | (ta = (ta + 1) | 0)) < q[(Ja + 24) >> 2];

                        );
                    }
                    if (!(q[(Ga + 4) >> 2] < 1)) {
                      for (
                        Ma = q[(a + 332) >> 2], ta = 0;
                        (q[(Ma + (ta << 2)) >> 2] = -1),
                          (0 | (ta = (ta + 1) | 0)) <
                            (0 | (ua = q[(Ga + 4) >> 2]));

                      );
                      if (!((0 | ua) < 1))
                        for (
                          Aa = q[(Ga + 12) >> 2],
                            Ea = q[(a + 336) >> 2],
                            ta = 0;
                          (Da =
                            (q[(12 + ((Aa + (ta << 4)) | 0)) >> 2] -
                              q[(Ga + 20) >> 2]) <<
                            2),
                            (ua =
                              -1 != (0 | (ua = q[(Ca = (Da + Ea) | 0) >> 2]))
                                ? (Ma + (ua << 2)) | 0
                                : (Da + q[(a + 328) >> 2]) | 0),
                            (q[ua >> 2] = ta),
                            (0 | (ta = ((q[Ca >> 2] = ta) + 1) | 0)) <
                              q[(Ga + 4) >> 2];

                        );
                    }
                    if (1 <= (0 | (Ca = q[(Ja + 24) >> 2])))
                      for (
                        Aa = q[(Ga + 8) >> 2], Ma = q[(a + 328) >> 2], Ea = 0;
                        ;

                      ) {
                        if (-1 != (0 | (ta = q[(Ma + (Ea << 2)) >> 2]))) {
                          for (
                            Da = q[(a + 332) >> 2], Ca = q[(Ga + 12) >> 2];
                            (Aa =
                              ((ua =
                                1 != q[(ua = (Ca + (ta << 4)) | 0) >> 2]
                                  ? ((q[(Oa + (q[(ua + 4) >> 2] << 2)) >> 2] =
                                      Aa),
                                    1)
                                  : ((ua = (Ba + w(q[(ua + 8) >> 2], 28)) | 0),
                                    (q[(ua + 8) >> 2] = Aa),
                                    q[ua >> 2])) +
                                Aa) |
                              0),
                              (0 | ta) <
                                (0 | (ua = q[(Da + (ta << 2)) >> 2])) &&
                                -1 != (0 | (ta = ua));

                          );
                          Ca = q[(Ja + 24) >> 2];
                        }
                        if (!((0 | (Ea = (Ea + 1) | 0)) < (0 | Ca))) break;
                      }
                    if ((0 | Ha) == (0 | (Ra = (Ra + 1) | 0))) break;
                  }
                }
                Da = q[(a + 200) >> 2];
                M: {
                  if (q[(a + 376) >> 2]) {
                    if (((ta = 0), ((q[(a + 256) >> 2] = 0) | Da) < 1)) break M;
                    for (;;) {
                      if (
                        ((Aa = 62),
                        (Ca = (q[(a + 260) >> 2] + ta) | 0),
                        !q[((ua = ta << 2) + La) >> 2] |
                          (u[(ua + q[(a + 276) >> 2]) >> 2] == x(0)) ||
                          (Aa = 63),
                        (o[0 | Ca] = Aa),
                        (0 | Da) == (0 | (ta = (ta + 1) | 0)))
                      )
                        break M;
                      La = q[(a + 248) >> 2];
                    }
                  }
                  if (!q[(a + 256) >> 2]) {
                    if ((0 | Da) < 1) break M;
                    for (ta = 0; ; ) {
                      if (
                        (!q[((ua = ta << 2) + La) >> 2] |
                        (u[(ua + q[(a + 276) >> 2]) >> 2] == x(0))
                          ? ((ua = (q[(a + 260) >> 2] + ta) | 0),
                            (o[0 | ua] = 254 & r[0 | ua]))
                          : ((ua = (q[(a + 260) >> 2] + ta) | 0),
                            (o[0 | ua] = 1 | r[0 | ua])),
                        (0 | Da) == (0 | (ta = (ta + 1) | 0)))
                      )
                        break M;
                      La = q[(a + 248) >> 2];
                    }
                  }
                  if (!(((q[(a + 256) >> 2] = 0) | Da) < 1))
                    for (Aa = 0; ; ) {
                      if (
                        ((Fa = u[((Ca = Aa << 2) + q[(a + 276) >> 2]) >> 2]),
                        (Ba = q[(Ca + La) >> 2]),
                        (ta = (Fa != x(0)) & (0 != (0 | Ba))),
                        (ua = (q[(a + 260) >> 2] + Aa) | 0),
                        (ta = (0 | ta) == (1 & o[0 | ua]) ? ta : 2 | ta),
                        (ta =
                          Fa != u[(Ca + q[(a + 288) >> 2]) >> 2] ? 4 | ta : ta),
                        (ta =
                          q[(Ca + Ia) >> 2] == q[(Ca + q[(a + 284) >> 2]) >> 2]
                            ? ta
                            : 8 | ta),
                        (ta =
                          q[(Ca + q[(a + 264) >> 2]) >> 2] ==
                          q[(Ca + q[(a + 280) >> 2]) >> 2]
                            ? ta
                            : 16 | ta),
                        (o[0 | ua] = Ba ? 32 | ta : ta),
                        (0 | Da) == (0 | (Aa = (Aa + 1) | 0)))
                      )
                        break M;
                      (Ia = q[(a + 268) >> 2]), (La = q[(a + 248) >> 2]);
                    }
                }
                q[(a + 376) >> 2] = 0;
              }
              function ua(a, ab, bb) {
                var cb = 0,
                  db = 0,
                  eb = 0,
                  fb = 0,
                  gb = 0,
                  hb = 0,
                  ib = 0,
                  jb = 0,
                  kb = 0,
                  lb = 0,
                  mb = 0;
                if (
                  ((q[ab >> 2] = 384),
                  (db = q[a >> 2]),
                  1 <= (0 | (fb = q[db >> 2])))
                ) {
                  for (
                    hb = q[(a + 16) >> 2], ib = q[(a + 296) >> 2];
                    (eb =
                      ((1 << q[(ib + (q[(hb + (cb << 2)) >> 2] << 2)) >> 2]) +
                        eb) |
                      0),
                      (0 | fb) != (0 | (cb = (cb + 1) | 0));

                  );
                  cb = eb << 2;
                }
                if (
                  ((q[(ab + 4) >> 2] = fb << 3),
                  (q[(ab + 8) >> 2] = q[db >> 2] << 2),
                  (q[(ab + 12) >> 2] = q[db >> 2] << 2),
                  (q[(ab + 16) >> 2] = q[db >> 2] << 2),
                  (q[(ab + 20) >> 2] = q[db >> 2] << 2),
                  (q[(ab + 24) >> 2] = q[db >> 2] << 2),
                  (eb = q[db >> 2]),
                  (q[(ab + 40) >> 2] = cb),
                  (q[(ab + 36) >> 2] = cb),
                  (q[(ab + 32) >> 2] = cb),
                  (q[(ab + 28) >> 2] = eb << 2),
                  1 <= ((eb = cb = 0) | (ib = q[(db + 8) >> 2])))
                ) {
                  for (
                    kb = q[(a + 296) >> 2],
                      lb = q[(a + 88) >> 2],
                      jb = q[(a + 76) >> 2],
                      fb = 0;
                    (cb =
                      (0 | cb) < (0 | (hb = q[((mb = eb << 2) + lb) >> 2]))
                        ? hb
                        : cb),
                      (gb = (((15 + (hb << 3)) & -16) + gb) | 0),
                      (fb =
                        ((1 << q[(kb + (q[(jb + mb) >> 2] << 2)) >> 2]) + fb) |
                        0),
                      (0 | ib) != (0 | (eb = (eb + 1) | 0));

                  );
                  (eb = cb << 3), (cb = fb << 2);
                }
                if (
                  ((q[(ab + 44) >> 2] = q[(db + 4) >> 2] << 5),
                  (q[(ab + 48) >> 2] = w(q[(db + 8) >> 2], 24)),
                  (q[(ab + 52) >> 2] = q[(db + 12) >> 2] << 5),
                  (q[(ab + 56) >> 2] = q[(db + 4) >> 2] << 2),
                  (q[(ab + 60) >> 2] = q[(db + 8) >> 2] << 2),
                  (q[(ab + 64) >> 2] = q[(db + 12) >> 2] << 2),
                  (q[(ab + 68) >> 2] = q[(db + 4) >> 2] << 2),
                  (fb = q[(db + 4) >> 2]),
                  (q[(ab + 76) >> 2] = gb),
                  (q[(ab + 72) >> 2] = fb << 2),
                  (q[(ab + 80) >> 2] = q[(db + 8) >> 2] << 2),
                  (fb = q[(db + 8) >> 2]),
                  (q[(ab + 104) >> 2] = eb),
                  (q[(ab + 100) >> 2] = cb),
                  (q[(ab + 96) >> 2] = cb),
                  (q[(ab + 92) >> 2] = cb),
                  (q[(ab + 88) >> 2] = cb),
                  (q[(ab + 84) >> 2] = fb << 2),
                  1 <= ((cb = gb = 0) | (fb = q[(db + 12) >> 2])))
                ) {
                  for (
                    hb = q[(a + 296) >> 2], ib = q[(a + 100) >> 2], eb = 0;
                    (eb =
                      ((1 << q[(hb + (q[(ib + (cb << 2)) >> 2] << 2)) >> 2]) +
                        eb) |
                      0),
                      (0 | fb) != (0 | (cb = (cb + 1) | 0));

                  );
                  cb = eb << 2;
                }
                if (
                  ((q[(ab + 108) >> 2] = fb << 2),
                  (eb = q[(db + 12) >> 2]),
                  (q[(ab + 156) >> 2] = cb),
                  (q[(ab + 152) >> 2] = cb),
                  (q[(ab + 148) >> 2] = cb),
                  (q[(ab + 144) >> 2] = cb),
                  (q[(ab + 140) >> 2] = cb),
                  (q[(ab + 136) >> 2] = cb),
                  (q[(ab + 132) >> 2] = cb),
                  (q[(ab + 128) >> 2] = cb),
                  (q[(ab + 124) >> 2] = cb),
                  (q[(ab + 120) >> 2] = cb),
                  (q[(ab + 116) >> 2] = cb),
                  (q[(ab + 112) >> 2] = eb << 2),
                  1 <= ((eb = cb = 0) | (hb = q[(db + 16) >> 2])))
                ) {
                  for (
                    kb = q[(a + 136) >> 2],
                      lb = q[(a + 296) >> 2],
                      jb = q[(a + 172) >> 2],
                      fb = 0;
                    (cb =
                      (0 | cb) < (0 | (ib = q[((mb = eb << 2) + jb) >> 2]))
                        ? ib
                        : cb),
                      (gb = (((15 + (ib << 3)) & -16) + gb) | 0),
                      (fb =
                        ((1 << q[(lb + (q[(kb + mb) >> 2] << 2)) >> 2]) + fb) |
                        0),
                      (0 | hb) != (0 | (eb = (eb + 1) | 0));

                  );
                  (eb = cb << 3), (cb = fb << 2);
                }
                if (
                  ((q[(ab + 160) >> 2] = hb << 4),
                  (q[(ab + 164) >> 2] = q[(db + 16) >> 2] << 2),
                  (q[(ab + 168) >> 2] = q[(db + 16) >> 2]),
                  (q[(ab + 172) >> 2] = q[(db + 16) >> 2] << 2),
                  (q[(ab + 176) >> 2] = q[(db + 16) >> 2] << 2),
                  (fb = q[(db + 16) >> 2]),
                  (q[(ab + 184) >> 2] = gb),
                  (q[(ab + 180) >> 2] = fb << 2),
                  (q[(ab + 188) >> 2] = q[(db + 16) >> 2] << 2),
                  (q[(ab + 192) >> 2] = q[(db + 16) >> 2] << 2),
                  (q[(ab + 196) >> 2] = q[(db + 16) >> 2] << 2),
                  (q[(ab + 200) >> 2] = q[(db + 16) >> 2] << 2),
                  (q[(ab + 204) >> 2] = q[(db + 16) >> 2] << 2),
                  (fb = q[(db + 16) >> 2]),
                  (q[(ab + 236) >> 2] = eb),
                  (q[(ab + 232) >> 2] = cb),
                  (q[(ab + 228) >> 2] = cb),
                  (q[(ab + 224) >> 2] = cb),
                  (q[(ab + 220) >> 2] = cb),
                  (q[(ab + 216) >> 2] = cb),
                  (q[(ab + 212) >> 2] = cb),
                  (q[(ab + 208) >> 2] = fb << 2),
                  (q[(ab + 240) >> 2] = w(q[(db + 20) >> 2], 40)),
                  (q[(ab + 244) >> 2] = q[(db + 20) >> 2] << 2),
                  (q[(ab + 248) >> 2] = w(q[(db + 52) >> 2], 28)),
                  1 <= ((cb = fb = 0) | (gb = q[(db + 48) >> 2])))
                ) {
                  for (
                    hb = q[(a + 296) >> 2], eb = 0;
                    (eb = ((1 << q[(hb + (cb << 2)) >> 2]) + eb) | 0),
                      (0 | gb) != (0 | (cb = (cb + 1) | 0));

                  );
                  cb = eb << 2;
                }
                if (
                  ((q[(ab + 260) >> 2] = cb),
                  (q[(ab + 256) >> 2] = cb),
                  (q[(ab + 252) >> 2] = w(gb, 36)),
                  (q[(ab + 264) >> 2] = w(q[(db + 72) >> 2], 28)),
                  1 <= ((cb = 0) | (hb = q[(db + 72) >> 2])))
                ) {
                  for (
                    ib = q[(a + 340) >> 2],
                      kb = q[(a + 336) >> 2],
                      lb = q[(a + 328) >> 2],
                      eb = 0;
                    (eb =
                      (0 |
                        (jb =
                          (q[((gb = fb << 2) + kb) >> 2] - q[(gb + ib) >> 2]) |
                          0)) <
                      (0 | eb)
                        ? eb
                        : (jb + 1) | 0),
                      (cb =
                        (0 | cb) < (0 | (gb = q[(gb + lb) >> 2])) ? gb : cb),
                      (0 | hb) != (0 | (fb = (fb + 1) | 0));

                  );
                  (fb = eb << 2), (cb <<= 2);
                }
                if (
                  ((eb = q[(db + 76) >> 2]),
                  (q[(ab + 280) >> 2] = fb),
                  (q[(ab + 276) >> 2] = cb),
                  (q[(ab + 272) >> 2] = fb),
                  (q[(ab + 268) >> 2] = eb << 4),
                  1 <= ((cb = 0) | (fb = q[(db + 80) >> 2])))
                ) {
                  for (
                    gb = q[(a + 364) >> 2], a = q[(a + 296) >> 2], eb = 0;
                    (eb =
                      ((1 << q[(a + (q[(gb + (cb << 2)) >> 2] << 2)) >> 2]) +
                        eb) |
                      0),
                      (0 | fb) != (0 | (cb = (cb + 1) | 0));

                  );
                  cb = eb << 2;
                }
                for (
                  q[(ab + 284) >> 2] = w(fb, 24),
                    q[(ab + 288) >> 2] = q[(db + 80) >> 2] << 2,
                    a = q[(db + 80) >> 2],
                    q[(ab + 304) >> 2] = cb,
                    q[(ab + 300) >> 2] = cb,
                    q[(ab + 296) >> 2] = cb,
                    q[ab >> 2] = 0,
                    q[(ab + 292) >> 2] = a << 2,
                    cb = 384,
                    eb = 1;
                  (cb =
                    ((((db = q[(a = ((eb << 2) + ab) | 0) >> 2]) + 15) & -16) +
                      (q[a >> 2] = cb)) |
                    0),
                    77 != (0 | (eb = (eb + 1) | 0));

                );
                q[bb >> 2] = cb;
              }
              function va(a, ab, bb) {
                var nb;
                (ab |= 0), (bb |= 0), (L = nb = (L + -64) | 0);
                a: {
                  if ((a |= 0))
                    if (ab)
                      if (((ab + 15) & -16) == (0 | ab)) {
                        if (
                          (ab = (function (a, fh, gh) {
                            var lh,
                              hh = 0,
                              ih = 0,
                              jh = 0,
                              kh = 0,
                              mh = 0,
                              nh = 0,
                              oh = 0,
                              ph = 0,
                              qh = 0,
                              rh = 0,
                              sh = 0,
                              th = 0,
                              uh = 0,
                              vh = 0,
                              wh = 0,
                              xh = 0,
                              yh = 0,
                              zh = 0,
                              Ah = x(0);
                            if (
                              (ba((16 + (L = lh = (L - 336) | 0)) | 0, 0, 308),
                              ua((a + 704) | 0, (16 + lh) | 0, (12 + lh) | 0),
                              (ih = q[(12 + lh) >> 2]) >>> 0 <= gh >>> 0)
                            ) {
                              if (
                                ((hh =
                                  ((jh = ba(fh, (gh = 0), ih)) +
                                    q[(16 + lh) >> 2]) |
                                  0),
                                (q[(hh + 8) >> 2] = jh + q[(20 + lh) >> 2]),
                                (q[(hh + 36) >> 2] = jh + q[(24 + lh) >> 2]),
                                (q[(hh + 44) >> 2] = jh + q[(28 + lh) >> 2]),
                                (q[(hh + 48) >> 2] = jh + q[(32 + lh) >> 2]),
                                (q[(hh + 52) >> 2] = jh + q[(36 + lh) >> 2]),
                                (q[(hh + 12) >> 2] = jh + q[(40 + lh) >> 2]),
                                (q[(hh + 16) >> 2] = jh + q[(44 + lh) >> 2]),
                                (q[(hh + 20) >> 2] = jh + q[(48 + lh) >> 2]),
                                (q[(hh + 28) >> 2] = jh + q[(52 + lh) >> 2]),
                                (q[(hh + 32) >> 2] = jh + q[(56 + lh) >> 2]),
                                (fh = q[(a + 704) >> 2]),
                                (q[(hh + 60) >> 2] = jh + q[(60 + lh) >> 2]),
                                (kh = (jh + q[(64 + lh) >> 2]) | 0),
                                (q[(hh + 68) >> 2] = kh),
                                (q[(hh + 76) >> 2] = jh + q[(68 + lh) >> 2]),
                                (q[(hh + 168) >> 2] = jh + q[(72 + lh) >> 2]),
                                (q[(hh + 172) >> 2] = jh + q[(76 + lh) >> 2]),
                                (q[(hh + 176) >> 2] = jh + q[(80 + lh) >> 2]),
                                (q[(hh + 192) >> 2] = jh + q[(84 + lh) >> 2]),
                                (q[(hh + 196) >> 2] = jh + q[(88 + lh) >> 2]),
                                1 <= (0 | (fh = q[(fh + 8) >> 2])))
                              )
                                for (
                                  ih = (jh + q[(92 + lh) >> 2]) | 0,
                                    mh = q[(a + 792) >> 2];
                                  (q[(20 + ((kh + w(gh, 24)) | 0)) >> 2] = ih),
                                    (ih =
                                      (((15 + (q[(mh + (gh << 2)) >> 2] << 3)) &
                                        -16) +
                                        ih) |
                                      0),
                                    (0 | fh) != (0 | (gh = (gh + 1) | 0));

                                );
                              if (
                                ((q[(hh + 80) >> 2] = jh + q[(96 + lh) >> 2]),
                                (q[(hh + 84) >> 2] = jh + q[(100 + lh) >> 2]),
                                (q[(hh + 88) >> 2] = jh + q[(104 + lh) >> 2]),
                                (q[(hh + 96) >> 2] = jh + q[(108 + lh) >> 2]),
                                (q[(hh + 100) >> 2] = jh + q[(112 + lh) >> 2]),
                                (q[(hh + 104) >> 2] = jh + q[(116 + lh) >> 2]),
                                (q[(hh + 108) >> 2] = jh + q[(120 + lh) >> 2]),
                                (q[(hh + 112) >> 2] = jh + q[(124 + lh) >> 2]),
                                (q[(hh + 116) >> 2] = jh + q[(128 + lh) >> 2]),
                                (q[(hh + 120) >> 2] = jh + q[(132 + lh) >> 2]),
                                (q[(hh + 128) >> 2] = jh + q[(136 + lh) >> 2]),
                                (q[(hh + 132) >> 2] = jh + q[(140 + lh) >> 2]),
                                (q[(hh + 136) >> 2] = jh + q[(144 + lh) >> 2]),
                                (q[(hh + 140) >> 2] = jh + q[(148 + lh) >> 2]),
                                (q[(hh + 144) >> 2] = jh + q[(152 + lh) >> 2]),
                                (q[(hh + 148) >> 2] = jh + q[(156 + lh) >> 2]),
                                (q[(hh + 152) >> 2] = jh + q[(160 + lh) >> 2]),
                                (q[(hh + 156) >> 2] = jh + q[(164 + lh) >> 2]),
                                (q[(hh + 160) >> 2] = jh + q[(168 + lh) >> 2]),
                                (q[(hh + 164) >> 2] = jh + q[(172 + lh) >> 2]),
                                (fh = q[(a + 704) >> 2]),
                                (q[(hh + 204) >> 2] = jh + q[(176 + lh) >> 2]),
                                (q[(hh + 248) >> 2] = jh + q[(180 + lh) >> 2]),
                                (q[(hh + 260) >> 2] = jh + q[(184 + lh) >> 2]),
                                (q[(hh + 264) >> 2] = jh + q[(188 + lh) >> 2]),
                                (q[(hh + 268) >> 2] = jh + q[(192 + lh) >> 2]),
                                (gh = (jh + q[(196 + lh) >> 2]) | 0),
                                (q[(hh + 272) >> 2] = gh),
                                !((0 | (fh = q[(fh + 16) >> 2])) < 1) &&
                                  ((ih = (jh + q[(200 + lh) >> 2]) | 0),
                                  (q[gh >> 2] = ih),
                                  (gh = 1) != (0 | fh)))
                              )
                                for (
                                  kh = 0;
                                  (ih =
                                    (((15 +
                                      (q[
                                        (q[(a + 876) >> 2] + (kh << 2)) >> 2
                                      ] <<
                                        3)) &
                                      -16) +
                                      ih) |
                                    0),
                                    (q[(q[(hh + 272) >> 2] + (gh << 2)) >> 2] =
                                      ih),
                                    (0 | fh) !=
                                      (0 | (gh = ((kh = gh) + 1) | 0));

                                );
                              if (
                                ((q[(hh + 276) >> 2] = jh + q[(204 + lh) >> 2]),
                                (q[(hh + 280) >> 2] = jh + q[(208 + lh) >> 2]),
                                (q[(hh + 284) >> 2] = jh + q[(212 + lh) >> 2]),
                                (q[(hh + 288) >> 2] = jh + q[(216 + lh) >> 2]),
                                (q[(hh + 208) >> 2] = jh + q[(220 + lh) >> 2]),
                                (q[(hh + 212) >> 2] = jh + q[(224 + lh) >> 2]),
                                (q[(hh + 216) >> 2] = jh + q[(228 + lh) >> 2]),
                                (q[(hh + 224) >> 2] = jh + q[(232 + lh) >> 2]),
                                (q[(hh + 228) >> 2] = jh + q[(236 + lh) >> 2]),
                                (q[(hh + 232) >> 2] = jh + q[(240 + lh) >> 2]),
                                (q[(hh + 236) >> 2] = jh + q[(244 + lh) >> 2]),
                                (q[(hh + 240) >> 2] = jh + q[(248 + lh) >> 2]),
                                (q[(hh + 244) >> 2] = jh + q[(252 + lh) >> 2]),
                                (fh = q[(256 + lh) >> 2]),
                                (oh = (jh + q[(260 + lh) >> 2]) | 0),
                                (q[(hh + 300) >> 2] = oh),
                                (qh = (fh + jh) | 0),
                                (q[(hh + 296) >> 2] = qh),
                                (rh = (jh + q[(264 + lh) >> 2]) | 0),
                                (q[(hh + 308) >> 2] = rh),
                                (fh = q[(a + 704) >> 2]),
                                (gh = q[(276 + lh) >> 2]),
                                (ih = q[(272 + lh) >> 2]),
                                (ph = (jh + q[(268 + lh) >> 2]) | 0),
                                (q[(hh + 316) >> 2] = ph),
                                1 <= (0 | (kh = q[(fh + 48) >> 2])))
                              )
                                for (
                                  ih = (jh + ih) | 0,
                                    fh = (gh + jh) | 0,
                                    mh = q[(a + 1e3) >> 2],
                                    gh = 0;
                                  (nh = (ph + w(gh, 36)) | 0),
                                    (q[(nh + 20) >> 2] = fh),
                                    (q[(nh + 16) >> 2] = ih),
                                    (fh =
                                      ((nh =
                                        (1 << q[(mh + (gh << 2)) >> 2]) << 2) +
                                        fh) |
                                      0),
                                    (ih = (ih + nh) | 0),
                                    (0 | kh) != (0 | (gh = (gh + 1) | 0));

                                );
                              if (
                                ((fh = q[(a + 704) >> 2]),
                                (kh = (jh + q[(280 + lh) >> 2]) | 0),
                                (q[(hh + 324) >> 2] = kh),
                                1 <= (0 | (fh = q[(fh + 72) >> 2])))
                              )
                                for (
                                  ih = (jh + q[(284 + lh) >> 2]) | 0,
                                    mh = q[(a + 1032) >> 2],
                                    gh = 0;
                                  (q[(12 + ((kh + w(gh, 28)) | 0)) >> 2] = ih),
                                    (ih =
                                      ((q[(mh + (gh << 2)) >> 2] << 4) + ih) |
                                      0),
                                    (0 | fh) != (0 | (gh = (gh + 1) | 0));

                                );
                              if (
                                ((q[(hh + 328) >> 2] = jh + q[(288 + lh) >> 2]),
                                (q[(hh + 332) >> 2] = jh + q[(292 + lh) >> 2]),
                                (q[(hh + 336) >> 2] = jh + q[(296 + lh) >> 2]),
                                (q[(hh + 344) >> 2] = jh + q[(300 + lh) >> 2]),
                                (q[(hh + 348) >> 2] = jh + q[(304 + lh) >> 2]),
                                (q[(hh + 352) >> 2] = jh + q[(308 + lh) >> 2]),
                                (q[(hh + 356) >> 2] = jh + q[(312 + lh) >> 2]),
                                (q[(hh + 364) >> 2] = jh + q[(316 + lh) >> 2]),
                                (fh = q[(320 + lh) >> 2]),
                                (q[(hh + 376) >> 2] = 1),
                                (q[(hh + 368) >> 2] = fh + jh),
                                (q[(hh + 380) >> 2] =
                                  1 & o[(q[(a + 708) >> 2] + 20) | 0]),
                                (jh = q[(a + 704) >> 2]),
                                (ih = q[(jh + 20) >> 2]),
                                1 <= (0 | (q[(hh + 292) >> 2] = ih)))
                              ) {
                                for (
                                  sh = q[(a + 932) >> 2],
                                    th = q[(a + 928) >> 2],
                                    uh = q[(a + 924) >> 2],
                                    nh = q[(a + 916) >> 2],
                                    wh = q[(a + 920) >> 2],
                                    xh = q[(a + 908) >> 2],
                                    yh = q[(a + 912) >> 2],
                                    fh = ih;
                                  (kh = (qh + w((gh = (fh + -1) | 0), 40)) | 0),
                                    (vh = ((mh = gh << 2) + yh) | 0),
                                    (q[kh >> 2] = q[vh >> 2]),
                                    (zh = (mh + xh) | 0),
                                    (q[(kh + 4) >> 2] = q[zh >> 2]),
                                    (u[(kh + 8) >> 2] =
                                      u[zh >> 2] - u[vh >> 2]),
                                    (q[(kh + 12) >> 2] = q[(mh + wh) >> 2]),
                                    (q[(kh + 32) >> 2] = q[(mh + nh) >> 2]),
                                    (Ah = $b(x(q[(mh + uh) >> 2]))),
                                    (u[(kh + 16) >> 2] = Ah),
                                    (u[(kh + 20) >> 2] = Ah * x(1.5)),
                                    (q[(kh + 24) >> 2] = q[(mh + th) >> 2]),
                                    (mh = q[(mh + sh) >> 2]),
                                    (q[(kh + 36) >> 2] = 1),
                                    (q[(kh + 28) >> 2] = mh),
                                    (kh = 1 < (0 | fh)),
                                    (fh = gh),
                                    kh;

                                );
                                for (
                                  ;
                                  (q[
                                    ((gh = (fh = (ih + -1) | 0) << 2) + oh) >> 2
                                  ] = q[(gh + nh) >> 2]),
                                    (gh = 1 < (0 | ih)),
                                    (ih = fh),
                                    gh;

                                );
                              }
                              if (
                                ((fh = q[(jh + 52) >> 2]),
                                1 <= (0 | (q[(hh + 304) >> 2] = fh)))
                              )
                                for (
                                  kh = q[(a + 1004) >> 2],
                                    mh = q[(a + 1012) >> 2],
                                    nh = q[(a + 1008) >> 2];
                                  (ih = (rh + w((gh = (fh + -1) | 0), 28)) | 0),
                                    (oh = gh << 2),
                                    (q[ih >> 2] = q[(oh + nh) >> 2]),
                                    (oh = q[(kh + oh) >> 2]),
                                    (q[(ih + 20) >> 2] = 1),
                                    (q[(ih + 24) >> 2] = 1),
                                    (q[(ih + 12) >> 2] = 0),
                                    (q[(ih + 4) >> 2] = mh + (oh << 2)),
                                    (ih = 1 < (0 | fh)),
                                    (fh = gh),
                                    ih;

                                );
                              if (
                                ((fh = q[(jh + 48) >> 2]),
                                1 <= (0 | (q[(hh + 312) >> 2] = fh)))
                              )
                                for (
                                  kh = q[(a + 996) >> 2],
                                    mh = q[(a + 992) >> 2],
                                    nh = q[(a + 1e3) >> 2];
                                  (ih = (ph + w((gh = (fh + -1) | 0), 36)) | 0),
                                    (qh = q[((oh = gh << 2) + nh) >> 2]),
                                    (q[ih >> 2] = qh),
                                    (q[(ih + 4) >> 2] = 1 << qh),
                                    (oh = q[(kh + oh) >> 2]),
                                    (q[(ih + 24) >> 2] = 1),
                                    (q[(ih + 28) >> 2] = 1),
                                    (q[(ih + 12) >> 2] = mh + (oh << 2)),
                                    (ih = 1 < (0 | fh)),
                                    (fh = gh),
                                    ih;

                                );
                              if (
                                ((fh = q[jh >> 2]),
                                (q[(hh + 4) >> 2] = fh),
                                (mh = q[(a + 720) >> 2]),
                                (q[(hh + 40) >> 2] = mh),
                                (0 | fh) < 1)
                              )
                                gh = 0;
                              else {
                                for (
                                  nh = q[(a + 732) >> 2],
                                    oh = q[(a + 736) >> 2],
                                    qh = q[(a + 740) >> 2],
                                    rh = q[(hh + 52) >> 2],
                                    sh = q[(hh + 8) >> 2],
                                    ih = fh;
                                  (kh = (gh = (ih + -1) | 0) << 2),
                                    (q[(th = (sh + (gh << 3)) | 0) >> 2] =
                                      q[(kh + qh) >> 2]),
                                    (q[(th + 4) >> 2] = q[(kh + oh) >> 2]),
                                    (u[(kh + rh) >> 2] = q[(kh + nh) >> 2]
                                      ? x(1)
                                      : x(0)),
                                    (kh = 1 < (0 | ih)),
                                    (ih = gh),
                                    kh;

                                );
                                for (
                                  nh = q[(hh + 12) >> 2], gh = 0;
                                  (kh =
                                    q[
                                      (4 +
                                        ((ph +
                                          w(
                                            q[
                                              ((oh =
                                                (ih = (fh + -1) | 0) << 2) +
                                                mh) >>
                                                2
                                            ],
                                            36
                                          )) |
                                          0)) >>
                                        2
                                    ]),
                                    (gh = (gh + (q[(nh + oh) >> 2] = kh)) | 0),
                                    (kh = 1 < (0 | fh)),
                                    (fh = ih),
                                    kh;

                                );
                              }
                              if (
                                ((q[(hh + 24) >> 2] = gh),
                                (ih = q[(jh + 4) >> 2]),
                                (q[(hh + 56) >> 2] = ih),
                                (q[(hh + 180) >> 2] = q[(a + 752) >> 2]),
                                (q[(hh + 184) >> 2] = q[(a + 780) >> 2]),
                                (q[(hh + 188) >> 2] = q[(a + 804) >> 2]),
                                1 <= (0 | ih))
                              ) {
                                for (;;) {
                                  (ih = ((fh = ih) + -1) | 0),
                                    (gh = (q[(hh + 60) >> 2] + (ih << 5)) | 0),
                                    (kh = ih << 2),
                                    (q[gh >> 2] =
                                      q[(kh + q[(a + 764) >> 2]) >> 2]),
                                    (q[(gh + 4) >> 2] =
                                      q[(kh + q[(a + 768) >> 2]) >> 2]),
                                    (jh = q[(kh + q[(a + 772) >> 2]) >> 2]),
                                    (q[(gh + 8) >> 2] = jh),
                                    (mh = q[(kh + q[(a + 776) >> 2]) >> 2]),
                                    (q[(gh + 12) >> 2] = mh),
                                    (q[(gh + 28) >> 2] =
                                      q[(kh + q[(a + 760) >> 2]) >> 2]);
                                  c: if (jh >>> 0 <= 1) {
                                    if (jh - 1) {
                                      (q[(gh + 20) >> 2] = 1),
                                        (q[(gh + 16) >> 2] = 2),
                                        (q[(gh + 24) >> 2] =
                                          q[(hh + 68) >> 2] + w(mh, 24));
                                      break c;
                                    }
                                    (q[(gh + 20) >> 2] = 3),
                                      (q[(gh + 16) >> 2] = 4),
                                      (q[(gh + 24) >> 2] =
                                        q[(hh + 76) >> 2] + (mh << 5));
                                  } else Y(4, 1026, 0);
                                  if (!(1 < (0 | fh))) break;
                                }
                                jh = q[(a + 704) >> 2];
                              }
                              fh = q[(jh + 8) >> 2];
                              d: if (!((0 | (q[(hh + 64) >> 2] = fh)) < 1)) {
                                if (
                                  ((gh = (fh + -1) | 0),
                                  (mh = q[(a + 792) >> 2]),
                                  (ph = q[(a + 800) >> 2]),
                                  (nh = q[(a + 796) >> 2]),
                                  (oh = q[(hh + 68) >> 2]),
                                  r[(a + 4) | 0] < 2)
                                )
                                  for (;;)
                                    if (
                                      ((ih = (oh + w(gh, 24)) | 0),
                                      (kh = gh << 2),
                                      (q[ih >> 2] = q[(kh + nh) >> 2]),
                                      (q[(ih + 4) >> 2] = q[(kh + ph) >> 2]),
                                      (kh = q[(kh + mh) >> 2]),
                                      (q[(ih + 8) >> 2] = 0),
                                      (q[(ih + 12) >> 2] = kh),
                                      (ih = 0 < (0 | gh)),
                                      (gh = (gh + -1) | 0),
                                      !ih)
                                    )
                                      break d;
                                for (
                                  qh = q[(a + 1108) >> 2];
                                  (ih = (oh + w(gh, 24)) | 0),
                                    (kh = gh << 2),
                                    (q[ih >> 2] = q[(kh + nh) >> 2]),
                                    (q[(ih + 4) >> 2] = q[(kh + ph) >> 2]),
                                    (q[(ih + 12) >> 2] = q[(kh + mh) >> 2]),
                                    (q[(ih + 8) >> 2] = q[(kh + qh) >> 2]),
                                    (ih = 0 < (0 | gh)),
                                    (gh = (gh + -1) | 0),
                                    ih;

                                );
                              }
                              if (
                                ((gh = q[(jh + 12) >> 2]),
                                1 <= (0 | (q[(hh + 72) >> 2] = gh)))
                              )
                                for (
                                  mh = q[(a + 816) >> 2],
                                    ph = q[(hh + 76) >> 2],
                                    ih = gh;
                                  (q[(ph + ((kh = (ih + -1) | 0) << 5)) >> 2] =
                                    q[(mh + (kh << 2)) >> 2]),
                                    (nh = 1 < (0 | ih)),
                                    (ih = kh),
                                    nh;

                                );
                              if (1 <= ((kh = ih = 0) | fh)) {
                                for (
                                  ph = q[(hh + 80) >> 2],
                                    nh = q[(hh + 184) >> 2],
                                    oh = q[(hh + 316) >> 2];
                                  (mh =
                                    q[
                                      (4 +
                                        ((oh +
                                          w(
                                            q[
                                              ((qh =
                                                (gh = (fh + -1) | 0) << 2) +
                                                nh) >>
                                                2
                                            ],
                                            36
                                          )) |
                                          0)) >>
                                        2
                                    ]),
                                    (kh = (kh + (q[(ph + qh) >> 2] = mh)) | 0),
                                    (mh = 1 < (0 | fh)),
                                    (fh = gh),
                                    mh;

                                );
                                gh = q[(hh + 72) >> 2];
                              }
                              if (((q[(hh + 92) >> 2] = kh), 1 <= (0 | gh)))
                                for (
                                  mh = q[(hh + 112) >> 2],
                                    ph = q[(hh + 188) >> 2],
                                    nh = q[(hh + 316) >> 2];
                                  (kh =
                                    q[
                                      (4 +
                                        ((nh +
                                          w(
                                            q[
                                              ((oh =
                                                (fh = (gh + -1) | 0) << 2) +
                                                ph) >>
                                                2
                                            ],
                                            36
                                          )) |
                                          0)) >>
                                        2
                                    ]),
                                    (ih = (ih + (q[(mh + oh) >> 2] = kh)) | 0),
                                    (kh = 1 < (0 | gh)),
                                    (gh = fh),
                                    kh;

                                );
                              if (
                                ((q[(hh + 124) >> 2] = ih),
                                (ih = q[(jh + 16) >> 2]),
                                (q[(hh + 200) >> 2] = ih),
                                (ph = q[(a + 840) >> 2]),
                                (q[(hh + 252) >> 2] = ph),
                                (0 | ih) < 1)
                              )
                                gh = 0;
                              else {
                                for (
                                  nh = q[(a + 856) >> 2],
                                    oh = q[(a + 876) >> 2],
                                    qh = q[(a + 864) >> 2],
                                    rh = q[(a + 860) >> 2],
                                    sh = q[(hh + 204) >> 2],
                                    kh = ih;
                                  (mh = (fh = (kh + -1) | 0) << 2),
                                    (q[(gh = (sh + (fh << 4)) | 0) >> 2] =
                                      q[(mh + rh) >> 2]),
                                    (q[(gh + 4) >> 2] = q[(mh + qh) >> 2]),
                                    (q[(gh + 12) >> 2] = q[(mh + oh) >> 2]),
                                    (q[(gh + 8) >> 2] = q[(mh + nh) >> 2]),
                                    (gh = 1 < (0 | kh)),
                                    (kh = fh),
                                    gh;

                                );
                                for (
                                  mh = q[(hh + 208) >> 2],
                                    nh = q[(hh + 316) >> 2],
                                    gh = 0;
                                  (kh =
                                    q[
                                      (4 +
                                        ((nh +
                                          w(
                                            q[
                                              ((oh =
                                                (fh = (ih + -1) | 0) << 2) +
                                                ph) >>
                                                2
                                            ],
                                            36
                                          )) |
                                          0)) >>
                                        2
                                    ]),
                                    (gh = (gh + (q[(mh + oh) >> 2] = kh)) | 0),
                                    (kh = 1 < (0 | ih)),
                                    (ih = fh),
                                    kh;

                                );
                              }
                              if (
                                ((q[(hh + 220) >> 2] = gh),
                                (kh = q[(jh + 72) >> 2]),
                                1 <= (0 | (q[(hh + 320) >> 2] = kh)))
                              )
                                for (
                                  nh = q[(a + 1028) >> 2],
                                    oh = q[(a + 1044) >> 2],
                                    qh = q[(a + 1040) >> 2],
                                    rh = q[(a + 1036) >> 2],
                                    sh = q[(a + 1032) >> 2],
                                    th = q[(hh + 324) >> 2],
                                    ih = 0;
                                  ;

                                ) {
                                  if (
                                    ((fh = (th + w(ih, 28)) | 0),
                                    (mh = q[((gh = ih << 2) + sh) >> 2]),
                                    (q[(fh + 4) >> 2] = mh),
                                    (q[fh >> 2] = q[(gh + rh) >> 2]),
                                    (ph = q[(gh + qh) >> 2]),
                                    (q[(fh + 16) >> 2] = ph),
                                    (uh = q[(gh + oh) >> 2]),
                                    (q[(fh + 20) >> 2] = uh),
                                    (q[(fh + 8) >> 2] = 0),
                                    (q[(fh + 24) >> 2] = 1 + ((ph - uh) | 0)),
                                    1 <= (0 | mh))
                                  )
                                    for (
                                      uh = q[(gh + nh) >> 2],
                                        wh = q[(fh + 12) >> 2],
                                        xh = q[(a + 1056) >> 2],
                                        yh = q[(a + 1048) >> 2],
                                        vh = q[(a + 1052) >> 2],
                                        gh = 0;
                                      (ph = (gh + uh) << 2),
                                        (q[
                                          (4 + (fh = (wh + (gh << 4)) | 0)) >> 2
                                        ] = q[(ph + vh) >> 2]),
                                        (q[fh >> 2] = q[(ph + yh) >> 2]),
                                        (ph = q[(ph + xh) >> 2]),
                                        (q[(fh + 12) >> 2] = 0),
                                        (q[(fh + 8) >> 2] = ph),
                                        (0 | mh) != (0 | (gh = (gh + 1) | 0));

                                    );
                                  if ((0 | kh) == (0 | (ih = (ih + 1) | 0)))
                                    break;
                                }
                              if (
                                ((ih = q[(jh + 80) >> 2]),
                                (q[(hh + 340) >> 2] = ih),
                                (mh = q[(a + 1068) >> 2]),
                                (q[(hh + 372) >> 2] = mh),
                                !(((fh = 0) | ih) < 1))
                              ) {
                                for (
                                  ph = q[(a + 1100) >> 2],
                                    nh = q[(a + 1088) >> 2],
                                    oh = q[(a + 1096) >> 2],
                                    qh = q[(a + 1092) >> 2],
                                    rh = q[(a + 1084) >> 2],
                                    sh = q[(a + 1080) >> 2],
                                    th = q[(hh + 344) >> 2];
                                  (kh = (th + w((gh = (ih + -1) | 0), 24)) | 0),
                                    (jh = gh << 2),
                                    (q[kh >> 2] = q[(jh + sh) >> 2]),
                                    (q[(kh + 4) >> 2] = q[(jh + rh) >> 2]),
                                    (q[(kh + 8) >> 2] = q[(jh + qh) >> 2]),
                                    (jh = q[(jh + nh) >> 2]),
                                    (q[(kh + 16) >> 2] = ph + (jh << 1)),
                                    (q[(kh + 12) >> 2] = oh + (jh << 2)),
                                    (kh = 1 < (0 | ih)),
                                    (ih = gh),
                                    kh;

                                );
                                if (!((0 | (gh = q[(hh + 340) >> 2])) < 1))
                                  for (
                                    jh = q[(hh + 348) >> 2],
                                      ph = q[(hh + 316) >> 2];
                                    (kh =
                                      q[
                                        (4 +
                                          ((ph +
                                            w(
                                              q[
                                                ((nh =
                                                  (ih = (gh + -1) | 0) << 2) +
                                                  mh) >>
                                                  2
                                              ],
                                              36
                                            )) |
                                            0)) >>
                                          2
                                      ]),
                                      (fh =
                                        (fh + (q[(jh + nh) >> 2] = kh)) | 0),
                                      (kh = 1 < (0 | gh)),
                                      (gh = ih),
                                      kh;

                                  );
                              }
                              (q[hh >> 2] = a),
                                (q[(hh + 360) >> 2] = fh),
                                ta(hh);
                            }
                            return (L = (336 + lh) | 0), hh;
                          })(a, ab, bb))
                        )
                          break a;
                        (q[(36 + nb) >> 2] = 1872),
                          (q[(32 + nb) >> 2] = 1846),
                          Y(4, 1087, (32 + nb) | 0);
                      } else
                        (q[(52 + nb) >> 2] = 1441),
                          (q[(48 + nb) >> 2] = 1846),
                          Y(4, 1087, (48 + nb) | 0);
                    else
                      (q[(20 + nb) >> 2] = 1246),
                        (q[(16 + nb) >> 2] = 1846),
                        Y(4, 1087, (16 + nb) | 0);
                  else
                    (q[(4 + nb) >> 2] = 1828),
                      (q[nb >> 2] = 1846),
                      Y(4, 1087, nb);
                  ab = 0;
                }
                return (L = (64 + nb) | 0), 0 | ab;
              }
              function wa(a) {
                var ab;
                return (
                  (L = ab = (L - 16) | 0),
                  (a = (a |= 0)
                    ? (function (a) {
                        var Th;
                        return (
                          ba((16 + (L = Th = (L - 336) | 0)) | 0, 0, 308),
                          ua((a + 704) | 0, (16 + Th) | 0, (12 + Th) | 0),
                          (L = (336 + Th) | 0),
                          q[(12 + Th) >> 2]
                        );
                      })(a)
                    : ((q[(4 + ab) >> 2] = 1828),
                      (q[ab >> 2] = 1810),
                      Y(4, 1087, ab),
                      0)),
                  (L = (16 + ab) | 0),
                  0 | a
                );
              }
              function xa(a, bb) {
                var ob = 0,
                  pb = 0,
                  qb = 0,
                  rb = 0,
                  sb = 0,
                  tb = 0,
                  ub = 0,
                  vb = 0;
                rb = (a + bb) | 0;
                a: {
                  b: if (!(1 & (ob = q[(a + 4) >> 2]))) {
                    if (!(3 & ob)) break a;
                    if (
                      ((bb = ((ob = q[a >> 2]) + bb) | 0),
                      (0 | (a = (a - ob) | 0)) == q[1928])
                    ) {
                      if (3 == (3 & (ob = q[(rb + 4) >> 2])))
                        return (
                          (q[1925] = bb),
                          (q[(rb + 4) >> 2] = -2 & ob),
                          (q[(a + 4) >> 2] = 1 | bb),
                          void (q[rb >> 2] = bb)
                        );
                    } else {
                      if (ob >>> 0 <= 255) {
                        if (
                          ((qb = ob >>> 3),
                          (ob = q[(a + 8) >> 2]),
                          (0 | (pb = q[(a + 12) >> 2])) == (0 | ob))
                        ) {
                          (ub = 7692),
                            (vb = q[1923] & jc(qb)),
                            (q[ub >> 2] = vb);
                          break b;
                        }
                        (q[(ob + 12) >> 2] = pb), (q[(pb + 8) >> 2] = ob);
                        break b;
                      }
                      if (
                        ((tb = q[(a + 24) >> 2]),
                        (0 | (ob = q[(a + 12) >> 2])) == (0 | a))
                      )
                        if (
                          (qb = q[(pb = (a + 20) | 0) >> 2]) ||
                          (qb = q[(pb = (a + 16) | 0) >> 2])
                        ) {
                          for (
                            ;
                            (sb = pb),
                              (qb = q[(pb = ((ob = qb) + 20) | 0) >> 2]) ||
                                ((pb = (ob + 16) | 0),
                                (qb = q[(ob + 16) >> 2]));

                          );
                          q[sb >> 2] = 0;
                        } else ob = 0;
                      else
                        (pb = q[(a + 8) >> 2]),
                          (q[(pb + 12) >> 2] = ob),
                          (q[(ob + 8) >> 2] = pb);
                      if (!tb) break b;
                      pb = q[(a + 28) >> 2];
                      e: {
                        if (q[(qb = (7996 + (pb << 2)) | 0) >> 2] == (0 | a)) {
                          if ((q[qb >> 2] = ob)) break e;
                          (ub = 7696),
                            (vb = q[1924] & jc(pb)),
                            (q[ub >> 2] = vb);
                          break b;
                        }
                        if (
                          !(q[
                            (tb + (q[(tb + 16) >> 2] == (0 | a) ? 16 : 20)) >> 2
                          ] = ob)
                        )
                          break b;
                      }
                      if (
                        ((q[(ob + 24) >> 2] = tb),
                        (pb = q[(a + 16) >> 2]) &&
                          ((q[(ob + 16) >> 2] = pb), (q[(pb + 24) >> 2] = ob)),
                        !(pb = q[(a + 20) >> 2]))
                      )
                        break b;
                      (q[(ob + 20) >> 2] = pb), (q[(pb + 24) >> 2] = ob);
                    }
                  }
                  f: {
                    if (!(2 & (ob = q[(rb + 4) >> 2]))) {
                      if (q[1929] == (0 | rb)) {
                        if (
                          ((q[1929] = a),
                          (bb = (q[1926] + bb) | 0),
                          (q[1926] = bb),
                          (q[(a + 4) >> 2] = 1 | bb),
                          q[1928] != (0 | a))
                        )
                          break a;
                        return (q[1925] = 0), void (q[1928] = 0);
                      }
                      if (q[1928] == (0 | rb))
                        return (
                          (q[1928] = a),
                          (bb = (q[1925] + bb) | 0),
                          (q[1925] = bb),
                          (q[(a + 4) >> 2] = 1 | bb),
                          void (q[(a + bb) >> 2] = bb)
                        );
                      bb = ((-8 & ob) + bb) | 0;
                      g: if (ob >>> 0 <= 255) {
                        if (
                          ((qb = ob >>> 3),
                          (ob = q[(rb + 8) >> 2]),
                          (0 | (pb = q[(rb + 12) >> 2])) == (0 | ob))
                        ) {
                          (ub = 7692),
                            (vb = q[1923] & jc(qb)),
                            (q[ub >> 2] = vb);
                          break g;
                        }
                        (q[(ob + 12) >> 2] = pb), (q[(pb + 8) >> 2] = ob);
                      } else {
                        if (
                          ((tb = q[(rb + 24) >> 2]),
                          (0 | rb) == (0 | (ob = q[(rb + 12) >> 2])))
                        )
                          if (
                            (qb = q[(pb = (rb + 20) | 0) >> 2]) ||
                            (qb = q[(pb = (rb + 16) | 0) >> 2])
                          ) {
                            for (
                              ;
                              (sb = pb),
                                (qb = q[(pb = ((ob = qb) + 20) | 0) >> 2]) ||
                                  ((pb = (ob + 16) | 0),
                                  (qb = q[(ob + 16) >> 2]));

                            );
                            q[sb >> 2] = 0;
                          } else ob = 0;
                        else
                          (pb = q[(rb + 8) >> 2]),
                            (q[(pb + 12) >> 2] = ob),
                            (q[(ob + 8) >> 2] = pb);
                        if (tb) {
                          pb = q[(rb + 28) >> 2];
                          j: {
                            if (
                              q[(qb = (7996 + (pb << 2)) | 0) >> 2] ==
                              (0 | rb)
                            ) {
                              if ((q[qb >> 2] = ob)) break j;
                              (ub = 7696),
                                (vb = q[1924] & jc(pb)),
                                (q[ub >> 2] = vb);
                              break g;
                            }
                            if (
                              !(q[
                                (tb +
                                  (q[(tb + 16) >> 2] == (0 | rb) ? 16 : 20)) >>
                                  2
                              ] = ob)
                            )
                              break g;
                          }
                          (q[(ob + 24) >> 2] = tb),
                            (pb = q[(rb + 16) >> 2]) &&
                              ((q[(ob + 16) >> 2] = pb),
                              (q[(pb + 24) >> 2] = ob)),
                            (pb = q[(rb + 20) >> 2]) &&
                              ((q[(ob + 20) >> 2] = pb),
                              (q[(pb + 24) >> 2] = ob));
                        }
                      }
                      if (
                        ((q[(a + 4) >> 2] = 1 | bb),
                        (q[(a + bb) >> 2] = bb),
                        q[1928] != (0 | a))
                      )
                        break f;
                      return void (q[1925] = bb);
                    }
                    (q[(rb + 4) >> 2] = -2 & ob),
                      (q[(a + 4) >> 2] = 1 | bb),
                      (q[(a + bb) >> 2] = bb);
                  }
                  if (bb >>> 0 <= 255)
                    return (
                      (bb = (7732 + ((ob = bb >>> 3) << 3)) | 0),
                      (ob =
                        (pb = q[1923]) & (ob = 1 << ob)
                          ? q[(bb + 8) >> 2]
                          : ((q[1923] = ob | pb), bb)),
                      (q[(bb + 8) >> 2] = a),
                      (q[(ob + 12) >> 2] = a),
                      (q[(a + 12) >> 2] = bb),
                      void (q[(a + 8) >> 2] = ob)
                    );
                  (q[(a + 16) >> 2] = 0),
                    (ob = q[(a + 20) >> 2] = 0),
                    (qb = bb >>> 8) &&
                      ((ob = 31),
                      16777215 < bb >>> 0 ||
                        (ob =
                          (28 +
                            (((ob =
                              ((((rb =
                                (qb <<= sb = ((qb + 1048320) >>> 16) & 8) <<
                                (ob = ((qb + 520192) >>> 16) & 4)) <<
                                (qb = ((rb + 245760) >>> 16) & 2)) >>>
                                15) -
                                (qb | ob | sb)) |
                              0) <<
                              1) |
                              ((bb >>> (ob + 21)) & 1))) |
                          0)),
                    (qb = (7996 + ((q[((pb = a) + 28) >> 2] = ob) << 2)) | 0);
                  m: {
                    if ((pb = q[1924]) & (sb = 1 << ob)) {
                      for (
                        pb = bb << (31 == (0 | ob) ? 0 : (25 - (ob >>> 1)) | 0),
                          ob = q[qb >> 2];
                        ;

                      ) {
                        if ((-8 & q[((qb = ob) + 4) >> 2]) == (0 | bb)) break m;
                        if (
                          ((ob = pb >>> 29),
                          (pb <<= 1),
                          !(ob = q[(16 + (sb = (qb + (4 & ob)) | 0)) >> 2]))
                        )
                          break;
                      }
                      q[(sb + 16) >> 2] = a;
                    } else (q[1924] = pb | sb), (q[qb >> 2] = a);
                    return (
                      (q[(a + 24) >> 2] = qb),
                      (q[(a + 12) >> 2] = a),
                      void (q[(a + 8) >> 2] = a)
                    );
                  }
                  (bb = q[(qb + 8) >> 2]),
                    (q[(bb + 12) >> 2] = a),
                    (q[(qb + 8) >> 2] = a),
                    (q[(a + 24) >> 2] = 0),
                    (q[(a + 12) >> 2] = qb),
                    (q[(a + 8) >> 2] = bb);
                }
              }
              function ya(a, bb, wb) {
                var xb = 0;
                a: {
                  if (8 != (0 | bb)) {
                    if (
                      ((xb = 28),
                      (3 & bb) |
                        (1 !=
                          (0 |
                            (function (a) {
                              for (var qi = 0, si = 0; (si = qi), a; )
                                (a &= a - 1), (qi = (qi + 1) | 0);
                              return si;
                            })(bb >>> 2))))
                    )
                      break a;
                    if (((xb = 48), (-64 - bb) >>> 0 < wb >>> 0)) break a;
                    bb = (function (a, _h) {
                      var $h = 0,
                        ai = 0,
                        ci = 0,
                        di = 0,
                        ei = 0;
                      if (((ai = a >>> 0 > ($h = 16) ? a : 16) + -1) & ai)
                        for (; ($h = (a = $h) << 1), a >>> 0 < ai >>> 0; );
                      else a = ai;
                      return (-64 - a) >>> 0 <= _h >>> 0
                        ? ((q[1906] = 48), 0)
                        : ($h = ja(
                            (12 +
                              (((ai = _h >>> 0 < 11 ? 16 : (_h + 11) & -8) +
                                a) |
                                0)) |
                              0
                          ))
                        ? ((_h = ($h + -8) | 0),
                          $h & (a + -1)
                            ? ((ci =
                                ((-8 & (ei = q[(di = ($h + -4) | 0) >> 2])) -
                                  ($h =
                                    ((a =
                                      15 <
                                      (($h =
                                        (((((a + $h) | 0) - 1) & (0 - a)) - 8) |
                                        0) -
                                        _h) >>>
                                        0
                                        ? $h
                                        : (a + $h) | 0) -
                                      _h) |
                                    0)) |
                                0),
                              3 & ei
                                ? ((q[(a + 4) >> 2] =
                                    ci | (1 & q[(a + 4) >> 2]) | 2),
                                  (q[(4 + (ci = (a + ci) | 0)) >> 2] =
                                    1 | q[(ci + 4) >> 2]),
                                  (q[di >> 2] = $h | (1 & q[di >> 2]) | 2),
                                  (q[(a + 4) >> 2] = 1 | q[(a + 4) >> 2]),
                                  xa(_h, $h))
                                : ((_h = q[_h >> 2]),
                                  (q[(a + 4) >> 2] = ci),
                                  (q[a >> 2] = _h + $h)))
                            : (a = _h),
                          3 & (_h = q[(a + 4) >> 2]) &&
                            (($h = -8 & _h) >>> 0 <= (ai + 16) >>> 0 ||
                              ((q[(a + 4) >> 2] = ai | (1 & _h) | 2),
                              (_h = (a + ai) | 0),
                              (ai = ($h - ai) | 0),
                              (q[(_h + 4) >> 2] = 3 | ai),
                              (q[(4 + ($h = (a + $h) | 0)) >> 2] =
                                1 | q[($h + 4) >> 2]),
                              xa(_h, ai))),
                          (a + 8) | 0)
                        : 0;
                    })(16 < bb >>> 0 ? bb : 16, wb);
                  } else bb = ja(wb);
                  if (!bb) return 1;
                  (q[a >> 2] = bb), (xb = 0);
                }
                return xb;
              }
              function za(a) {
                var bb = 0,
                  wb = 0,
                  yb = 0,
                  zb = 0,
                  Ab = 0,
                  Bb = 0,
                  Cb = 0,
                  Db = 0,
                  Eb = 0;
                a: if (a) {
                  Ab =
                    ((yb = (a + -8) | 0) + (a = -8 & (wb = q[(a + -4) >> 2]))) |
                    0;
                  b: if (!(1 & wb)) {
                    if (!(3 & wb)) break a;
                    if ((yb = (yb - (wb = q[yb >> 2])) | 0) >>> 0 < t[1927])
                      break a;
                    if (((a = (a + wb) | 0), q[1928] == (0 | yb))) {
                      if (3 == (3 & (wb = q[(Ab + 4) >> 2])))
                        return (
                          (q[1925] = a),
                          (q[(Ab + 4) >> 2] = -2 & wb),
                          (q[(yb + 4) >> 2] = 1 | a),
                          void (q[(a + yb) >> 2] = a)
                        );
                    } else {
                      if (wb >>> 0 <= 255) {
                        if (
                          ((zb = q[(yb + 8) >> 2]),
                          (wb >>>= 3),
                          (0 | (bb = q[(yb + 12) >> 2])) == (0 | zb))
                        ) {
                          (Db = 7692),
                            (Eb = q[1923] & jc(wb)),
                            (q[Db >> 2] = Eb);
                          break b;
                        }
                        (q[(zb + 12) >> 2] = bb), (q[(bb + 8) >> 2] = zb);
                        break b;
                      }
                      if (
                        ((Cb = q[(yb + 24) >> 2]),
                        (0 | yb) == (0 | (wb = q[(yb + 12) >> 2])))
                      )
                        if (
                          (bb = q[(zb = (yb + 20) | 0) >> 2]) ||
                          (bb = q[(zb = (yb + 16) | 0) >> 2])
                        ) {
                          for (
                            ;
                            (Bb = zb),
                              (bb = q[(zb = ((wb = bb) + 20) | 0) >> 2]) ||
                                ((zb = (wb + 16) | 0),
                                (bb = q[(wb + 16) >> 2]));

                          );
                          q[Bb >> 2] = 0;
                        } else wb = 0;
                      else
                        (bb = q[(yb + 8) >> 2]),
                          (q[(bb + 12) >> 2] = wb),
                          (q[(wb + 8) >> 2] = bb);
                      if (!Cb) break b;
                      zb = q[(yb + 28) >> 2];
                      e: {
                        if (q[(bb = (7996 + (zb << 2)) | 0) >> 2] == (0 | yb)) {
                          if ((q[bb >> 2] = wb)) break e;
                          (Db = 7696),
                            (Eb = q[1924] & jc(zb)),
                            (q[Db >> 2] = Eb);
                          break b;
                        }
                        if (
                          !(q[
                            (Cb + (q[(Cb + 16) >> 2] == (0 | yb) ? 16 : 20)) >>
                              2
                          ] = wb)
                        )
                          break b;
                      }
                      if (
                        ((q[(wb + 24) >> 2] = Cb),
                        (bb = q[(yb + 16) >> 2]) &&
                          ((q[(wb + 16) >> 2] = bb), (q[(bb + 24) >> 2] = wb)),
                        !(bb = q[(yb + 20) >> 2]))
                      )
                        break b;
                      (q[(wb + 20) >> 2] = bb), (q[(bb + 24) >> 2] = wb);
                    }
                  }
                  if (!(Ab >>> 0 <= yb >>> 0) && 1 & (wb = q[(Ab + 4) >> 2])) {
                    f: {
                      if (!(2 & wb)) {
                        if (q[1929] == (0 | Ab)) {
                          if (
                            ((q[1929] = yb),
                            (a = (q[1926] + a) | 0),
                            (q[1926] = a),
                            (q[(yb + 4) >> 2] = 1 | a),
                            q[1928] != (0 | yb))
                          )
                            break a;
                          return (q[1925] = 0), void (q[1928] = 0);
                        }
                        if (q[1928] == (0 | Ab))
                          return (
                            (q[1928] = yb),
                            (a = (q[1925] + a) | 0),
                            (q[1925] = a),
                            (q[(yb + 4) >> 2] = 1 | a),
                            void (q[(a + yb) >> 2] = a)
                          );
                        a = ((-8 & wb) + a) | 0;
                        g: if (wb >>> 0 <= 255) {
                          if (
                            ((wb >>>= 3),
                            (0 | (bb = q[(Ab + 8) >> 2])) ==
                              (0 | (zb = q[(Ab + 12) >> 2])))
                          ) {
                            (Db = 7692),
                              (Eb = q[1923] & jc(wb)),
                              (q[Db >> 2] = Eb);
                            break g;
                          }
                          (q[(bb + 12) >> 2] = zb), (q[(zb + 8) >> 2] = bb);
                        } else {
                          if (
                            ((Cb = q[(Ab + 24) >> 2]),
                            (0 | Ab) == (0 | (wb = q[(Ab + 12) >> 2])))
                          )
                            if (
                              (bb = q[(zb = (Ab + 20) | 0) >> 2]) ||
                              (bb = q[(zb = (Ab + 16) | 0) >> 2])
                            ) {
                              for (
                                ;
                                (Bb = zb),
                                  (bb = q[(zb = ((wb = bb) + 20) | 0) >> 2]) ||
                                    ((zb = (wb + 16) | 0),
                                    (bb = q[(wb + 16) >> 2]));

                              );
                              q[Bb >> 2] = 0;
                            } else wb = 0;
                          else
                            (bb = q[(Ab + 8) >> 2]),
                              (q[(bb + 12) >> 2] = wb),
                              (q[(wb + 8) >> 2] = bb);
                          if (Cb) {
                            zb = q[(Ab + 28) >> 2];
                            j: {
                              if (
                                q[(bb = (7996 + (zb << 2)) | 0) >> 2] ==
                                (0 | Ab)
                              ) {
                                if ((q[bb >> 2] = wb)) break j;
                                (Db = 7696),
                                  (Eb = q[1924] & jc(zb)),
                                  (q[Db >> 2] = Eb);
                                break g;
                              }
                              if (
                                !(q[
                                  (Cb +
                                    (q[(Cb + 16) >> 2] == (0 | Ab)
                                      ? 16
                                      : 20)) >>
                                    2
                                ] = wb)
                              )
                                break g;
                            }
                            (q[(wb + 24) >> 2] = Cb),
                              (bb = q[(Ab + 16) >> 2]) &&
                                ((q[(wb + 16) >> 2] = bb),
                                (q[(bb + 24) >> 2] = wb)),
                              (bb = q[(Ab + 20) >> 2]) &&
                                ((q[(wb + 20) >> 2] = bb),
                                (q[(bb + 24) >> 2] = wb));
                          }
                        }
                        if (
                          ((q[(yb + 4) >> 2] = 1 | a),
                          (q[(a + yb) >> 2] = a),
                          q[1928] != (0 | yb))
                        )
                          break f;
                        return void (q[1925] = a);
                      }
                      (q[(Ab + 4) >> 2] = -2 & wb),
                        (q[(yb + 4) >> 2] = 1 | a),
                        (q[(a + yb) >> 2] = a);
                    }
                    if (a >>> 0 <= 255)
                      return (
                        (wb = (7732 + ((a >>>= 3) << 3)) | 0),
                        (a =
                          (bb = q[1923]) & (a = 1 << a)
                            ? q[(wb + 8) >> 2]
                            : ((q[1923] = a | bb), wb)),
                        (q[(wb + 8) >> 2] = yb),
                        (q[(a + 12) >> 2] = yb),
                        (q[(yb + 12) >> 2] = wb),
                        void (q[(yb + 8) >> 2] = a)
                      );
                    (q[(yb + 16) >> 2] = 0),
                      (bb = q[(yb + 20) >> 2] = 0),
                      (zb = a >>> 8) &&
                        ((bb = 31),
                        16777215 < a >>> 0 ||
                          ((bb = zb),
                          (bb <<= zb = ((zb + 1048320) >>> 16) & 8),
                          (bb =
                            (28 +
                              (((bb =
                                ((((bb <<= Cb = ((bb + 520192) >>> 16) & 4) <<
                                  (Bb = ((bb + 245760) >>> 16) & 2)) >>>
                                  15) -
                                  (Bb | zb | Cb)) |
                                0) <<
                                1) |
                                ((a >>> (bb + 21)) & 1))) |
                            0))),
                      (Bb =
                        (7996 + ((q[((wb = yb) + 28) >> 2] = bb) << 2)) | 0);
                    m: if ((zb = q[1924]) & (wb = 1 << bb)) {
                      (zb = a << (31 == (0 | bb) ? 0 : (25 - (bb >>> 1)) | 0)),
                        (wb = q[Bb >> 2]);
                      n: {
                        for (;;) {
                          if ((-8 & q[((bb = wb) + 4) >> 2]) == (0 | a))
                            break n;
                          if (
                            ((wb = zb >>> 29),
                            (zb <<= 1),
                            !(wb = q[(16 + (Bb = (bb + (4 & wb)) | 0)) >> 2]))
                          )
                            break;
                        }
                        (q[(Bb + 16) >> 2] = yb),
                          (q[(yb + 12) >> 2] = yb),
                          (q[(yb + 24) >> 2] = bb),
                          (q[(yb + 8) >> 2] = yb);
                        break m;
                      }
                      (a = q[(bb + 8) >> 2]),
                        (q[(a + 12) >> 2] = yb),
                        (q[(bb + 8) >> 2] = yb),
                        (q[(yb + 24) >> 2] = 0),
                        (q[(yb + 12) >> 2] = bb),
                        (q[(yb + 8) >> 2] = a);
                    } else
                      (q[1924] = wb | zb),
                        (q[Bb >> 2] = yb),
                        (q[(yb + 12) >> 2] = yb),
                        (q[(yb + 24) >> 2] = Bb),
                        (q[(yb + 8) >> 2] = yb);
                    if (((a = (q[1931] + -1) | 0), !(q[1931] = a))) {
                      for (yb = 8148; (yb = ((a = q[yb >> 2]) + 8) | 0), a; );
                      q[1931] = -1;
                    }
                  }
                }
              }
              function Aa(a, Fb) {
                var Lb,
                  Ib,
                  Gb = 0,
                  Hb = 0,
                  Jb = 0,
                  Kb = x(0);
                if (
                  (j(Fb),
                  !(
                    (Ib = 2147483647 & (Gb = e(0))) >>> 0 <= 2139095040 &&
                    (j(a), (Hb = 2147483647 & (Jb = e(0))) >>> 0 < 2139095041)
                  ))
                )
                  return x(a + Fb);
                if (1065353216 == (0 | Gb)) return ka(a);
                Gb = (Lb = (Gb >>> 30) & 2) | (Jb >>> 31);
                b: {
                  c: {
                    d: {
                      e: {
                        if (!Hb) {
                          f: switch ((Gb - 2) | 0) {
                            case 0:
                              break e;
                            case 1:
                              break f;
                            default:
                              break d;
                          }
                          return x(-3.1415927410125732);
                        }
                        if (2139095040 != (0 | Ib)) {
                          if (
                            !Ib |
                            !(
                              Hb >>> 0 <= (218103808 + Ib) >>> 0 &&
                              2139095040 != (0 | Hb)
                            )
                          )
                            break b;
                          if (
                            (((Hb + 218103808) >>> 0 < Ib >>> 0 &&
                              ((Kb = x(0)), Lb)) ||
                              (Kb = ka(x(y(x(a / Fb))))),
                            (a = Kb),
                            Gb >>> 0 <= 2)
                          ) {
                            h: switch ((Gb - 1) | 0) {
                              case 0:
                                return x(-a);
                              case 1:
                                break h;
                              default:
                                break d;
                            }
                            return x(
                              x(3.1415927410125732) -
                                x(a + x(8.742277657347586e-8))
                            );
                          }
                          return x(
                            x(a + x(8.742277657347586e-8)) +
                              x(-3.1415927410125732)
                          );
                        }
                        if (2139095040 == (0 | Hb)) break c;
                        return u[(6128 + (Gb << 2)) >> 2];
                      }
                      a = x(3.1415927410125732);
                    }
                    return a;
                  }
                  return u[(6112 + (Gb << 2)) >> 2];
                }
                return x(
                  (0 | Jb) < 0 ? -1.5707963705062866 : 1.5707963705062866
                );
              }
              function Da(a, Ub, Vb) {
                var Zb,
                  bc,
                  gc,
                  hc,
                  kc,
                  Wb = 0,
                  Xb = 0,
                  Yb = 0,
                  _b = 0,
                  $b = 0,
                  ac = 0,
                  cc = 0,
                  dc = 0,
                  ec = 0,
                  fc = 0,
                  ic = 0,
                  jc = 0;
                if (
                  ((L = Zb = (L - 560) | 0),
                  (cc =
                    ((Xb = Vb) +
                      w(
                        (gc =
                          0 < (0 | (Vb = (((Vb + -3) | 0) / 24) | 0)) ? Vb : 0),
                        -24
                      )) |
                    0),
                  0 <= (0 | (bc = q[808])))
                )
                  for (
                    Xb = (bc + 1) | 0, Vb = gc;
                    (v[(((320 + Zb) | 0) + (Yb << 3)) >> 3] =
                      (0 | Vb) < 0 ? 0 : +q[(3248 + (Vb << 2)) >> 2]),
                      (Vb = (Vb + 1) | 0),
                      (0 | Xb) != (0 | (Yb = (Yb + 1) | 0));

                  );
                for (ac = (cc + -24) | 0, Xb = 0; ; ) {
                  for (
                    Wb = Vb = 0;
                    (Wb +=
                      v[((Vb << 3) + a) >> 3] *
                      v[(((320 + Zb) | 0) + ((Xb - Vb) << 3)) >> 3]),
                      1 != (0 | (Vb = (Vb + 1) | 0));

                  );
                  if (
                    ((v[((Xb << 3) + Zb) >> 3] = Wb),
                    (Vb = (0 | Xb) < (0 | bc)),
                    (Xb = (Xb + 1) | 0),
                    !Vb)
                  )
                    break;
                }
                (kc = (23 - ac) | 0), (hc = (24 - ac) | 0), (Xb = bc);
                a: {
                  for (;;) {
                    if (
                      ((Wb = v[((Xb << 3) + Zb) >> 3]),
                      !(ec = ((Vb = 0) | (Yb = Xb)) < 1))
                    )
                      for (
                        ;
                        ($b = (((480 + Zb) | 0) + (Vb << 2)) | 0),
                          (dc = Wb),
                          (_b =
                            y((Wb *= 5.960464477539063e-8)) < 2147483648
                              ? ~~Wb
                              : -2147483648),
                          (_b =
                            y((dc += -16777216 * (Wb = +(0 | _b)))) < 2147483648
                              ? ~~dc
                              : -2147483648),
                          (q[$b >> 2] = _b),
                          (Wb =
                            v[((($b = (Yb + -1) | 0) << 3) + Zb) >> 3] + Wb),
                          (Vb = (Vb + 1) | 0),
                          (_b = 1 < (0 | Yb)),
                          (Yb = $b),
                          _b;

                      );
                    (Wb = ha(Wb, ac)),
                      (Wb += -8 * C(0.125 * Wb)),
                      (Wb -=
                        0 | ($b = y(Wb) < 2147483648 ? ~~Wb : -2147483648));
                    e: {
                      f: {
                        g: {
                          if ((ic = (0 | ac) < 1)) {
                            if (ac) break g;
                            _b = q[(476 + (((Xb << 2) + Zb) | 0)) >> 2] >> 23;
                          } else
                            (fc = Yb = ((Xb << 2) + Zb) | 0),
                              (Yb =
                                ((_b = q[(Yb + 476) >> 2]) -
                                  ((Vb = _b >> hc) << hc)) |
                                0),
                              ($b = (Vb + $b) | 0),
                              (_b = (q[(fc + 476) >> 2] = Yb) >> kc);
                          if ((0 | _b) < 1) break e;
                          break f;
                        }
                        if (((_b = 2), !(0.5 <= Wb))) {
                          _b = 0;
                          break e;
                        }
                      }
                      if (((Yb = Vb = 0), !ec))
                        for (;;) {
                          (ec =
                            q[(jc = (((480 + Zb) | 0) + (Vb << 2)) | 0) >> 2]),
                            (fc = 16777215);
                          i: {
                            j: {
                              if (!Yb) {
                                if (!ec) break j;
                                (fc = 16777216), (Yb = 1);
                              }
                              q[jc >> 2] = fc - ec;
                              break i;
                            }
                            Yb = 0;
                          }
                          if ((0 | Xb) == (0 | (Vb = (Vb + 1) | 0))) break;
                        }
                      ic ||
                        1 < (Vb = (ac + -1) | 0) >>> 0 ||
                        (q[(476 + (Vb = ((Xb << 2) + Zb) | 0)) >> 2] =
                          Vb - 1
                            ? 8388607 & q[(Vb + 476) >> 2]
                            : 4194303 & q[(Vb + 476) >> 2]),
                        ($b = ($b + 1) | 0),
                        2 == (0 | _b) &&
                          ((Wb = 1 - Wb), (_b = 2), Yb && (Wb -= ha(1, ac)));
                    }
                    if (0 != Wb) break;
                    if (!(((Yb = 0) | (Vb = Xb)) <= (0 | bc))) {
                      for (
                        ;
                        (Yb =
                          q[
                            (((480 + Zb) | 0) + ((Vb = (Vb + -1) | 0) << 2)) >>
                              2
                          ] | Yb),
                          (0 | bc) < (0 | Vb);

                      );
                      if (Yb) {
                        for (
                          cc = ac;
                          (cc = (cc + -24) | 0),
                            !q[
                              (((480 + Zb) | 0) +
                                ((Xb = (Xb + -1) | 0) << 2)) >>
                                2
                            ];

                        );
                        break a;
                      }
                    }
                    for (
                      Vb = 1;
                      (Vb = ((Yb = Vb) + 1) | 0),
                        !q[(((480 + Zb) | 0) + ((bc - Yb) << 2)) >> 2];

                    );
                    for (Yb = (Xb + Yb) | 0; ; ) {
                      for (
                        Xb = $b = (Xb + 1) | 0,
                          v[(((320 + Zb) | 0) + ($b << 3)) >> 3] =
                            q[(3248 + ((gc + Xb) << 2)) >> 2],
                          Wb = Vb = 0;
                        (Wb +=
                          v[((Vb << 3) + a) >> 3] *
                          v[(((320 + Zb) | 0) + (($b - Vb) << 3)) >> 3]),
                          1 != (0 | (Vb = (Vb + 1) | 0));

                      );
                      if (
                        ((v[((Xb << 3) + Zb) >> 3] = Wb),
                        !((0 | Xb) < (0 | Yb)))
                      )
                        break;
                    }
                    Xb = Yb;
                  }
                  16777216 <= (Wb = ha(Wb, (0 - ac) | 0))
                    ? ((a = (((480 + Zb) | 0) + (Xb << 2)) | 0),
                      (dc = Wb),
                      (Vb =
                        y((Wb *= 5.960464477539063e-8)) < 2147483648
                          ? ~~Wb
                          : -2147483648),
                      (Yb =
                        y((Wb = dc + -16777216 * (0 | Vb))) < 2147483648
                          ? ~~Wb
                          : -2147483648),
                      (q[a >> 2] = Yb),
                      (Xb = (Xb + 1) | 0))
                    : ((Vb = y(Wb) < 2147483648 ? ~~Wb : -2147483648),
                      (cc = ac)),
                    (q[(((480 + Zb) | 0) + (Xb << 2)) >> 2] = Vb);
                }
                if (((Wb = ha(1, cc)), !((0 | Xb) <= -1))) {
                  for (
                    Vb = Xb;
                    (v[((Vb << 3) + Zb) >> 3] =
                      Wb * q[(((480 + Zb) | 0) + (Vb << 2)) >> 2]),
                      (Wb *= 5.960464477539063e-8),
                      (a = 0 < (0 | Vb)),
                      (Vb = (Vb + -1) | 0),
                      a;

                  );
                  if (!((0 | Xb) <= -1))
                    for (Vb = Xb; ; ) {
                      for (
                        Yb = (Xb - (a = Vb)) | 0, Vb = Wb = 0;
                        (Wb +=
                          v[(6016 + (Vb << 3)) >> 3] *
                          v[(((a + Vb) << 3) + Zb) >> 3]),
                          !((0 | bc) <= (0 | Vb)) &&
                            ((ac = Vb >>> 0 < Yb >>> 0),
                            (Vb = (Vb + 1) | 0),
                            ac);

                      );
                      if (
                        ((v[(((160 + Zb) | 0) + (Yb << 3)) >> 3] = Wb),
                        (Vb = (a + -1) | 0),
                        !(0 < (0 | a)))
                      )
                        break;
                    }
                }
                if ((Wb = 0) <= (0 | Xb))
                  for (
                    ;
                    (Wb += v[(((160 + Zb) | 0) + (Xb << 3)) >> 3]),
                      (a = 0 < (0 | Xb)),
                      (Xb = (Xb + -1) | 0),
                      a;

                  );
                return (
                  (v[Ub >> 3] = _b ? -Wb : Wb), (L = (560 + Zb) | 0), 7 & $b
                );
              }
              function Ia(a, Ub) {
                var Vb = 0,
                  lc = 0,
                  tc = 0;
                Vb = 0 != (0 | Ub);
                a: {
                  b: {
                    c: {
                      d: if (!(!Ub | !(3 & a)))
                        for (;;) {
                          if (!r[0 | a]) break c;
                          if (
                            ((a = (a + 1) | 0),
                            (Vb = 0 != (0 | (Ub = (Ub + -1) | 0))),
                            !Ub)
                          )
                            break d;
                          if (!(3 & a)) break;
                        }
                      if (!Vb) break b;
                    }
                    if (!r[0 | a]) break a;
                    e: {
                      if (4 <= Ub >>> 0) {
                        for (
                          Vb = ((Vb = (Ub + -4) | 0) - (lc = -4 & Vb)) | 0,
                            lc = (4 + ((a + lc) | 0)) | 0;
                          ;

                        ) {
                          if (
                            (-1 ^ (tc = q[a >> 2])) &
                            (tc + -16843009) &
                            -2139062144
                          )
                            break e;
                          if (
                            ((a = (a + 4) | 0),
                            !(3 < (Ub = (Ub + -4) | 0) >>> 0))
                          )
                            break;
                        }
                        (Ub = Vb), (a = lc);
                      }
                      if (!Ub) break b;
                    }
                    for (;;) {
                      if (!r[0 | a]) break a;
                      if (((a = (a + 1) | 0), !(Ub = (Ub + -1) | 0))) break;
                    }
                  }
                  return 0;
                }
                return a;
              }
              function Na(a, Ub, Fc, Gc) {
                if (a | Ub)
                  for (
                    ;
                    (o[0 | (Fc = (Fc + -1) | 0)] =
                      r[(3168 + (15 & a)) | 0] | Gc),
                      (a = ((15 & Ub) << 28) | (a >>> 4)) | (Ub >>>= 4);

                  );
                return Fc;
              }
              function Oa(a, Ub, Fc) {
                if (a | Ub)
                  for (
                    ;
                    (o[0 | (Fc = (Fc + -1) | 0)] = (7 & a) | 48),
                      (a = ((7 & Ub) << 29) | (a >>> 3)) | (Ub >>>= 3);

                  );
                return Fc;
              }
              function $b(a) {
                var _h = x(0),
                  fi = x(0),
                  gi = 0,
                  hi = 0,
                  ii = x(0),
                  ji = x(0),
                  ki = x(0),
                  li = x(0),
                  mi = 0,
                  ni = x(0),
                  oi = x(0),
                  pi = 0;
                a: {
                  b: {
                    if ((j(a), (hi = 2147483647 & (gi = e(0))))) {
                      if (!(hi >>> 0 < 2139095041))
                        return x(x(0.10000000149011612) + a);
                      if (1065353216 == (0 | hi))
                        return x(-1 < (0 | gi) ? 0.10000000149011612 : 10);
                      if (2139095040 == (0 | hi))
                        return x(-1 < (0 | gi) ? 0 : -a);
                      if (1073741824 == (0 | gi))
                        return x(0.010000000707805157);
                      if (1056964608 == (0 | gi)) return x(0.3162277638912201);
                      if (1291845633 <= hi >>> 0)
                        return x((0 | gi) < 0 ? H : 0);
                      if (
                        ((ii = u[1537]),
                        (ji = x(x(1.600000023841858) - ii)),
                        (ki = x(x(1) / x(ii + x(1.600000023841858)))),
                        f(0, -4096 & (j((fi = x(ji * ki))), e(0))),
                        (_h = k()),
                        (li = x(_h * _h)),
                        (oi = u[1541]),
                        (ii = x(
                          ki *
                            x(
                              x(ji - x((ni = _h) * x(3.099609375))) -
                                x(
                                  _h *
                                    x(
                                      x(1.600000023841858) -
                                        x(x(3.099609375) - ii)
                                    )
                                )
                            )
                        )),
                        (ki = x(x(fi + _h) * ii)),
                        (_h = x(fi * fi)),
                        (ji = x(
                          ki +
                            x(
                              x(_h * _h) *
                                x(
                                  x(
                                    _h *
                                      x(
                                        x(
                                          _h *
                                            x(
                                              x(
                                                _h *
                                                  x(
                                                    x(
                                                      _h *
                                                        x(
                                                          x(
                                                            _h *
                                                              x(
                                                                0.20697501301765442
                                                              )
                                                          ) +
                                                            x(
                                                              0.23066075146198273
                                                            )
                                                        )
                                                    ) + x(0.2727281153202057)
                                                  )
                                              ) + x(0.3333333432674408)
                                            )
                                        ) + x(0.4285714328289032)
                                      )
                                  ) + x(0.6000000238418579)
                                )
                            )
                        )),
                        f(0, -4096 & (j(x(x(li + x(3)) + ji)), e(0))),
                        (_h = k()),
                        (ki = x(ni * _h)),
                        (fi = x(
                          x(ii * _h) + x(fi * x(ji - x(x(_h + x(-3)) - li)))
                        )),
                        f(0, -4096 & (j(x(ki + fi)), e(0))),
                        (_h = k()),
                        (ii = x(_h * x(0.9619140625))),
                        (li = x(
                          u[1539] +
                            x(
                              x(x(fi - x(_h - ki)) * x(0.9617967009544373)) +
                                x(_h * x(-0.00011736857413779944))
                            )
                        )),
                        f(0, -4096 & (j(x(x(oi + x(ii + li)) + x(-4))), e(0))),
                        (fi = k()),
                        f(0, -4096 & gi),
                        (ji = k()),
                        (_h = x(fi * ji)),
                        (a = x(
                          x(x(li - x(x(x(fi - x(-4)) - oi) - ii)) * a) +
                            x(x(a - ji) * fi)
                        )),
                        j((fi = x(_h + a))),
                        1124073473 <= (0 | (gi = e(0))))
                      )
                        break b;
                      d: {
                        e: {
                          if ((hi = 1124073472) == (0 | gi)) {
                            if (!(x(a + x(4.299566569443414e-8)) > x(fi - _h)))
                              break e;
                            break b;
                          }
                          if (
                            ((hi = 2147483647 & gi),
                            !(
                              ((a <= x(fi - _h)) ^ 1) |
                              (-1021968384 != (0 | gi))
                            ) |
                              (1125515265 <= hi >>> 0))
                          )
                            break a;
                          if (hi >>> 0 < 1056964609) break d;
                        }
                        (mi =
                          ((8388607 &
                            (hi =
                              ((8388608 >>> ((hi >>> 23) - 126)) + gi) | 0)) |
                            8388608) >>>
                          (150 - (pi = (hi >>> 23) & 255))),
                          (mi = (0 | gi) < 0 ? (0 - mi) | 0 : mi),
                          (_h = x(
                            _h - (f(0, hi & (-8388608 >> (pi + -127))), k())
                          )),
                          j(x(a + _h)),
                          (gi = e(0));
                      }
                      f(0, -32768 & gi),
                        (fi = k()),
                        (ii = x(fi * x(0.693145751953125))),
                        (fi = x(
                          x(fi * x(14286065379565116e-22)) +
                            x(x(a - x(fi - _h)) * x(0.6931471824645996))
                        )),
                        (a = x(ii + fi)),
                        (_h = x(a * a)),
                        (_h = x(
                          a -
                            x(
                              _h *
                                x(
                                  x(
                                    _h *
                                      x(
                                        x(
                                          _h *
                                            x(
                                              x(
                                                _h *
                                                  x(
                                                    x(
                                                      _h *
                                                        x(4.138136944220605e-8)
                                                    ) +
                                                      x(-16533901998627698e-22)
                                                  )
                                              ) + x(661375597701408e-19)
                                            )
                                        ) + x(-0.0027777778450399637)
                                      )
                                  ) + x(0.1666666716337204)
                                )
                            )
                        )),
                        (ni = x(x(a * _h) / x(_h + x(-2)))),
                        (_h = x(fi - x(a - ii))),
                        (a =
                          (0 |
                            (gi =
                              0 |
                              (j(
                                (a = x(x(a - x(ni - x(_h + x(a * _h)))) + x(1)))
                              ),
                              e(0) + (mi << 23)))) <=
                          8388607
                            ? (function (a, qi) {
                                a: if (128 <= (0 | qi)) {
                                  if (
                                    ((a = x(a * x(17014118346046923e22))),
                                    (0 | qi) < 255)
                                  ) {
                                    qi = (qi + -127) | 0;
                                    break a;
                                  }
                                  (a = x(a * x(17014118346046923e22))),
                                    (qi =
                                      (((0 | qi) < 381 ? qi : 381) + -254) | 0);
                                } else
                                  -127 < (0 | qi) ||
                                    ((a = x(a * x(11754943508222875e-54))),
                                    (qi =
                                      -253 < (0 | qi)
                                        ? (qi + 126) | 0
                                        : ((a = x(
                                            a * x(11754943508222875e-54)
                                          )),
                                          ((-378 < (0 | qi) ? qi : -378) +
                                            252) |
                                            0)));
                                return x(
                                  a * (f(0, (1065353216 + (qi << 23)) | 0), k())
                                );
                              })(a, mi)
                            : (f(0, gi), k())),
                        (a = x(x(1) * a));
                    } else a = x(1);
                    return a;
                  }
                  return x(H);
                }
                return x(0);
              }
              function dc(a, qi) {
                var low, high;
                (low = 0 | a), (high = 0 | qi), (b[0] = low), (b[1] = high);
              }
              function gc(a, qi, si) {
                return (function (a, qi, si) {
                  var ui,
                    vi,
                    wi,
                    xi,
                    ti = 0;
                  return (
                    (xi = w((ui = si >>> 16), (ti = a >>> 16))),
                    (a =
                      ((65535 &
                        (ti =
                          (((wi = w((vi = 65535 & si), (a &= 65535))) >>> 16) +
                            w(ti, vi)) |
                          0)) +
                        w(a, ui)) |
                      0),
                    (M =
                      (((((xi + w(qi, si)) | 0) + (ti >>> 16)) | 0) +
                        (a >>> 16)) |
                      0),
                    (65535 & wi) | (a << 16)
                  );
                })(a, qi, si);
              }
              function hc(a, qi, si) {
                return (function (a, qi, si) {
                  var yi = 0,
                    zi = 0,
                    Ai = 0,
                    Bi = 0,
                    Ci = 0,
                    Di = 0,
                    Ei = 0,
                    Fi = 0,
                    Gi = 0;
                  a: {
                    b: {
                      c: {
                        d: {
                          e: {
                            f: {
                              g: {
                                h: {
                                  i: {
                                    if ((zi = qi)) {
                                      if (!(yi = si)) break i;
                                      break h;
                                    }
                                    return (
                                      dc(
                                        ((qi = a) -
                                          w(
                                            (a = ((a >>> 0) / (si >>> 0)) | 0),
                                            si
                                          )) |
                                          0,
                                        0
                                      ),
                                      (M = 0),
                                      a
                                    );
                                  }
                                  if (!a) break g;
                                  break f;
                                }
                                if (!((Bi = (yi + -1) | 0) & yi)) break e;
                                Ci =
                                  (0 -
                                    (Bi = (((z(yi) + 33) | 0) - z(zi)) | 0)) |
                                  0;
                                break c;
                              }
                              return (
                                dc(
                                  0,
                                  (zi - w((a = ((zi >>> 0) / 0) | 0), 0)) | 0
                                ),
                                (M = 0),
                                a
                              );
                            }
                            if ((yi = (32 - z(zi)) | 0) >>> 0 < 31) break d;
                            break b;
                          }
                          if ((dc(a & Bi, 0), 1 == (0 | yi))) break a;
                          return (
                            (si =
                              31 &
                              (yi = yi ? (31 - z((yi + -1) ^ yi)) | 0 : 32)),
                            (a =
                              32 <= (63 & yi) >>> 0
                                ? ((zi = 0), qi >>> si)
                                : ((zi = qi >>> si),
                                  ((((1 << si) - 1) & qi) << (32 - si)) |
                                    (a >>> si))),
                            (M = zi),
                            a
                          );
                        }
                        (Bi = (yi + 1) | 0), (Ci = (63 - yi) | 0);
                      }
                      if (
                        ((yi = qi),
                        (Ai = 31 & (zi = 63 & Bi)),
                        (Ai =
                          32 <= zi >>> 0
                            ? ((zi = 0), yi >>> Ai)
                            : ((zi = yi >>> Ai),
                              ((((1 << Ai) - 1) & yi) << (32 - Ai)) |
                                (a >>> Ai))),
                        (yi = 31 & (Ci &= 63)),
                        32 <= Ci >>> 0
                          ? ((qi = a << yi), (a = 0))
                          : ((qi =
                              (((1 << yi) - 1) & (a >>> (32 - yi))) |
                              (qi << yi)),
                            (a <<= yi)),
                        Bi)
                      )
                        for (
                          (Ci = (si + (yi = -1)) | 0) >>> 0 < 4294967295 &&
                          (yi = 0);
                          (Ai =
                            ((Ei = Di = (Ai << 1) | (qi >>> 31)) -
                              (Fi =
                                si &
                                (Di =
                                  (yi -
                                    (((zi = (zi << 1) | (Ai >>> 31)) +
                                      (Ci >>> 0 < Di >>> 0)) |
                                      0)) >>
                                  31))) |
                            0),
                            (zi = (zi - (Ei >>> 0 < Fi >>> 0)) | 0),
                            (qi = (qi << 1) | (a >>> 31)),
                            (a = Gi | (a << 1)),
                            (Gi = Di &= 1),
                            (Bi = (Bi + -1) | 0);

                        );
                      return (
                        dc(Ai, zi), (M = (qi << 1) | (a >>> 31)), Di | (a << 1)
                      );
                    }
                    dc(a, qi), (qi = a = 0);
                  }
                  return (M = qi), a;
                })(a, qi, si);
              }
              function jc(a) {
                var Hi;
                return (
                  (((-1 >>> (Hi = 31 & a)) & -2) << Hi) |
                  (((-1 << (a = (0 - a) & 31)) & -2) >>> a)
                );
              }
              function N() {
                return (buffer.byteLength / 65536) | 0;
              }
            })(H, I, J),
          };
        }
        (l = null), b.wasmBinary && (F = b.wasmBinary);
        var fa = Error,
          WebAssembly = {};
        (F = []),
          "object" != typeof WebAssembly &&
            E("no native wasm support detected");
        var I,
          J = new (function (a) {
            var c = Array(17);
            return (
              (c.grow = function () {
                18 <= c.length &&
                  B(
                    "Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH."
                  ),
                  c.push(null);
              }),
              (c.set = function (a, e) {
                c[a] = e;
              }),
              (c.get = function (a) {
                return c[a];
              }),
              c
            );
          })({ initial: 17, maximum: 18, element: "anyfunc" }),
          K = !1;
        function assert(a, c) {
          a || B("Assertion failed: " + c);
        }
        var buffer,
          M,
          L,
          N,
          ia =
            "undefined" != typeof TextDecoder
              ? new TextDecoder("utf8")
              : void 0;
        function ja(a, c, d) {
          var e = c + d;
          for (d = c; a[d] && !(e <= d); ) ++d;
          if (16 < d - c && a.subarray && ia)
            return ia.decode(a.subarray(c, d));
          for (e = ""; c < d; ) {
            var f = a[c++];
            if (128 & f) {
              var g = 63 & a[c++];
              if (192 == (224 & f))
                e += String.fromCharCode(((31 & f) << 6) | g);
              else {
                var m = 63 & a[c++];
                (f =
                  224 == (240 & f)
                    ? ((15 & f) << 12) | (g << 6) | m
                    : ((7 & f) << 18) | (g << 12) | (m << 6) | (63 & a[c++])) <
                65536
                  ? (e += String.fromCharCode(f))
                  : ((f -= 65536),
                    (e += String.fromCharCode(
                      55296 | (f >> 10),
                      56320 | (1023 & f)
                    )));
              }
            } else e += String.fromCharCode(f);
          }
          return e;
        }
        function ka(a, c) {
          return a ? ja(L, a, c) : "";
        }
        function la(a) {
          return 0 < a % 65536 && (a += 65536 - (a % 65536)), a;
        }
        function ma(a) {
          (buffer = a),
            (b.HEAP8 = M = new Int8Array(a)),
            (b.HEAP16 = new Int16Array(a)),
            (b.HEAP32 = N = new Int32Array(a)),
            (b.HEAPU8 = L = new Uint8Array(a)),
            (b.HEAPU16 = new Uint16Array(a)),
            (b.HEAPU32 = new Uint32Array(a)),
            (b.HEAPF32 = new Float32Array(a)),
            (b.HEAPF64 = new Float64Array(a));
        }
        "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
        var G = b.TOTAL_MEMORY || 16777216;
        function O(a) {
          for (; 0 < a.length; ) {
            var c = a.shift();
            if ("function" == typeof c) c();
            else {
              var d = c.b;
              "number" == typeof d
                ? void 0 === c.a
                  ? b.dynCall_v(d)
                  : b.dynCall_vi(d, c.a)
                : d(void 0 === c.a ? null : c.a);
            }
          }
        }
        (I = b.wasmMemory
          ? b.wasmMemory
          : new (function () {
              return {
                buffer: new ArrayBuffer((G / 65536) * 65536),
                grow: function (a) {
                  return ca(a);
                },
              };
            })()) && (buffer = I.buffer),
          (G = buffer.byteLength),
          ma(buffer),
          (N[2052] = 5251248);
        var na = [],
          oa = [],
          pa = [],
          qa = [];
        function ra() {
          var a = b.preRun.shift();
          na.unshift(a);
        }
        if (
          ((Math.imul && -5 === Math.imul(4294967295, 5)) ||
            (Math.imul = function (a, c) {
              var d = 65535 & a,
                e = 65535 & c;
              return (d * e + (((a >>> 16) * e + d * (c >>> 16)) << 16)) | 0;
            }),
          !Math.fround)
        ) {
          var sa = new Float32Array(1);
          Math.fround = function (a) {
            return (sa[0] = a), sa[0];
          };
        }
        Math.clz32 ||
          (Math.clz32 = function (a) {
            var c = 32,
              d = a >> 16;
            return (
              d && ((c -= 16), (a = d)),
              (d = a >> 8) && ((c -= 8), (a = d)),
              (d = a >> 4) && ((c -= 4), (a = d)),
              (d = a >> 2) && ((c -= 2), (a = d)),
              a >> 1 ? c - 2 : c - a
            );
          }),
          Math.trunc ||
            (Math.trunc = function (a) {
              return a < 0 ? Math.ceil(a) : Math.floor(a);
            });
        var P = 0,
          Q = null,
          U = null;
        function B(a) {
          throw (
            (b.onAbort && b.onAbort(a),
            D(a),
            E(a),
            (K = !0),
            new fa(
              "abort(" + a + "). Build with -s ASSERTIONS=1 for more info."
            ))
          );
        }
        (b.preloadedImages = {}), (b.preloadedAudios = {});
        var V = "data:application/octet-stream;base64,";
        function W(a) {
          return String.prototype.startsWith
            ? a.startsWith(V)
            : 0 === a.indexOf(V);
        }
        var X = "_em_module.wasm";
        if (!W(X)) {
          var ta = X;
          X = b.locateFile ? b.locateFile(ta, u) : u + ta;
        }
        function ua() {
          try {
            if (F) return new Uint8Array(F);
            var a = z(X);
            if (a) return a;
            if (w) return w(X);
            throw "both async and sync fetching of the wasm failed";
          } catch (c) {
            B(c);
          }
        }
        oa.push({
          b: function () {
            wa();
          },
        });
        var xa = [null, [], []],
          ya = !1;
        function C(a) {
          for (var c = [], d = 0; d < a.length; d++) {
            var e = a[d];
            255 < e &&
              (ya &&
                assert(
                  !1,
                  "Character code " +
                    e +
                    " (" +
                    String.fromCharCode(e) +
                    ")  at offset " +
                    d +
                    " not in 0x00-0xFF."
                ),
              (e &= 255)),
              c.push(String.fromCharCode(e));
          }
          return c.join("");
        }
        var za =
          "function" == typeof atob
            ? atob
            : function (a) {
                var c = "",
                  d = 0;
                a = a.replace(/[^A-Za-z0-9\+\/=]/g, "");
                do {
                  var e =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                        a.charAt(d++)
                      ),
                    f =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                        a.charAt(d++)
                      ),
                    g =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                        a.charAt(d++)
                      ),
                    m =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                        a.charAt(d++)
                      );
                  (e = (e << 2) | (f >> 4)), (f = ((15 & f) << 4) | (g >> 2));
                  var h = ((3 & g) << 6) | m;
                  (c += String.fromCharCode(e)),
                    64 !== g && (c += String.fromCharCode(f)),
                    64 !== m && (c += String.fromCharCode(h));
                } while (d < a.length);
                return c;
              };
        function z(a) {
          if (W(a)) {
            if (((a = a.slice(V.length)), "boolean" == typeof r && r)) {
              try {
                var c = Buffer.from(a, "base64");
              } catch (g) {
                c = new Buffer(a, "base64");
              }
              var d = new Uint8Array(c.buffer, c.byteOffset, c.byteLength);
            } else
              try {
                var e = za(a),
                  f = new Uint8Array(e.length);
                for (c = 0; c < e.length; ++c) f[c] = e.charCodeAt(c);
                d = f;
              } catch (g) {
                throw Error("Converting base64 string to bytes failed.");
              }
            return d;
          }
        }
        var H = {
            emscripten_memcpy_big: function (a, c, d) {
              L.set(L.subarray(c, c + d), a);
            },
            emscripten_resize_heap: function (a) {
              if (2147418112 < a) return !1;
              for (var c = Math.max(M.length, 16777216); c < a; )
                c =
                  c <= 536870912
                    ? la(2 * c)
                    : Math.min(la((3 * c + 2147483648) / 4), 2147418112);
              a: {
                try {
                  I.grow((c - buffer.byteLength + 65535) >> 16), ma(I.buffer);
                  var d = 1;
                  break a;
                } catch (e) {}
                d = void 0;
              }
              return !!d;
            },
            fd_write: function (a, c, d, e) {
              try {
                for (var f = 0, g = 0; g < d; g++) {
                  for (
                    var m = N[(c + 8 * g) >> 2],
                      h = N[(c + (8 * g + 4)) >> 2],
                      A = 0;
                    A < h;
                    A++
                  ) {
                    var R = L[m + A],
                      S = xa[a];
                    0 === R || 10 === R
                      ? ((1 === a ? D : E)(ja(S, 0)), (S.length = 0))
                      : S.push(R);
                  }
                  f += h;
                }
                return (N[e >> 2] = f), 0;
              } catch (T) {
                return (
                  ("undefined" != typeof FS && T instanceof FS.c) || B(T), T.f
                );
              }
            },
            memory: I,
            table: J,
          },
          Aa = (function () {
            function a(a) {
              (b.asm = a.exports),
                P--,
                b.monitorRunDependencies && b.monitorRunDependencies(P),
                0 == P &&
                  (null !== Q && (clearInterval(Q), (Q = null)),
                  U && ((a = U), (U = null), a()));
            }
            function c(c) {
              a(c.instance);
            }
            function d(a) {
              return (
                F || (!p && !q) || "function" != typeof fetch
                  ? new Promise(function (a) {
                      a(ua());
                    })
                  : fetch(X, { credentials: "same-origin" })
                      .then(function (a) {
                        if (!a.ok)
                          throw (
                            "failed to load wasm binary file at '" + X + "'"
                          );
                        return a.arrayBuffer();
                      })
                      .catch(function () {
                        return ua();
                      })
              )
                .then(function () {
                  return {
                    then: function (a) {
                      a({ instance: new da() });
                    },
                  };
                })
                .then(a, function (a) {
                  E("failed to asynchronously prepare wasm: " + a), B(a);
                });
            }
            var e = { env: H, wasi_snapshot_preview1: H };
            if (
              (P++,
              b.monitorRunDependencies && b.monitorRunDependencies(P),
              b.instantiateWasm)
            )
              try {
                return b.instantiateWasm(e, a);
              } catch (f) {
                return (
                  E("Module.instantiateWasm callback failed with error: " + f),
                  !1
                );
              }
            return (
              (function () {
                if (
                  F ||
                  "function" != typeof WebAssembly.instantiateStreaming ||
                  W(X) ||
                  "function" != typeof fetch
                )
                  return d(c);
                fetch(X, { credentials: "same-origin" }).then(function (a) {
                  return WebAssembly.instantiateStreaming(a, e).then(
                    c,
                    function (a) {
                      E("wasm streaming compile failed: " + a),
                        E("falling back to ArrayBuffer instantiation"),
                        d(c);
                    }
                  );
                });
              })(),
              {}
            );
          })();
        b.asm = Aa;
        var wa = (b.___wasm_call_ctors = function () {
          return b.asm.__wasm_call_ctors.apply(null, arguments);
        });
        (b._csmGetVersion = function () {
          return b.asm.csmGetVersion.apply(null, arguments);
        }),
          (b._csmGetLatestMocVersion = function () {
            return b.asm.csmGetLatestMocVersion.apply(null, arguments);
          }),
          (b._csmGetMocVersion = function () {
            return b.asm.csmGetMocVersion.apply(null, arguments);
          }),
          (b._csmSetLogFunction = function () {
            return b.asm.csmSetLogFunction.apply(null, arguments);
          }),
          (b._csmReviveMocInPlace = function () {
            return b.asm.csmReviveMocInPlace.apply(null, arguments);
          }),
          (b._csmReadCanvasInfo = function () {
            return b.asm.csmReadCanvasInfo.apply(null, arguments);
          }),
          (b._csmGetSizeofModel = function () {
            return b.asm.csmGetSizeofModel.apply(null, arguments);
          }),
          (b._csmInitializeModelInPlace = function () {
            return b.asm.csmInitializeModelInPlace.apply(null, arguments);
          }),
          (b._csmUpdateModel = function () {
            return b.asm.csmUpdateModel.apply(null, arguments);
          }),
          (b._csmGetParameterCount = function () {
            return b.asm.csmGetParameterCount.apply(null, arguments);
          }),
          (b._csmGetParameterIds = function () {
            return b.asm.csmGetParameterIds.apply(null, arguments);
          }),
          (b._csmGetParameterMinimumValues = function () {
            return b.asm.csmGetParameterMinimumValues.apply(null, arguments);
          }),
          (b._csmGetParameterMaximumValues = function () {
            return b.asm.csmGetParameterMaximumValues.apply(null, arguments);
          }),
          (b._csmGetParameterDefaultValues = function () {
            return b.asm.csmGetParameterDefaultValues.apply(null, arguments);
          }),
          (b._csmGetParameterValues = function () {
            return b.asm.csmGetParameterValues.apply(null, arguments);
          }),
          (b._csmGetPartCount = function () {
            return b.asm.csmGetPartCount.apply(null, arguments);
          }),
          (b._csmGetPartIds = function () {
            return b.asm.csmGetPartIds.apply(null, arguments);
          }),
          (b._csmGetPartOpacities = function () {
            return b.asm.csmGetPartOpacities.apply(null, arguments);
          }),
          (b._csmGetPartParentPartIndices = function () {
            return b.asm.csmGetPartParentPartIndices.apply(null, arguments);
          }),
          (b._csmGetDrawableCount = function () {
            return b.asm.csmGetDrawableCount.apply(null, arguments);
          }),
          (b._csmGetDrawableIds = function () {
            return b.asm.csmGetDrawableIds.apply(null, arguments);
          }),
          (b._csmGetDrawableConstantFlags = function () {
            return b.asm.csmGetDrawableConstantFlags.apply(null, arguments);
          }),
          (b._csmGetDrawableDynamicFlags = function () {
            return b.asm.csmGetDrawableDynamicFlags.apply(null, arguments);
          }),
          (b._csmGetDrawableTextureIndices = function () {
            return b.asm.csmGetDrawableTextureIndices.apply(null, arguments);
          }),
          (b._csmGetDrawableDrawOrders = function () {
            return b.asm.csmGetDrawableDrawOrders.apply(null, arguments);
          }),
          (b._csmGetDrawableRenderOrders = function () {
            return b.asm.csmGetDrawableRenderOrders.apply(null, arguments);
          }),
          (b._csmGetDrawableOpacities = function () {
            return b.asm.csmGetDrawableOpacities.apply(null, arguments);
          }),
          (b._csmGetDrawableMaskCounts = function () {
            return b.asm.csmGetDrawableMaskCounts.apply(null, arguments);
          }),
          (b._csmGetDrawableMasks = function () {
            return b.asm.csmGetDrawableMasks.apply(null, arguments);
          }),
          (b._csmGetDrawableVertexCounts = function () {
            return b.asm.csmGetDrawableVertexCounts.apply(null, arguments);
          }),
          (b._csmGetDrawableVertexPositions = function () {
            return b.asm.csmGetDrawableVertexPositions.apply(null, arguments);
          }),
          (b._csmGetDrawableVertexUvs = function () {
            return b.asm.csmGetDrawableVertexUvs.apply(null, arguments);
          }),
          (b._csmGetDrawableIndexCounts = function () {
            return b.asm.csmGetDrawableIndexCounts.apply(null, arguments);
          }),
          (b._csmGetDrawableIndices = function () {
            return b.asm.csmGetDrawableIndices.apply(null, arguments);
          }),
          (b._csmResetDrawableDynamicFlags = function () {
            return b.asm.csmResetDrawableDynamicFlags.apply(null, arguments);
          }),
          (b._csmMallocMoc = function () {
            return b.asm.csmMallocMoc.apply(null, arguments);
          }),
          (b._csmMallocModelAndInitialize = function () {
            return b.asm.csmMallocModelAndInitialize.apply(null, arguments);
          }),
          (b._csmMalloc = function () {
            return b.asm.csmMalloc.apply(null, arguments);
          }),
          (b._csmFree = function () {
            return b.asm.csmFree.apply(null, arguments);
          });
        var Y,
          Ba = (b.stackSave = function () {
            return b.asm.stackSave.apply(null, arguments);
          }),
          Ca = (b.stackAlloc = function () {
            return b.asm.stackAlloc.apply(null, arguments);
          }),
          Da = (b.stackRestore = function () {
            return b.asm.stackRestore.apply(null, arguments);
          }),
          ca = (b.__growWasmMemory = function () {
            return b.asm.__growWasmMemory.apply(null, arguments);
          });
        function Z() {
          function a() {
            if (!Y && ((Y = !0), !K)) {
              if (
                (O(oa),
                O(pa),
                b.onRuntimeInitialized && b.onRuntimeInitialized(),
                b.postRun)
              )
                for (
                  "function" == typeof b.postRun && (b.postRun = [b.postRun]);
                  b.postRun.length;

                ) {
                  var a = b.postRun.shift();
                  qa.unshift(a);
                }
              O(qa);
            }
          }
          if (!(0 < P)) {
            if (b.preRun)
              for (
                "function" == typeof b.preRun && (b.preRun = [b.preRun]);
                b.preRun.length;

              )
                ra();
            O(na),
              0 < P ||
                (b.setStatus
                  ? (b.setStatus("Running..."),
                    setTimeout(function () {
                      setTimeout(function () {
                        b.setStatus("");
                      }, 1),
                        a();
                    }, 1))
                  : a());
          }
        }
        if (
          ((b.dynCall_vi = function () {
            return b.asm.dynCall_vi.apply(null, arguments);
          }),
          (b.asm = Aa),
          (b.ccall = function (a, c, d, e) {
            var f = {
                string: function (a) {
                  var c = 0;
                  if (null != a && 0 !== a) {
                    var d = 1 + (a.length << 2),
                      e = (c = Ca(d)),
                      f = L;
                    if (0 < d) {
                      d = e + d - 1;
                      for (var g = 0; g < a.length; ++g) {
                        var k = a.charCodeAt(g);
                        if (
                          (55296 <= k &&
                            k <= 57343 &&
                            (k =
                              (65536 + ((1023 & k) << 10)) |
                              (1023 & a.charCodeAt(++g))),
                          k <= 127)
                        ) {
                          if (d <= e) break;
                          f[e++] = k;
                        } else {
                          if (k <= 2047) {
                            if (d <= e + 1) break;
                            f[e++] = 192 | (k >> 6);
                          } else {
                            if (k <= 65535) {
                              if (d <= e + 2) break;
                              f[e++] = 224 | (k >> 12);
                            } else {
                              if (d <= e + 3) break;
                              (f[e++] = 240 | (k >> 18)),
                                (f[e++] = 128 | ((k >> 12) & 63));
                            }
                            f[e++] = 128 | ((k >> 6) & 63);
                          }
                          f[e++] = 128 | (63 & k);
                        }
                      }
                      f[e] = 0;
                    }
                  }
                  return c;
                },
                array: function (a) {
                  var c = Ca(a.length);
                  return M.set(a, c), c;
                },
              },
              g = (function (a) {
                var c = b["_" + a];
                return (
                  assert(
                    c,
                    "Cannot call unknown function " +
                      a +
                      ", make sure it is exported"
                  ),
                  c
                );
              })(a),
              m = [];
            if (((a = 0), e))
              for (var h = 0; h < e.length; h++) {
                var A = f[d[h]];
                A ? (0 === a && (a = Ba()), (m[h] = A(e[h]))) : (m[h] = e[h]);
              }
            return (
              (d = (function (a) {
                return "string" === c ? ka(a) : "boolean" === c ? !!a : a;
              })((d = g.apply(null, m)))),
              0 !== a && Da(a),
              d
            );
          }),
          (b.UTF8ToString = ka),
          (b.addFunction = function (a, c) {
            var d = J.length;
            try {
              J.grow(1);
            } catch (e) {
              if (!e instanceof RangeError) throw e;
              throw "Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH.";
            }
            try {
              J.set(d, a);
            } catch (e) {
              if (!e instanceof TypeError) throw e;
              assert(void 0 !== c, "Missing signature argument to addFunction"),
                J.set(d, a);
            }
            return d;
          }),
          (b.then = function (a) {
            if (Y) a(b);
            else {
              var c = b.onRuntimeInitialized;
              b.onRuntimeInitialized = function () {
                c && c(), a(b);
              };
            }
            return b;
          }),
          (U = function Ea() {
            Y || Z(), Y || (U = Ea);
          }),
          (b.run = Z),
          b.preInit)
        )
          for (
            "function" == typeof b.preInit && (b.preInit = [b.preInit]);
            0 < b.preInit.length;

          )
            b.preInit.pop()();
        return Z(), _em_module;
      });
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = _em_module)
    : "function" == typeof define && define.amd
    ? define([], function () {
        return _em_module;
      })
    : "object" == typeof exports && (exports._em_module = _em_module);
  var _em = _em_module();
})((Live2DCubismCore = Live2DCubismCore || {}));
