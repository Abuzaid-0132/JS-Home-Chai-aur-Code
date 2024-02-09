const insert = document.getElementById('insert')

window.addEventListener('keydown', (event)=>{
    insert.innerHTML = `
        <div class="color">
        <table>
        <tr>
          <th>key</th>
          <th>keycode</th>
          <th>code</th>
        </tr>
        <tr>
          <td>${event.key === " " ? "space" : event.key}</td>
          <td>${event.keycode}</td>
          <td>${event.code}</td>
        </tr>
      </table>
        </div>
    `
})