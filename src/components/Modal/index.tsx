import { Box, Modal } from '@material-ui/core';
import * as React from 'react';
import { BookInfos } from '../BookInfos';

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

export const ModalContent = ({ closeModal, showModal }: ModalProps) => {
  return (
    <Modal
      open={showModal}
      onClose={closeModal}
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
          p: 4,
        }}
      >
        <BookInfos />
      </Box>
    </Modal>
  );
};
