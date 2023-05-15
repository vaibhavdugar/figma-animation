"use strict";
// Entry point for the Figma plugin
Object.defineProperty(exports, "__esModule", { value: true });
const figma_utils_1 = require("../utils/figma-utils");
// Function to run the plugin
function runPlugin() {
    // Get the selected Figma nodes or components
    const selection = figma.currentPage.selection;
    // Check if there are exactly 2 components selected
    if (selection.length !== 2 || !selection.every(node => node.type === 'COMPONENT')) {
        figma.notify('Please select exactly 2 components.');
        return;
    }
    const mainComponent = selection[0];
    const variantComponent = selection[1];
    // Get the translation between the main and variant components
    const translation = (0, figma_utils_1.calculateTranslation)(mainComponent, variantComponent);
    // Generate the Smart Animation code
    const code = (0, figma_utils_1.generateCode)(mainComponent, variantComponent, translation);
    // Show the generated code in a modal dialog
    figma.showUI(__html__, { width: 400, height: 200 });
    figma.ui.postMessage({ type: 'code', code });
}
// Run the plugin
runPlugin();
