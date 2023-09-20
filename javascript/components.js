// function updateTime() {
//      const now = new Date();
//      const year = now.getFullYear();
//      const month = (now.getMonth() + 1).toString().padStart(2, '0');
//      const day = now.getDate().toString().padStart(2, '0');
//      const hours = now.getHours().toString().padStart(2, '0');
//      const minutes = now.getMinutes().toString().padStart(2, '0');
//      const timeString = `${year}-${month}-${day} ${hours}:${minutes}`;
//      document.querySelector('.clock').textContent = timeString;
//      return;
//  }
//  // Update the time initially
//  updateTime();
//  // Update the time every minute (60,000 milliseconds)
//  setInterval(updateTime, 60000);
