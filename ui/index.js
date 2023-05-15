"use strict";
// Entry point for the UI of the Figma plugin
figma.showUI(__html__, { width: 400, height: 200 });
figma.ui.onmessage = (msg) => {
    // Handle messages from the plugin UI
    if (msg.type === 'code') {
        // Display the generated code in a modal dialog
        figma.ui.postMessage({ type: 'displayCode', code: msg.code });
    }
};
