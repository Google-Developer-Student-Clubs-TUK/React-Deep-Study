declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<ReactSVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}
