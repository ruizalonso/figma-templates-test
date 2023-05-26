/* eslint-disable react/prop-types */
const Card = ({
  title,
  description,
  macDescription,
  macKey,
  winDescription,
  winKey,
  image
}) => {
  return (
    <div className="bg-white my-12 flex justify-between h-80">
      <div className="p-8">
        <h3 className="font-bold text-2xl mb-4">{title}</h3>
        <p className="mb-8 w-4/5">{description}</p>
        {macDescription && macKey && !winDescription && (
          <>
            <span className="block font-bold mb-4">{macDescription}</span>
            {macKey.map((e) => (
              <kbd key={e} className="kbd m-1">
                {e}
              </kbd>
            ))}
          </>
        )}
        {winDescription && winKey && !macDescription && (
          <>
            <span className="block font-bold mb-4">{macDescription}</span>
            {macKey.map((e) => (
              <kbd key={e} className="kbd m-1">
                {e}
              </kbd>
            ))}
          </>
        )}
        {macDescription && macKey && winDescription && winKey && (
          <div className="grid grid-cols-2">
            <div className="">
              <span className="block font-bold mb-4">{macDescription}</span>
              {macKey.map((e) => (
                <kbd key={e} className="kbd m-1">
                  {e}
                </kbd>
              ))}
            </div>
            <div className="">
              <span className="block font-bold mb-4">{winDescription}</span>
              {winKey.map((e) => (
                <kbd key={e} className="kbd m-1">
                  {e}
                </kbd>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mr-4">
        <img
          className="h-80 w-80"
          src={`../src/assets/${image}.png`}
          alt={title}
        />
      </div>
    </div>
  )
}

export default Card
