
const Heading = ({className,tag}) => {
  return (
    <div className={`${className}  max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {tag && <h3 className="h3">{tag}</h3>}
    </div>
  )
}

export default Heading
