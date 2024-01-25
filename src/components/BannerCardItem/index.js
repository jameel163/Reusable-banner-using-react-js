import './index.css'

const BannerCard = props => {
  const {ban} = props
  const {headerText, description, className} = ban

  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="butt">Show More</button>
      </div>
    </li>
  )
}

export default BannerCard
