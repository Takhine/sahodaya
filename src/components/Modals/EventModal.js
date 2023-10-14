import React from "react";
import { Button, Modal } from "antd";
import { Player } from 'video-react';

export default function EventModal({ visible, handleCancel }) {
  // [
  //   <Button key="back" onClick={() => handleCancel()}>
  //     Close
  //   </Button>,
  //   <Button key="submit" type="primary">
  //     <a href="https://forms.gle/vkrRYFwPHMuJvL7Z7" target="_blank">
  //       Open
  //     </a>
  //   </Button>,
  // ]
  return (
    <Modal
      visible={visible}
      width="100%"
      zIndex={2000}
      wrapClassName="event-modal-wrapper"
      onCancel={() => handleCancel()}
      style={{ top: 40 }}
      className="event-modal"
      title={<h3 style={{ textAlign: 'center' }}>Register For <b>29th National Annual Conference For Sahodaya Schools Complexes 2023</b> Today!</h3>}
      footer={null}
    >
      {/* <a href="https://forms.gle/vkrRYFwPHMuJvL7Z7" target="_blank"> */}
      {/* <img width="100%" src={event} alt="Blended Learning: The new normal" /> */}
      {/* </a> */}
      <Player autoPlay preload='metadata' muted>
        <source src="https://mumbaisahodaya.com/static/media/nsc-23.mp4" />
      </Player>
      <br />
      <div style={{display: 'flex', justifyContent:'flex-end'}}>
      <Button className="register-button">
      <a href="https://docs.google.com/forms/d/1W4tPfESYdAwjVhypxDPNgPiRKd_I8iBPKsTujKXDndU/edit" className="btn btn-md-extra-large mt-md-4 btn-orange page-scroll" target='_blank'>Register Now</a>
      </Button>

      </div>
    </Modal>
  );
}
