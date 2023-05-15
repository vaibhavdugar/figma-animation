"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCode = exports.calculateTranslation = void 0;
// Function to calculate the translation between two components
function calculateTranslation(mainComponent, variantComponent) {
    const dx = variantComponent.x - mainComponent.x;
    const dy = variantComponent.y - mainComponent.y;
    return { dx, dy };
}
exports.calculateTranslation = calculateTranslation;
// Function to generate the Smart Animation code
function generateCode(mainComponent, variantComponent, translation) {
    const mainComponentKey = mainComponent.key;
    const variantComponentKey = variantComponent.key;
    const code = '// Smart Animation code for Figma Components:\n' +
        `// Main Component: "${mainComponent.name}" (key: ${mainComponentKey})\n` +
        `// Variant Component: "${variantComponent.name}" (key: ${variantComponentKey})\n\n` +
        `const mainComponent = figma.currentPage.findOne(node => node.type === 'FRAME' && node.key === '${mainComponentKey}') as FrameNode;\n` +
        `const variantComponent = figma.currentPage.findOne(node => node.type === 'FRAME' && node.key === '${variantComponentKey}') as FrameNode;\n` +
        `const translation = { dx: ${translation.dx}, dy: ${translation.dy} };\n\n` +
        '// Apply translation to variant component\n' +
        'variantComponent.x += translation.dx;\n' +
        'variantComponent.y += translation.dy;\n\n' +
        '// Set transition on main component\n' +
        `mainComponent.transition = { duration: 1, easing: 'ease-out' };\n` +
        `mainComponent.x += translation.dx;\n` +
        `mainComponent.y += translation.dy;\n`;
    return code;
}
exports.generateCode = generateCode;
