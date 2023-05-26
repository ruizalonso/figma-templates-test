import './Banner.css'
const Banner = () => {
  return (
    <div className="container max-w-screen-lg mx-auto flex items-center justify-center h-screen">
      <div className="bg-black content-box">
        <div className="p-20 mb-14">
          <h1 className="mb-10 leading-tight text-white w-2/3">
            Learn the basics of Figma
          </h1>
          <p className="font-light text-left text-2xl leading-9 w-4/5">
            This tutorial file will walk you through the basics of starting your
            design in Figma. For more tutorial content and features overview,
            visit <span className="font-bold">help.figma.com</span>.
          </p>
        </div>
        <div className="float-right mr-14 mt-14">
          <div>
            <img src="../src/assets/figures.svg" alt="figure" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
