import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactDOM from "react-dom";
import useImageZoom from "react-image-zoom-hook";
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

  const imgHeight = 560;

  const imgWidth = 400;

  const lensHeight = 50;

  const lensWidth = 50;

  const previewLensHeight = 300;

  const previewImg = img;

  const {
    moveLens,

    imgDimesions,

    lensDimensions,

    previewLensDimensions,

    previewImgDimensions,

    imgContainerDimesions,

    imgRefCallback,

    meshRefCallback,

    imagePreviewRefCallback,
  } = useImageZoom({
    imgHeight,

    imgWidth,

    lensHeight,

    lensWidth,

    previewLensHeight,

    img,

    previewImg,
  });

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <div className={style.modal}>
      <Button
        style={{
          // width: "200px",
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
                <div
                  className={style.imgMainContainer}
                  onMouseMove={moveLens}
                  style={{
                    ...imgContainerDimesions,
                  }}
                >
                  <div
                    ref={meshRefCallback}
                    className={style.mesh}
                    style={{
                      ...lensDimensions,
                    }}
                  />

                  <img
                    style={{
                      ...imgDimesions,
                    }}
                    ref={imgRefCallback}
                    alt="test"
                    src={img}
                  />
                </div>

                <div
                  className={style.imgPreviewSectionContainer}
                  style={{
                    ...previewLensDimensions,
                  }}
                >
                  <img
                    ref={imagePreviewRefCallback}
                    alt="test-preview"
                    src={previewImg}
                    style={{
                      ...previewImgDimensions,
                    }}
                    className={style.imgPreviewSection}
                  />
                </div>
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
