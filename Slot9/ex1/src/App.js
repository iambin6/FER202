import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Toast, ToastContainer } from 'react-bootstrap';
import { NotificationProvider, useNotification } from './contexts/NotificationContext';
import FooterPage from './Pages/FooterPage';
import HomePage from './Pages/HomePage';

function NotificationToast() {
  const { notifications, removeNotification } = useNotification();
  
  console.log('NotificationToast - notifications:', notifications); // Debug log

  return (
    <ToastContainer 
      position="bottom-end" 
      className="p-3"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999
      }}
    >
      {notifications.map((notification) => (
        <Toast
          key={notification.id}
          show={true}
          onClose={() => removeNotification(notification.id)}
          delay={3000}
          autohide
          bg={notification.type === 'success' ? 'success' : notification.type === 'error' ? 'danger' : 'info'}
          style={{
            minWidth: '300px'
          }}
        >
          <Toast.Header closeButton>
            <strong className="me-auto">
              {notification.type === 'success' ? '🎉 Thành công!' : 
               notification.type === 'error' ? '❌ Lỗi!' : 'ℹ️ Thông tin!'}
            </strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            <strong>{notification.message}</strong>
          </Toast.Body>
        </Toast>
      ))}
    </ToastContainer>
  );
}

function App() {
  return (
    <NotificationProvider>
      <div>
        <HomePage />
        <FooterPage />
        <NotificationToast />
      </div>
    </NotificationProvider>
  );
}

export default App;
