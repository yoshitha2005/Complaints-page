const Notification = ({ message }) => {
    return message ? <div className="notification">{message}</div> : null;
  };
  
  export default Notification;
  