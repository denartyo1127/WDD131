const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        input.focus(); // return focus if input is blank
        return;
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = '❌';

    li.append(deleteButton);
    list.append(li);

    // Add delete functionality
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    });

    input.value = ''; // clear input
    input.focus();    // return focus to input
});