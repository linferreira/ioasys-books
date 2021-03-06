import { Box, Modal } from '@material-ui/core';
import * as React from 'react';
import { IBook } from '../../Interfaces/book';
import { BookInfos } from '../BookInfos';

interface IModalProps {
  showModal: boolean;
  closeModal: (isOpen: boolean) => void;
  book: IBook;
}

export const ModalContent = ({ closeModal, showModal, book }: IModalProps) => {
  return (
    <Modal
      open={showModal}
      onClose={() => closeModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
        }}
      >
        <BookInfos book={book} />
      </Box>
    </Modal>
  );
};
