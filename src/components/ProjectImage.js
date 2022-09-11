const ProjectImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-auto w-[768px] object-contain ${className}`}
    />
  );
};

export default ProjectImage;

// 1920 * 1080
// 1152 * 648
// 768 * 432
