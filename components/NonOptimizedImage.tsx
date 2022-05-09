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
};

export default function NonOptimizedImage(props: Props) {
  return <NextImage {...props} loader={customLoader} unoptimized />;
}
