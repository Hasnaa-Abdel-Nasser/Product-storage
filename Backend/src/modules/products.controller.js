import query from "../../databases/dbconnection.js";

const addProduct = (req, res) => {
    const { name, price, description } = req.body;
    query.execute(`insert into products(name , price, description)
                      values('${name}','${price}','${description}')`);
    res.json({ message: "Success" });
};

const updateProduct = (req, res) => {
    const {id , name, price, description } = req.body;
    query.execute(`update products set name = '${name}', price='${price}',description = '${description}' where id = ${id} `);
          res.json({ message: "Success" });
}

const getAllProducts = (req, res) => {
    query.execute(`select * from products`, (err, data) => {
      if (err) {
        res.json({ message: "error" });
      } else {
        res.json({ message: "Success", data });
      }
    });
}

const deleteProduct = (req, res) => {
    const {id} = req.body;
    query.execute(`delete from products where id=${id}`);
    res.json({message : "Success"});
};

export{
    addProduct,
    updateProduct,
    getAllProducts,
    deleteProduct
}