'use strict';

import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import GObject from 'gi://GObject';

export default class windowIsReadyRemover {
    enable() {
        this._windowDemandsAttentionId = global.display.connect('window-demands-attention', this._onWindowDemandsAttention.bind(this));
    }

    disable() {
        if (this._windowDemandsAttentionId) {
            global.display.disconnect(this._windowDemandsAttentionId);
            this._windowDemandsAttentionId = null;
        }
    }

    _onWindowDemandsAttention(display, window) {
        if (window) {
            Main.activateWindow(window);
        }
    }
}
