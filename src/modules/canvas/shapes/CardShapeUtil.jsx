import React from 'react';
import { BaseBoxShapeUtil, HTMLContainer, T } from 'tldraw';

export class CardShapeUtil extends BaseBoxShapeUtil {
  // Unique string key registered in tldraw's shape registry
  static type = 'card';

  // Schema validator for shape properties stored in state
  static props = {
    w: T.number,
    h: T.number,
    title: T.string,
    content: T.string,
    category: T.string,
  };

  // Initial values assigned when editor.createShape({ type: 'card' }) is called
  getDefaultProps() {
    return {
      w: 280,
      h: 180,
      title: 'New Spatial Note',
      content: 'Click to edit or add key ideas here...',
      category: 'General',
    };
  }

  // Renders the React component inside the spatial canvas viewport
  component(shape) {
    return (
      <HTMLContainer
        style={{
          pointerEvents: 'all', // Allows child DOM elements (inputs, buttons) to capture user pointer events
          width: shape.props.w,
          height: shape.props.h,
        }}
      >
        <div className="spatial-custom-card">
          <div className="card-header">
            <span className="card-badge">{shape.props.category}</span>
          </div>
          <h3 className="card-title">{shape.props.title}</h3>
          <p className="card-content">{shape.props.content}</p>
        </div>
      </HTMLContainer>
    );
  }
}