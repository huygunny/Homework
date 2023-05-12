// Lấy button chơi từ DOM
const playBtn = document.querySelector("#play");

// Lắng nghe sự kiện click của button chơi
playBtn.addEventListener("click", playGame);

function playGame() {
  // Lấy số lớn nhất mà người dùng nhập vào
  let maxNumber = prompt("Nhập vào số lớn nhất mà bạn muốn đoán:");
  
  // Chuyển đổi kiểu dữ liệu của maxNumber từ string sang number
  maxNumber = parseInt(maxNumber);

  // Kiểm tra xem maxNumber có phải là một số hợp lệ hay không
  if (!Number.isInteger(maxNumber) || maxNumber <= 0) {
    alert("Số lớn nhất không hợp lệ, vui lòng nhập lại!");
    return;
  }

  // Chọn một số ngẫu nhiên trong khoảng từ 1 đến maxNumber
  const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

  // Biến lưu số lần đoán của người dùng
  let guessCount = 0;

  // Vòng lặp do..while để cho người dùng đoán tối đa 3 lần
  do {
    // Hiển thị cửa sổ prompt cho người dùng nhập giá trị mà người dùng đoán
    let userGuess = prompt(`Lượt đoán thứ ${guessCount + 1}: Nhập vào một số từ 1 đến ${maxNumber}:`);
    
    // Chuyển đổi kiểu dữ liệu của userGuess từ string sang number
    userGuess = parseInt(userGuess);

    // Kiểm tra xem userGuess có phải là một số hợp lệ hay không
    if (!Number.isInteger(userGuess) || userGuess <= 0 || userGuess > maxNumber) {
      alert(`Số đoán không hợp lệ, vui lòng nhập lại!`);
      continue;
    }

    // Tăng số lần đoán của người dùng lên 1
    guessCount++;

    // So sánh giá trị người dùng đoán với giá trị ngẫu nhiên đã chọn
    if (userGuess === randomNumber) {
      alert(`Chúc mừng bạn đã đoán đúng số!`);
      break;
    } else if (userGuess < randomNumber) {
      alert(`Số của bạn nhỏ hơn số cần đoán, vui lòng đoán lại!`);
    } else {
      alert(`Số của bạn lớn hơn số cần đoán, vui lòng đoán lại!`);
    }
  } while (guessCount < 3);

  // Nếu người dùng đã đoán quá 3 lần mà không đúng số, thông báo thất bại
  if (guessCount === 3) {
    alert(`Bạn đã hết số lần đoán, số cần đoán là ${randomNumber}!`);
  }
}
