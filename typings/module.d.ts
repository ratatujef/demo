declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}
