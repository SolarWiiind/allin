import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "./modal.module.css";

export const Modals = ({
  img,
  title,
  info,
  home,
  catalog,
  products,
  price,
  bag,
}) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      <Button
        style={{
          width: "200px",
          height: "400px",
          padding: "0",
          overflow: "contain",
        }}
        variant=""
        className={style.img}
        onClick={() => handleShow(true)}
      >
        <img src={img} alt="" style={{ width: "100%" }} />
        {/* {typeof v === 'string' && `below ${v.split('-')[0]}`} */}
      </Button>
      {/* ))} */}
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
                <img src={img} alt="" />
              </div>
              <div className={style.div12}>
                <p className={style.p1}>{title}</p>
                <div>
                  <p className={style.p2}>краткая информация:</p>
                  <p className={style.p2}>{info.substring(0, 10)}</p>
                </div>
                <p className={style.p3}>{price}</p>
                <button className={style.btn}>{bag}</button>
              </div>
            </div>
            <div className={style.div2}>
            <p className={style.p2}> информация:</p>
              <p className={style.p2}>{info}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
