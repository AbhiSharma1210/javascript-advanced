// Script to show what key the user has pressed in a table format

const insertArea = document.getElementById('content-box')

window.addEventListener('keydown', (event) => {
    insertArea.innerHTML = `
        <div id="table">
            <table class="table-style">
                <tr>
                    <th>Key</th>
                    <th>Key Code</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${event.key == ' ' ? 'Space' : event.key}</td>
                    <td>${event.keyCode}</td>
                    <td>${event.code}</td>
                </tr>
            </table>
        </div>
    `
})