/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { IDeleteModalProps } from '../../interfaces';

const DeleteModal = ({
  name, objectId, modalIsOpen, closeModal,
}:IDeleteModalProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleModalClose = () => {
    closeModal();
  };

  const handleDeleteRestaurant = async () => {

  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleModalClose}
      className="modal"
      overlayClassName="modal-overlay delete-modal-overlay"
    >
      <header>
        <h2 className="delete-modal-title">Delete</h2>
      </header>
      <div className="delete-modal-body">
        <p className="delete-modal-desc">
          Are you sure you want to delete&nbsp;
          <strong>{`"${name}"`}</strong>
          ?
          <br />
          This is an irreversible action and you won&apos;t
          be able to find this restaurant again.
        </p>
      </div>
      <div className="delete-modal-buttons">
        <button
          disabled={isDeleting}
          className="modal-button button-cancel"
          type="button"
          onClick={handleModalClose}
        >
          No, I don&apos;t want to
        </button>
        <button
          disabled={isDeleting}
          className="modal-button button-delete"
          type="button"
          onClick={handleDeleteRestaurant}
        >
          {isDeleting ? 'Deleting...' : 'Yes, delete'}
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
