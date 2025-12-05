$.ajax({
    url: 'https://api.github.com/repos/johannesbakken/testrepo',
    success: function(response){
        console.log(response);
    },
    error: function(response){
        console.log(`Status: ${response}.`);
    }
    
})