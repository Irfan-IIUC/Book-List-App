const title = document.querySelector('#title')
const author = document.querySelector('#author')
const year = document.querySelector('#year')
const btn = document.querySelector('.btn')
const list = document.querySelector('#book-list')

btn.addEventListener('click', function(e){
    e.preventDefault();

    // Basic Validation

    if (title.value == '' || author.value == '' || year.value == ''){
        alert('All Fields Are Required !');

    } else{

        const newRow = document.createElement('tr');

        // Creating new title
        const newTitle = document.createElement('td');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        // Creating new author
        const newAuhor = document.createElement('td');
        newAuhor.innerHTML = author.value;
        newRow.appendChild(newAuhor);

        // Creating new Year
        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        // Displaying in UI
        list.appendChild(newRow);
    }
});