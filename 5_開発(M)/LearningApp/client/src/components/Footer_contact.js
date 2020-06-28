import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer_contact = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0 font-weight-bold">管理者の連絡先</h2>
              <hr className="divider my-4" />
              <p className="text-muted mb-5">不明点及び品質についてフィードバックがあればご連絡下さい。</p>
            </div>
          </div>

          <div className="row">
            {/*Column 1*/}
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0 list-unstyled">
              <FontAwesomeIcon icon={faPhone} size='4x' className="text-white"/>
              <br/><br/>
              <div>(+81) 080-6969-6969</div>
            </div>

            {/*Column 2*/}
            <div className="col-lg-4 mr-auto text-center list-unstyled">
              <FontAwesomeIcon icon={faEnvelope} size='4x' className="text-white"/>
              <br/><br/>
              <a className="d-block" href="mailto:jcoban69@gmail.com">jcoban69@gmail.com</a>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-center">
              &copy; 2020 Learning App - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer_contact

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 5rem;
    padding-bottom: 1rem;
  }
`;

/* ul li a {
    color: var(--mainGrey);
  }

  il li a:hover {
    color: var(== mainLightGrey);
  }  */