export interface IGetImageSizeReturn {
  height: number;
  width: number;
  type?: string;
}
export interface ILoadImageImg extends IGetImageSizeReturn {
  src: string;
}
