function showModal() {
    document.querySelector('.modalWindow').classList.add('modal-visible');
  }

  var base = [];
  function closeModal() {
    var middleArr = [];
    var name = document.querySelector('#name').value;
    var surname = document.querySelector('#surname').value;
    var age = document.querySelector('#age').value;
    middleArr.push(name, surname, age);
    base.push(middleArr);
    addText();

    document.querySelector('.modalWindow').classList.remove('modal-visible');
  }

  function addText() {
    let table = document.querySelector('table');

    var len = base.length;
    var content = [];
    for (let i = 0; i < len; i++) {
      content.push(`
      <tr>
        <td>${base[i][0]}</td>
        <td>${base[i][1]}</td>
        <td>${base[i][2]}</td>
      </tr>
      `);
    }
    table.innerHTML = content.join(' ');
  }