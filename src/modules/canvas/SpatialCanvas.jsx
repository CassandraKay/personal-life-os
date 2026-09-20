import React, { useState } from 'react';
import { Tldraw } from 'tldraw';
import { CardShapeUtil } from './shapes/CardShapeUtil';
import 'tldraw/tldraw.css';
import './SpatialCanvas.css';

const customShapeUtils = [CardShapeUtil];

function SpatialCanvas() {
  // Store the tldraw editor instance in state once mounted
  const [editor, setEditor] = useState(null);

  // 1. Capture the editor instance on mount
  const handleMount = (mountedEditor) => {
    setEditor(mountedEditor);

    // Spawn an initial welcome card
    mountedEditor.createShape({
      type: 'card',
      x: 200,
      y: 150,
      props: {
        title: 'Welcome to Spatial Workspace',
        content: 'Use the top button to spawn cards, or use tldraw toolbar for drawing.',
        category: 'Getting Started',
      },
    });
  };

  // 2. Handler to spawn a new card in the center of the current screen view
  const handleAddCard = () => {
    if (!editor) return;

    // Get the (X, Y) center point of the user's current canvas view
    const viewCenter = editor.getViewportPageBounds().center;

    // Create the shape at the calculated center
    editor.createShape({
      type: 'card',
      x: viewCenter.x - 140, // Offset by half the card width (280 / 2) to center accurately
      y: viewCenter.y - 90,  // Offset by half the card height (180 / 2)
      props: {
        title: 'New Note Card',
        content: 'Double-click or edit content...',
        category: 'Ideas',
      },
    });
  };

  return (
    <div className="tldraw-canvas-wrapper">
      {/* External floating toolbar over the canvas */}
      <div className="canvas-custom-toolbar">
        <button className="add-card-btn" onClick={handleAddCard}>
          <span className="btn-icon">+</span> Add React Card
        </button>
      </div>

      <Tldraw
        shapeUtils={customShapeUtils}
        onMount={handleMount}
        persistenceKey="life-os-spatial-canvas"
      />
    </div>
  );
}

export default SpatialCanvas;