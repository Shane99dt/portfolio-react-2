import cv from "../assets/cv.pdf";

const SwingingItem = () => {
  return (
    <div class="hanging-box">
      <div className="h-[150px] w-[5px] border-gray-100">
        <div id="Swing" className="swinging-items">
          <div className="swinging-rope"></div>
          <div className="tooltip">
            <span className="tooltiptext">Click to download the CV</span>
            <a href={cv} className="duration-500" target="_blank">
              <div className="swinging-circle">
                Open to work ASAP <br />
                "CV here"
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwingingItem;
