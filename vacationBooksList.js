function vacationBooksList (input) {
    let pages = Number(input[0]);
    let pagesperhour = Number(input[1]);
    let deadline = Number(input[2]);
    let readingsum = pages / pagesperhour; 
    let hoursneeded = readingsum / deadline; 
    console.log(hoursneeded)

}

vacationBooksList([432, 15, 4])