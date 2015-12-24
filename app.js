

$('#fetch').click(function () {
  var user = $('#username').val();
  var url = 'https://api.github.com/users/' + user + '/repos';
  $.ajax(url, {
    contentType: 'application/json',
    success: getRepos
  });
});

function getRepos (results) {
  $('.myrepos').remove();
  console.log('Connecting to API');
  results.forEach(function(repo) {
    console.log(repo.name);
    var $li = $("<li />", {text: repo.name, class: "myrepos"});
    $('#repoList').append($li);
  });
}