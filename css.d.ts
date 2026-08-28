// Required for TypeScript to accept the global CSS side-effect import in
// app/layout.tsx (no CSS Modules are used, but TS 7 still needs a module
// declaration for the import itself).
declare module "*.css" {
  const classes: { [key: string]: string };
  export default classes;
}
