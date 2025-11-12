declare module "*.svg?component" {
  import * as React from "react";
  const ReactComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
