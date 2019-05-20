import React from 'react';
import './FooterNav.scss';
import FB from '../../../assets/images/facebook.svg';
import IG from '../../../assets/images/instagram.svg';

const footerNav = () => (

   <div className="FooterNav">
   
        <div className="FooterNav__copyright">
            <p>Copyright &copy; 2019 The Jungle Cook</p>
        </div>

        <div className="FooterNav__links">
            {/* These will be changed to nav links when we do the react router */}
            <p>Login</p>
            <p>Recipes by Category</p>
            <p>Privacy and Copyright</p>
            <p>Create Recipe</p>
            <p>Your Recipes</p>
        </div>

        <div className="FooterNav__social">
            <img src={FB} alt="Facebook" className="FooterNav__social--icon" />
            <img src={IG} alt="Instagram" className="FooterNav__social--icon" />
        </div>

   </div>

)

export default footerNav;