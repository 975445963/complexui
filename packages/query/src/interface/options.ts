export interface tableOption {
  params: Array<tableOptionItem>,
  extraParams?:Array<tableOptionItem>,
}
export interface tableOptionItem {
  type:string,
  fileId:string,
  fileName:string,
  options?:Array<any>
}