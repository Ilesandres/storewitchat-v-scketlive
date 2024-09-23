const express=require("express");
const app=express();
const mysql=require('mysql');
const cors=require("cors");

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'store_dani'
})

/*categorias */

app.post('/createCategory',(req,res)=>{
    const category=req.body.category;
    const description=req.body.description;
    
    db.query('INSERT INTO CATEGORY(CATEGORY_NAME, DESCRIPTION) VALUES (?,?)',[category,description],
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send('categoria registrada con exito')
            }
        }
    );
});

app.get('/leerCategorias',(req,res)=>{    
    db.query('SELECT *FROM CATEGORY',(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

/*productos */
app.post('/addProduct',(req,res)=>{
    const nombre=req.body.nombre;
    const stock=req.body.stock;
    const precio=req.body.precio;
    const category=req.body.category;
    const isActivo=req.body.isActivo;
    
    db.query('INSERT INTO PRODUCT(PRODUCT_NAME,STOCK,PRICE,ISACTIVO) VALUES(?,?,?,?)',[nombre,stock,precio,isActivo],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send('prodcto agregado correctamente')
        }
    })
});

app.get('/getProducts',(req,res)=>{
    db.query('SELECT *FROM PRODUCT',(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})


app.listen(3001,()=>{
    console.log('corriendo en el puerto 3001')
});