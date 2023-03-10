document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('username-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('The form was submitted');
        const username = document.getElementById('username-input').value;
        const userSummary = fetchUserSummary(username);
        updateUserSummary(userSummary);
    });

    // Update this function, add code to retrieve and process the user summary information
    const fetchUserSummary = (username) => {
        const apiEndpoint = 'https://api.github.com/users/USERNAME';
        console.log('Searching for username: ', username);
        return {
            publicRepositories: 0,
            email: 'test@test.com',
            company: 'Test Ltd.'
        };
    };

    // Update this function, add code to update the user interface with the user summary information
    const updateUserSummary = (userSummary) => {
        const userSummaryContainer = document.getElementById('user-summary-container');
        // Update this code to display the user information on the page
        userSummaryContainer.textContent = '';
    };
});
