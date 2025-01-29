# @truststack/canvas-components

This package provides a collection of Stencil components designed for building web applications with a focus on reusability and performance.

## Scripts

This package includes several scripts to assist with development and building:

- **build**: Compiles the Stencil components for production.
- **start**: Builds the components in development mode, watches for changes, and serves them.
- **generate**: Generates new components based on templates.
- **storybook**: Starts the Storybook development server on port 6006 for UI component development.
- **build-storybook**: Builds the Storybook for production after compiling the Stencil components.

## Syncing (maintainers only)

To upload build components to our CDN, use rclone and the following command. Note, only authorized maintainers are able to do this.

```
rclone sync ./dist/ <CONFIG>:webcomponents/<VERSION>
```

