const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// إخبار الخادم بأن الملفات الساكنة موجودة داخل مجلد public
app.use(express.static(path.join(__dirname, 'public')));

// توجيه أي طلب (Request) إلى ملف index.html الموجود داخل public
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Ivanova World is now looking into /public folder`);
});
