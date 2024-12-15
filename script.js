document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('textEditor').value = e.target.result;
        };
        reader.readAsText(file);
    }
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const text = document.getElementById('textEditor').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'edited_text.txt';
    link.click();
});
