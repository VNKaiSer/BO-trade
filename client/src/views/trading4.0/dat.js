function randomZeroOrOne() {
  // Tạo một số ngẫu nhiên từ 0 đến 1
  const randomValue = Math.random();

  // Kiểm tra giá trị và trả về 0 hoặc 1 với tỷ lệ 70% và 30%
  if (randomValue < 0.65) {
    return 0;
  } else {
    return 1;
  }
}

// Sử dụng hàm để nhận giá trị ngẫu nhiên 0 hoặc 1
for (let i = 0; i < 10; i++) {
  console.log(randomZeroOrOne());
}
