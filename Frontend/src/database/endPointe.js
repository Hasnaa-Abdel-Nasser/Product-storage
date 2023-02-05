import axios from "axios";

export function Post(Pname, Pprice, Pdescription, setProduct) {
  let productobj = {
    name: Pname,
    price: Pprice,
    description: Pdescription,
  };
  fetch("http://localhost:3000/products", {
    method: "POST",
    body: JSON.stringify(productobj),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((json) => axios.get("http://localhost:3000/products").then((res) => {
      setProduct(res.data.data);
    }));
    storage("post");
}

export function Delete(id, setProduct) {
  let productobj = {
    id: id,
  };
  fetch("http://localhost:3000/products", {
    method: "DELETE",
    body: JSON.stringify(productobj),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((json) => axios.get("http://localhost:3000/products").then((res) => {
      setProduct(res.data.data);
    }));
    storage("delete");

}

export function Put(Pid, Pname, Pprice, Pdescription, setProduct) {
  let productobj = {
    id: Pid,
    name: Pname,
    price: Pprice,
    description: Pdescription,
  };
  fetch("http://localhost:3000/products", {
    method: "PUT",
    body: JSON.stringify(productobj),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((json) => axios.get("http://localhost:3000/products").then((res) => {
      setProduct(res.data.data);
    }));
    storage("update");

}


function storage(data){
  if(data === "post"){

    let add = document.getElementById('Added');
    let numAdd = parseInt(add.innerHTML);
    window.localStorage.setItem("add" , ++numAdd);
    console.log(window.localStorage.getItem("add"))
    add.innerHTML = `${window.localStorage.getItem("add")} Product`;

  }else if(data === "delete"){

    let deleted = document.getElementById('Deleted');
    let numdelete = parseInt(deleted.innerHTML);
    window.localStorage.setItem("deleted" , ++numdelete);
    deleted.innerHTML = `${window.localStorage.getItem("deleted")} Product`;

  }else if(data === "update"){

    let update = document.getElementById('Updated');
    let numupdate = parseInt(update.innerHTML);
    window.localStorage.setItem("update" , ++numupdate);
    update.innerHTML = `${window.localStorage.getItem("update")} Product`;

  }
}