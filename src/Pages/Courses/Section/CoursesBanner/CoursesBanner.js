import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import "./CoursesBanner.css";
import { Carousel } from 'react-bootstrap';
import UseAuth from "../../../hooks/UseAuth";
import moneyProblem from "../../../../images/courses/money-problem.png"
import SGHelp from "../../../../images/courses/SG-k-help-korchi.png"
import learning from "../../../../images/courses/learning.svg"
import success from "../../../../images/courses/success.svg"

const CoursesBanner = () => {
  // UseAuth
  const { userInfo } = UseAuth();

  const payed = userInfo.userPay;

  const startNow = <FontAwesomeIcon icon={faPlayCircle} className="courses-startNow-icon" />;
  const collectNow = <FontAwesomeIcon icon={faCartArrowDown} className="courses-startNow-icon" />;

    return (
        <div className="CoursesBanner">

        <div className="problem-solving-div"></div>

            {/* f */}

            <Carousel fade>

              {/* 1 */}
              <Carousel.Item>
                <div className="d-flex">
                  <div className="carousel-text">
                    
                    <h1>
                      Money Problem is a comone problem in this world and country
                    </h1>
                    
                    <br />

                    <h4>
                      Money Problem is a comone problem in this world and country
                    </h4>

                    <br />
{
                      (payed == true)?

                <a href="/coursesCardPage" className="Course-SL-btn-a">
                    <button id="startNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Start Now {startNow}
                      </div>
                    </button>
                </a>
                :
                <a href="/paymentPage" className="Course-SL-btn-a">
                    <button id="collectNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Pay Now {collectNow}
                      </div>
                    </button>
                </a>
}
                  </div>
                  
                  <img src={moneyProblem} className="png-images carousel-img carousel-1-img" />
                </div>
              </Carousel.Item>

              {/* 2  */}

              <Carousel.Item>
              <div className="d-flex ">
                  <div className="carousel-text">
                    
                    <h1>
                      Money Problem is a comone problem in this world and country
                    </h1>
                    
                    <br />
                    
                    <h4>
                      Money Problem is a comone problem in this world and country
                    </h4>
                    
                    <br />
{
                      (payed == true)?

                <a href="/coursesCardPage" className="Course-SL-btn-a">
                    <button id="startNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Start Now {startNow}
                      </div>
                    </button>
                </a>
                :
                <a href="/paymentPage" className="Course-SL-btn-a">
                    <button id="collectNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Pay Now {collectNow}
                      </div>
                    </button>
                </a>
}
                  </div>
                  
                  <img src={SGHelp} className="png-images carousel-img carousel-2-img" />
                </div>
              </Carousel.Item>

              {/* 3 */}

              <Carousel.Item>
              <div className=" Carousel-Item-3 d-flex">
                  <div className="carousel-text carousel-3-text">
                    
                    <h1>
                      Money Problem is a comone problem in this world and country
                    </h1>
                    
                    <br />

                    <h4>
                      Money Problem is a comone problem in this world and country
                    </h4>
                    
                    <br />
{
                      (payed == true)?

                <a href="/coursesCardPage" className="Course-SL-btn-a">
                    <button id="startNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Start Now {startNow}
                      </div>
                    </button>
                </a>
                :
                <a href="/paymentPage" className="Course-SL-btn-a">
                    <button id="collectNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Pay Now {collectNow}
                      </div>
                    </button>
                </a>
}
                  </div>
                  
                  <img src={learning} className=" carousel-img carousel-3-img" />
                </div>
              </Carousel.Item>

              {/* 4 */}

              <Carousel.Item>
              <div className="d-flex">
                  <div className="carousel-text">
                    
                    <h1>
                      Money Problem is a comone problem in this world and country
                    </h1>

                    <br />

                    <h4>
                      Money Problem is a comone problem in this world and country
                    </h4>
                    
                    <br />
{
                      (payed == true)?

                <a href="/coursesCardPage" className="Course-SL-btn-a">
                    <button id="startNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Start Now {startNow}
                      </div>
                    </button>
                </a>
                :
                <a href="/paymentPage" className="Course-SL-btn-a">
                    <button id="collectNowButton" className="Course-SL-btn">
                      <div className="d-flex justify-content-center align-items-center">
                        Pay Now {collectNow}
                      </div>
                    </button>
                </a>
}
                  </div>
                  
                  <img src={success} className=" carousel-img carousel-4-img" />
                </div>
              </Carousel.Item>

            </Carousel>

        </div>
    );
};

export default CoursesBanner;