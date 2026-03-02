import { IncomingForm } from 'formidable';
import fs from 'fs';
import FormData from 'form-data';

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

    try {
        const form = new IncomingForm();
        const [fields, files] = await new Promise((resolve, reject) => {
            form.parse(req, (err, f, fi) => err ? reject(err) : resolve([f, fi]));
        });

        const key = process.env.OPENAI_API_KEY;
        if (!key) return res.status(400).json({ error: 'No API key' });

        const audioFile = files.audio?.[0] || files.audio;
        if (!audioFile) return res.status(400).json({ error: 'No audio' });

        const formData = new FormData();
        formData.append('file', fs.createReadStream(audioFile.filepath || audioFile.path), {
            filename: 'audio.webm', contentType: 'audio/webm'
        });
        formData.append('model', 'whisper-1');
        formData.append('language', 'ar');

        const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${key}` },
            body: formData
        });

        if (!response.ok) return res.status(response.status).json({ error: 'Whisper error' });
        const data = await response.json();
        return res.status(200).json({ text: data.text });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
