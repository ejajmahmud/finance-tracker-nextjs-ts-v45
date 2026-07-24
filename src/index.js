const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/api/status', (req, res) => {
    res.json({
        app: 'finance-tracker-nextjs-ts-v45',
        tech: 'TypeScript / Next.js',
        category: 'Financial Analytics & Portfolio Engine',
        uptime: process.uptime()
    });
});

app.listen(PORT, () => {
    console.log(`[finance-tracker-nextjs-ts-v45] Server running on port ${PORT}`);
});
