import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import style from "./section5.module.css";

export let Section5 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={style.section}>
      <div className={style.main}>
        <p className={style.p1}>Остались вопросы? Закажите обратный звонок!</p>
        <button className={style.btn} onClick={handleShow}>
          Заказать звонок
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <label>Оставьте заявку на сайте, и мы с вами свяжемся</label>
          </Modal.Header>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Введите имя</Form.Label>
                  <Form.Control type="text" placeholder="name" autoFocus />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Введите E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Введите номер телефона</Form.Label>
                  <Form.Control type="" placeholder="XX XXX XXX" autoFocus />
                </Form.Group>
                <button className={style.btn}>Оставить заявку</button>
                <p  className={style.p2}>
                  Нажимая на кнопку, Вы принимаете Положение и Согласие на
                  обработку персональных данных.
                </p>
              </Form>
            </Modal.Body>
          </div>
        </Modal>
        <p className={style.p2}>Мы перезвоним через 15 минут</p>
      </div>
    </div>
  );
};
