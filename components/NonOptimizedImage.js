import NextImage from "next/image";

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
	return src;
};

export default function NonOptimizedImage(props) {
	return <NextImage {...props} loader={customLoader} />;
}
