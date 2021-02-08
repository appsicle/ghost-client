import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalHeader } from 'shards-react';
import { Link } from 'react-router-dom';
import { toggleModal, closeModal } from './roleSelectionModalSlice';

function App() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.roleSelectionModalReducer.isOpen);

  const toggle = () => {
    dispatch(toggleModal());
  };

  const close = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      className="login-modal"
      size="sm"
      toggle={toggle}
      centered
      open={open}
    >
      <ModalHeader>Pick a role</ModalHeader>
      <ModalBody>
        <Link onClick={close} to="/signupReviewee">reviewee</Link>
        <Link onClick={close} to="/signupReviewer">reviewer</Link>
      </ModalBody>
    </Modal>
  );
}

export default App;

// onclick, send user to signup component
