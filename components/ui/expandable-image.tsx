/* eslint-disable jsx-a11y/alt-text */
// because `props` already include required props for Image component
"use client";

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

interface ExpandableImageProps extends ImageProps {
  // Additional props can be added here
}

const ExpandableImage: React.FC<ExpandableImageProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleImageClick = () => {
    setIsExpanded(true);
  };

  const handleOverlayClick = () => {
    setIsExpanded(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isExpanded]);

  // Overlay content
  const overlay = (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={handleOverlayClick}
              aria-label="Close"
            >
              &times;
            </button>
            <Image
              {...props}
              className="rounded-lg max-h-[90vh] max-w-[90vw] object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Thumbnail Image */}
      <Image
        {...props}
        onClick={handleImageClick}
        className={`${props.className} cursor-pointer`}
      />

      {/* Expanded Image in Overlay via Portal */}
      {mounted && createPortal(overlay, document.body)}
    </>
  );
};

export default ExpandableImage;