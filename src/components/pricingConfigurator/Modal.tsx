import React from 'react';

interface ModalProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ title, content, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className='fixed inset-0 bg-black bg-opacity-50 z-20'
        onClick={onClose}
      />

      {/* Modal */}
      <div className='fixed border left-1/2 top-1/2 z-30 bg-white transform -translate-x-1/2 -translate-y-1/2 max-w-2xl selection:bg-transparent transition-all'>
        <div
          onClick={onClose}
          className='absolute top-0 right-2 p-2 text-lg cursor-pointer hover:opacity-60 z-30'
        >
          &times;
        </div>
        <div className='relative'>
          <div className='py-6 px-6 mt-4'>
            <div className='text-lg mb-2'>{title}</div>
            <div className='mb-4'>{content}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
