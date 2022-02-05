import { StyledCard } from './Card.styled';
import PropTypes from 'prop-types'

const Card = ({color = 'black', mainImg = 'https://www.w2media.org/wp-content/uploads/5/5-what-mattress-should-i-buy-for-my-back.jpg',
  }) =>
{

   
    return (
        <StyledCard  color = {color} className='card'>
            <header>
                <img src={mainImg} alt="Here goes the main pic of the card"/>
            </header>
        </StyledCard>

    )
}

Card.propTypes = {
    mainImg: PropTypes.string,
}


export default Card