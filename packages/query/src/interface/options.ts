export interface tableOption {
  params: Array<tableOptionItem>,
  extraParams?:Array<tableOptionItem>,
}
export interface tableOptionItem {
  type:string,
  fileId:string,
  fileName:string,
  defaultValue?:any,
  options?:Array<any>,
  placeholder?:string,
  timeField?:Array<string>
  attrs?:any
}