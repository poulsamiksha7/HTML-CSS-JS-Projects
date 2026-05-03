// const API_URL = 'https://lyrics.lewdhutao.my.eu.org';
// const moods = {
//     happy: ['love', 'sun', 'dance', 'joy'],
//     sad: ['rain', 'heartbreak', 'alone', 'cry'],
//     angry: ['fight', 'break', 'rage', 'hate'],
//     calm: ['peace', 'night', 'dream', 'soft']
// };

// document.getElementById('searchBtn').addEventListener('click', async () => {
//     const songInput = document.getElementById('songInput').value.trim();
//     if (!songInput) return alert('Enter song/artist');
    
//     try {
//         const [artist, title] = songInput.toLowerCase().split(/ by | - /);
//         const response = await fetch(`${API_URL}/v1/${artist}/${encodeURIComponent(title)}`);
//         const data = await response.json();
        
//         const lyrics = data.lyrics || 'Lyrics not found';
//         const results = document.getElementById('results');
//         results.innerHTML = `
//             <div class="lyrics">${lyrics}</div>
//             <button id="visualizeBtn">Visualize Harmony</button>
//         `;
//         results.classList.remove('hidden');
//     } catch (err) {
//         alert('Try exact "song artist" format');
//     }
// });
// // Add to script.js
// document.getElementById('visualizeBtn')?.addEventListener('click', () => {
//     const mood = document.getElementById('moodSelect').value;
//     const lyricsText = document.querySelector('.lyrics').textContent.toLowerCase();
//     const moodKeywords = moods[mood];
    
//     const matches = moodKeywords.filter(word => lyricsText.includes(word)).length;
//     const harmonyScore = (matches / moodKeywords.length) * 100;
    
//     document.getElementById('viz').classList.remove('hidden');
//     generatePlaylist(mood, harmonyScore);
//     drawChords(harmonyScore, moodKeywords.length);
// });
// function drawChords(score, matchCount) {
//     const canvas = document.getElementById('chordCanvas');
//     const ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
    
//     const centerX = canvas.width / 2;
//     const centerY = canvas.height / 2;
//     const radius = 150;
    
//     // Harmony wheel
//     ctx.strokeStyle = `hsl(${score}, 70%, 50%)`;
//     ctx.lineWidth = 5;
//     ctx.beginPath();
//     ctx.arc(centerX, centerY, radius, 0, (score / 100) * Math.PI * 2);
//     ctx.stroke();
    
//     // Chord lines
//     for (let i = 0; i < matchCount; i++) {
//         const angle = (i / matchCount) * Math.PI * 2;
//         ctx.beginPath();
//         ctx.moveTo(centerX, centerY);
//         ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius);
//         ctx.strokeStyle = `hsl(${120 + i*30}, 60%, 60%)`;
//         ctx.lineWidth = 3;
//         ctx.stroke();
//     }
// }
// function generatePlaylist(mood, score) {
//     const playlist = document.getElementById('playlist');
//     playlist.innerHTML = `
//         <h3>Harmony Score: ${Math.round(score)}% - ${mood.toUpperCase()} Station</h3>
//         <ul id="songsList" draggable="true" style="list-style: none;">
//             <li>🌙 Moon River (Serene vibes)</li>
//             <li>🎶 Bohemian Rhapsody (Epic moods)</li>
//             <li>✨ Custom Remix</li>
//         </ul>
//     `;
    
//     // Drag to remix
//     const list = document.getElementById('songsList');
//     list.addEventListener('dragstart', (e) => e.dataTransfer.setData('text', e.target.textContent));
//     list.addEventListener('drop', (e) => {
//         e.preventDefault();
//         const data = e.dataTransfer.getData('text');
//         e.target.textContent = `${data} [Remixed ${mood}]`;
//     });
// }

// // Enter key search
// document.getElementById('songInput').addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') document.getElementById('searchBtn').click();
// });