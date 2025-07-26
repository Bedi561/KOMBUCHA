/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "animejs" {
  interface AnimeParams {
    targets?: any;
    [key: string]: any;
  }
  
  function anime(params: AnimeParams): any;
  export = anime;
}