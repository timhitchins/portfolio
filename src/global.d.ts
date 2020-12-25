/* use this type annotation to work with sass variables
see https://stackoverflow.com/questions/58380082/create-react-app-typescript-css-modules-auto-generating-type-definitions-wi*/
declare module "*.module.sass" {
  const classes: { [key: string]: string };
  export default classes;
}
