# npm-pack-template

An npm package template for building and publishing reusable React component libraries. This template uses CSS-in-JS with Emotion and provides a structured setup with separate files for styles, props, and components.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Build](#build)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, clone the repository:

```sh
git clone https://github.com/Ludvigpbf/npm-pack-template.git
cd npm-pack-template
npm install
```

## Usage
This template is designed to help you create reusable React components. Follow the steps below to create and export your components.

**Creating a Component**
1. Create a new component file: Create a new file in the `src/component directory`, e.g., `MyComponent.tsx`.

2. Create a styles file: Create a corresponding styles file in the `src/component` directory, e.g., `MyComponentStyles.ts`.

3. Create a props file: Create a corresponding props file in the `src/component` directory, e.g., `MyComponentProps.ts`.
 
4. Define your component: In `MyComponent.tsx`, define your component and import the styles and props.

Example:

```ts
/** @jsxImportSource @emotion/react */

import { MyComponentStyles } from "./MyComponentStyles";
import MyComponentProps from "./MyComponentProps";

const MyComponent: React.FC<MyComponentProps> = ({
  componentClassName,
  bgColor = "gray",
}) => {
  return (
    <div
      css={[
        MyComponentStyles,
        {
          backgroundColor: `${bgColor ? bgColor : ""}`
        },
      ]}
      className={componentClassName ? componentClassName : ""}
    >
      <p>Hello World</p>
    </div>
  );
};

export default MyComponent;
```

**Exporting the Component**
1. Export the component: In `src/index.ts`, export your new component.
Example:

```ts
export { default as MyComponent } from './component/MyComponent';
```

### Development
To start the development server, run:

```sh
npm run dev
```
This will start Vite in development mode and watch for changes.


### Build
To build the package for production, run:

```sh
npm run build
```
This will generate the production build in the dist folder

### File Structure
The project structure is as follows:

```
npm-pack-template/
├── dist/                                                  # Build output
├── node_modules/                                          # Node.js modules
├── src/                                                   # Source files
│   ├── assets/                                            # Assets directory
│   ├── component/                                         # Components directory
│   │   ├── MyComponent.tsx                                # Example component file
│   │   ├── MyComponentStyles.ts                           # Example styles file
│   │   └── MyComponentProps.ts                            # Example props file
│   ├── development/                                       # Development directory
│   │   ├── App.css                                        # Generated css for development page
│   │   ├── App.css.map                                    # Map file for css
│   │   ├── App.scss                                       # SCSS file for development page
│   │   ├── App.tsx                                        # Testing file for you component when developing
│   │   └── main.tsx                                       # Main file for development
│   ├── index.d.ts                                         # Entry point for components types exports
│   ├── index.ts                                           # Entry point for component exports
│   └── vite-env.d.ts                                      # Vites types file  
├── .eslintrc.js                                           # ESLint configuration
├── index.html                                             # HTML file for development
├── [package.json](http://_vscodecontentref_/0)            # NPM package configuration
├── [tsconfig.json](http://_vscodecontentref_/1)           # TypeScript configuration
├── [vite.config.ts](http://_vscodecontentref_/2)          # Vite configuration
└── [README.md](http://_vscodecontentref_/3)               # Project documentation
```


### Contributing
Contributions are welcome! Please open an issue or submit a pull request.

### License
This project is licensed under the MIT License.