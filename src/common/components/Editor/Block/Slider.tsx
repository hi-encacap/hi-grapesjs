const EditorBlockSlider = () => {
  return (
    <swiper-container>
      <swiper-slide className="relative h-72 w-full overflow-hidden">
        <div className="relative h-72 w-full overflow-hidden">
          <img
            alt="your_alt_here"
            className="relative z-10 object-contain object-center"
            style={{ height: "100%", width: "100%" }}
          />
          <div className="backdrop absolute inset-0 blur-3xl">
            <img
              alt="your_alt_here"
              className="object-contain object-center"
              style={{ height: "100%", width: "100%" }}
              src="https://loctroi.vn/UploadFiles/Album/240118101512266/080623094623769_banner-1832-x-537.jpg"
            />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
  );
};

export default EditorBlockSlider;
