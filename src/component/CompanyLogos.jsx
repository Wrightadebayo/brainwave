import { companyLogos } from "../constants"

const CompanyLogos = ({className}) => {
  return (
    <div className={className}>
      CompanyLogos
      <h5 className="tagline mb-6 text-center text-n-1/50">Helping people creating content</h5>
    <ul className="flex justify-center items-center flex-1 mt-10">
  {companyLogos.map((logo,index)=>(
    <li key={index}>
        <img src={logo} width={134} height={28} alt={logo}/>
    </li>
  ))}
    </ul>
    </div>
  )
}

export default CompanyLogos
