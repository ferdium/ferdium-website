import NextImage from "next/image";

// opt-out of image optimization, no-op
const customLoader = ({ src }: any) => {
  return src;
};
type Props = {
  id?: string;
  className?: string;
  src: any;
  alt: string;
  width?: number;
  height?: number;
  layout?:string;
};

export default function NonOptimizedImage(props: Props) {
  return <NextImage {...props} loader={customLoader} unoptimized={!props.width && !props.height} layout={props.layout}  />;
}
