import React from "react";
import event from "static/images/event3.jpeg";
import { Modal, Button } from "antd";
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
      title="Integration of Technology &amp; Skill Based Learning"
      footer={null}
    >
      {/* <a href="https://forms.gle/vkrRYFwPHMuJvL7Z7" target="_blank"> */}
        <img width="100%" src={event} alt="Blended Learning: The new normal" />
      {/* </a> */}
    </Modal>
  );
}
