const URL_API = 'http://localhost:8000/api/owners/'

$ (document).ready( async () => {
  const data = await fetch(URL_API,{
    headers: {
      Authorization: "Token d19e1a8c8c74b1b371b51098b4d9430e2ac0c0c2"
    }
  });
  const json = await data.json();
  const owners = json.map((owner) => {
    console.log(owner)
    return `
      <tr>
        <th scope="row">${owner.id}</th>
        <td>${owner.first_name}</td>
        <td>${owner.last_name}</td>
      </tr>
      `
    }
  )
  $('#owners-list').append(owners)
  console.log(data,json)
})