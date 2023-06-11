export function LoadImage({
  imgUrl,
  width,
  height = "lg:h-[136px]",
  alt = "testimonialImage",
  mobileHeight,
  mobileWidth,
}) {
  return (
    <div className={` ${width} ${mobileWidth} my-auto`}>
      <div className={` ${width} ${height} ${mobileHeight} ${mobileWidth} `}>
        <img
          src={imgUrl}
          className={`object-cover w-[100%] ${height} ${mobileHeight} my-auto`}
          alt={alt}
        />
      </div>
    </div>
  );
}
