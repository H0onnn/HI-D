import React from 'react';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import { colors } from '../constants/colors';

const ToasterContext = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          width: '35rem',
          maxWidth: '35rem',
          height: '5rem',
          fontSize: '16px',
          padding: '1.2rem 1.6rem',
          color: colors.font,
          backgroundColor: colors.pastel,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          lineHeight: '2.1rem',
          fontWeight: '600',
          borderRadius: '8px',
        },
        success: {
          iconTheme: {
            primary: '#5cb27a',
            secondary: 'white',
          },
        },
      }}
    >
      {(t) => (
        <ToastBar
          toast={t}
          style={{
            ...t.style,
            animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease',
          }}
        >
          {({ icon }) => (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              {/* Toast Icon and Message */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className='icon'>{icon}</div>
                <span style={{ marginLeft: '0.5rem' }}>{String(t.message)}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Left Line */}
                <div
                  style={{
                    height: '100%',
                    borderRight: `1px solid ${colors.font}`,
                    marginRight: '0.5rem',
                  }}
                ></div>
                {/* Close Button */}
                <button
                  onClick={() => toast.dismiss(t.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: colors.font,
                    cursor: 'pointer',
                    fontSize: '16px',
                  }}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default ToasterContext;
