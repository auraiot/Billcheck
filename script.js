// JavaScript: බිල්පත් තොරතුරු පෙන්වීම
function checkBill() {
    const inputNumber = document.getElementById('phoneNumber').value.trim();
    // ඔබ ඉල්ලූ දුරකථන අංක
    const allowedNumbers = [
        '0792490759',
        '0799024759',
        '0794642749',
        '0793304820'
    ];

    const billDetailsDiv = document.getElementById('billDetails');
    const outputPhone = document.getElementById('outputPhone');
    const outputBillNumber = document.getElementById('outputBillNumber');
    const outputDate = document.getElementById('outputDate');

    if (allowedNumbers.includes(inputNumber)) {
        // 1. අද දින ලබා ගැනීම
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const year = today.getFullYear();
        const dateString = `${year}-${month}-${day}`; 

        // 2. අංකය මත පදනම් වූ බිල්පත් අංකයක් සෑදීම
        const billSuffix = inputNumber.slice(-4);
        const billNumber = `CLBB${year}${month}${billSuffix}`;

        // 3. HTML වෙත දත්ත ඇතුළු කිරීම
        outputPhone.textContent = inputNumber;
        outputBillNumber.textContent = billNumber;
        outputDate.textContent = dateString;
        
        // 4. බිල්පත පෙන්වීම
        billDetailsDiv.style.display = 'block';
    } else {
        // අංකය නිවැරදි නැතිනම්
        alert('ඔබ ඇතුළු කළ දුරකථන අංකය සඳහා බිල්පත් තොරතුරු හමු නොවීය. හෝ ඔබේ මාසික බිල්පත නිකුත් කර නොමැත කරුණාකර  නැවත  උත්සාහ කරන්න.');
        billDetailsDiv.style.display = 'none';
    }
}