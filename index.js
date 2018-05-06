function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
  const title = document.getElementById('#title').value;
  const body = document.getElementById('#body').value;
  const postData = { title: title, body: body };
  
  fetch('https://api.github.com/repos/rockychiang/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(postData), 
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(data => getIssues())
}

function showForkedRepo(repo) {
  $('#results').append(`<a href="${repo.url}"> ${repo.url}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(data => showForkedRepo(data));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '2a5dc46b2ae8b2ade83b201c87dafcff628c1ab9'
}
