import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactImageZoom from "react-image-zoom";
import style from "./modal.module.css";

export const Modals = ({
  img,
  title,
  infoShort,
  infoFull,
  home,
  catalog,
  products,
  price,
  bag,
}) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const zoomed = {
    width: 300,
    height: 600,
    zoomPosition: "right",
    zoomWidth: 100,
    img,
  };
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <div className={style.modal}>
      <Button
        style={{
          width: "200px",
          padding: "0",
          overflow: "contain",
        }}
        variant=""
        className={style.img}
        onClick={() => handleShow(true)}
      >
        <img src={img} alt="" style={{ width: "100%" }} />
      </Button>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <ul className={style.catalogLink}>
              <li>{home} \</li>
              <li>{catalog} \</li>
              <li>{products} \</li>
              <li>{title} \</li>
            </ul>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={style.modalMain}>
            <div className={style.div1}>
              <div className={style.div11}>
                {/* <img src={img} alt="" /> */}
                <ReactImageZoom {...zoomed} />
              </div>
              <div className={style.div12}>
                <p className={style.p1}>{title}</p>
                <div>
                  <p className={style.p2}>Краткая информация:</p>
                  <p className={style.p2}>{infoShort}</p>
                </div>
                <p className={style.p3}>{price}</p>
                <button className={style.btn}>{bag}</button>
              </div>
            </div>
            <div className={style.div2}>
              <div className={style.div21}>
                <div className={style.div21text}>
                  <p className={style.p21}>Полная информация:</p>
                </div>
                <div className={style.div21empty}></div>
              </div>
              <div className={style.div22}>
                <p className={style.p22}>{infoFull}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
