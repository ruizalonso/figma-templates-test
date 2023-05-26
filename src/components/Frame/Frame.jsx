import './Frame.css'
import Card from '../Card/Card'

const Frame = () => {
  return (
    <div className="grid grid-cols-5 p-14 my-6 bg-gray-100">
      <div className="frame_number text-gray-300 text-center">1</div>
      <div className="col-span-4 text-black leading-7">
        <h2 className="text-4xl font-bold mt-5">Frames</h2>
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          quibusdam eligendi, enim recusandae nostrum animi nesciunt minus iusto
          quis impedit! Ea reiciendis esse velit quam assumenda obcaecati dicta
          accusamus repellendus?
        </p>
        <Card
          title="Custom sizes"
          description="Created custom sized frames by selecting the frame tool and click and drag your cursor to the disered size."
          macDescription="macOS and Win shorcut"
          macKey={['F']}
          image="custom-sizes"
        />
        <Card
          title="Preset sizes"
          description="Created frame whit preset sizes, e.g. Iphone X, by selecting the preset in the Properties panel on the right-hand side."
          image="preset-sizes"
        />
        <Card
          title="Existing elements"
          description="Created frames from existing elements on the canvas by tight-clicking and selecting Frame Selection."
          macDescription="macOS shorcut"
          macKey={['h', 'k', 'j']}
          winDescription="Win shorcut"
          winKey={['Ctrl', 'Alt', 'G']}
          image="existing-elements"
        />
      </div>
    </div>
  )
}

export default Frame
